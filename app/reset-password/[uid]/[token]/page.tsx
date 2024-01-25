import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import ResetPassword from "@/components/auth/ResetPassword"

interface ResetPasswordProps {
  params: {
    uid: string
    token: string
  }
}

// password reset page
const ResetPasswordPage = async ({ params }: ResetPasswordProps) => {
  const { uid, token } = params

  // get user session
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  return <ResetPassword uid={uid} token={token} />
}

export default ResetPasswordPage