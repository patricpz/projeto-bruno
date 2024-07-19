import { UserSession } from '@/schemas/user'
import { Sidebar } from './sidebar/sidebar'

type MainSidebarProps = {
  user: UserSession
}

export async function MainSidebar({ user }: MainSidebarProps) {
  return (
    <div className="flex">
      <Sidebar user={user} />
    </div>
  )
}
