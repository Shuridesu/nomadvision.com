import { redirect } from "next/navigation"
import { completeSignup } from "@/actions/user"
import { getAuthSession } from "@/lib/nextauth"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CompleteSignupPageProps {
  params: {
    uid: string
    token: string
  }
}

//final registration @age
const CompleteSignupPage = async ({ params }: CompleteSignupPageProps) => {
  const { uid, token } = params

  // 認証情報取得
  const user = await getAuthSession()

  if (user) {
    redirect("/")
  }

  //final registration
  const res = await completeSignup({ uid, token })

  if (res.success) {
    return (
      <div className="max-w-[400px] m-auto text-center">
        <div className="text-2xl font-bold mb-10 mt-10">Complete Registration</div>
        <div>Your account registration has been successfully completed.</div>
        <div className="mb-5">Please Login</div>
        <Button asChild className="font-bold">
          <Link href="/login">LOGIN</Link>
        </Button>
      </div>
    )
  } else {
    return (
      <div className="max-w-[400px] m-auto text-center">
        <div className="text-2xl font-bold mb-10 mt-10">Registration failure</div>
        <div>Failed to complete the final account registration</div>
        <div className="mb-5">Please proceed with the provisional account registration again</div>
        <Button asChild className="font-bold">
          <Link href="/signup">REGISTRATION</Link>
        </Button>
      </div>
    )
  }
}

export default CompleteSignupPage