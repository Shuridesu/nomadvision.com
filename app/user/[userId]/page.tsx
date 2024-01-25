import { getUserDetail } from "@/actions/user"
import UserDetail from "@/components/user/UserDetail"

interface UserDetailPageProps {
  params: {
    userId: string
  }
}

// User Detail Page
const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { userId } = params

  // get user detail
  const { success, user } = await getUserDetail({ userId })

  if (!success) {
    return (
      <div className="text-center text-sm text-gray-500">
        failed to get user
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center text-sm text-gray-500">
        user not found
      </div>
    )
  }

  return <UserDetail user={user} />
}

export default UserDetailPage