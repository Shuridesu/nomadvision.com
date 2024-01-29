"use server"

// 共通のAPIリクエスト
const fetchAPI = async (url: string, options: RequestInit) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) {
    return { success: false, error: "No API" }
  }

  try {
    const response = await fetch(`${apiUrl}${url}`, options)

    if (!response.ok) {
      return { success: false, error: "failed to fetch" }
    }

    // if response is json, return json data
    const contentType = response.headers.get("Content-Type")
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json()
      return { success: true, data }
    }

    // if response is not json, return response
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "network error" }
  }
}

interface TemporarySignupProps {
  name: string
  email: string
  password: string
  rePassword: string
}

// provisional signup
export const temporarySignup = async ({
  name,
  email,
  password,
  rePassword,
}: TemporarySignupProps) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    re_password: rePassword,
  })

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }

  // send provisional signup request
  const result = await fetchAPI("/api/auth/users/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}

interface CompleteSignupProps {
  uid: string
  token: string
}

// final signup
export const completeSignup = async ({ uid, token }: CompleteSignupProps) => {
  const body = JSON.stringify({
    uid,
    token,
  })

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }

  // send final signup request
  const result = await fetchAPI("/api/auth/users/activation/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}

interface ForgotPasswordProps {
  email: string
}

// password reset
export const forgotPassword = async ({ email }: ForgotPasswordProps) => {
  const body = JSON.stringify({
    email,
  })

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }

  // send password reset request
  const result = await fetchAPI("/api/auth/users/reset_password/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}


interface ResetPasswordProps {
  uid: string
  token: string
  newPassword: string
  reNewPassword: string
}

// reset password
export const resetPassword = async ({
  uid,
  token,
  newPassword,
  reNewPassword,
}: ResetPasswordProps) => {
  const body = JSON.stringify({
    uid,
    token,
    new_password: newPassword,
    re_new_password: reNewPassword,
  })

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }

  // send reset password request
  const result = await fetchAPI(
    "/api/auth/users/reset_password_confirm/",
    options
  )

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}

export interface UserDetailType {
  uid: string
  name: string
  email: string
  avatar: string | undefined
  introduction: string
  created_at: string
}

interface GetUserDetailProps {
  userId: string
}

// get user detail
export const getUserDetail = async ({ userId }: GetUserDetailProps) => {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
  }

  // send get user detail request
  const result = await fetchAPI(`/api/users/${userId}/`, options)

  if (!result.success) {
    console.error(result.error)
    return { success: false, user: null }
  }

  const user: UserDetailType = result.data

  return { success: true, user }
}

interface UpdateUserProps {
  accessToken: string
  name: string
  introduction: string | undefined
  avatar: string | undefined
}

// profile update
export const updateUser = async ({
  accessToken,
  name,
  introduction,
  avatar,
}: UpdateUserProps) => {
  const body = JSON.stringify({
    name,
    introduction,
    avatar,
  })

  const options = {
    method: "PATCH",
    headers: {
      Authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }

  // send profile update request
  const result = await fetchAPI("/api/auth/users/me/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false, user: null }
  }

  const user: UserDetailType = result.data

  return { success: true, user }
}

interface UpdatePasswordProps {
  accessToken: string
  currentPassword: string
  newPassword: string
  reNewPassword: string
}

// update password
export const updatePassword = async ({
  accessToken,
  currentPassword,
  newPassword,
  reNewPassword,
}: UpdatePasswordProps) => {
  const body = JSON.stringify({
    current_password: currentPassword,
    new_password: newPassword,
    re_new_password: reNewPassword,
  })

  const options = {
    method: "POST",
    headers: {
      Authorization: `JWT ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }

  //submit password update request
  const result = await fetchAPI("/api/auth/users/set_password/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}

interface contactUsProps {
  name: string
  email: string
  message: string
}


export const contactUs = async ({
  name,
  email,
  message,
}: contactUsProps
) => {
  const body = JSON.stringify({
    name,
    email,
    message,
  })

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }

  // send contact us request
  const result = await fetchAPI("/send-email/", options)

  if (!result.success) {
    console.error(result.error)
    return { success: false }
  }

  return { success: true }
}