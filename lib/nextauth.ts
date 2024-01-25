import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt"

// expand session type to add accessToken and refreshToken
declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
  }
}

//define user type
export interface UserType {
  accessToken: string
  uid: string
  name: string
  email: string
  avatar: string | undefined
  introduction: string
}

// common function to fetch API
const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) {
    throw new Error("No API_URL")
  }

  const response = await fetch(`${apiUrl}${url}`, options)

  if (!response.ok) {
    throw new Error("Failed to fetch API")
  }

  return response.json()
}

// verify access token
const verifyAccessToken = async (token: JWT) => {
  return fetchAPI("/api/auth/jwt/verify/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token.accessToken }),
  }).then((res) => res.ok)
}

// refresh access token
const refreshAccessToken = async (token: JWT) => {
  const { access } = await fetchAPI("/api/auth/jwt/refresh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: token.refreshToken }),
  })

  return {
    accessToken: access,
    refreshToken: token.refreshToken,
  }
}

// authorize user
const authorizeUser = async (email: string, password: string) => {
  const session = await fetchAPI("/api/auth/jwt/create/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const user = await fetchAPI("/api/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.access}`,
    },
  })

  return {
    ...session,
    user,
  }
}

// NextAuth options
export const authOptions: NextAuthOptions = {
  // options provider
  providers: [
    // mail address verification
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // mail address and password
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("please type email and password")
        }

        // authorize user
        return authorizeUser(credentials.email, credentials.password)
      },
    }),
  ],
  // session options
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        return {
          ...token,
          accessToken: user.access,
          refreshToken: user.refresh,
        }
      }

      // verify access token
      if (await verifyAccessToken(token)) {
        return token
      }

      // refresh access token
      return refreshAccessToken(token)
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken

      return session
    },
  },
}

// get auth session
export const getAuthSession = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.accessToken) {
    return null
  }

  // fetch user data
  const user = await fetchAPI("/api/auth/users/me/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${session.accessToken}`,
    },
  })

  const userData: UserType = {
    ...user,
    accessToken: session.accessToken,
  }

  return userData
}