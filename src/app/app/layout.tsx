import { PropsWithChildren, Suspense } from 'react'
import { MainSidebar } from '@/layout/sidebar/mainSidebar'
import { getServerAuthSession } from '@/lib/auth'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession()

  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
