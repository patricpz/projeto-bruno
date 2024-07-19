import { PropsWithChildren, Suspense } from 'react'
import { MainSidebar } from '@/layout/sidebar/mainSidebar'
import { getServerAuthSession } from '@/lib/auth'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession()

  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Suspense fallback={<div>Loading...</div>}>
        <MainSidebar user={session!.user!} />
      </Suspense>

      <main>{children}</main>
    </div>
  )
}
