import { redirect } from "next/navigation"
import { getAuthSession } from "@/lib/nextauth"
import Password from "@/components/settings/Password"

// update password page
const PasswordPage = async () => {
  // get user session
  const user = await getAuthSession()

  if (!user) {
    redirect("/login")
  }

  return <Password user={user} />
}

export default PasswordPage