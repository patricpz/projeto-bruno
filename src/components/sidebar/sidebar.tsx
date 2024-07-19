import Link from 'next/link'

import { cn } from '@/lib/utils'

export type DashboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardSidebar({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn('flex flex-col border-r border-border py-3', className)}
    >
      {children}
    </aside>
  )
}

export function DashboardSidebarHeader({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <header className={cn(['mb-10 flex h-12 border-border px-6', className])}>
      {children}
    </header>
  )
}

export function DashboardSidebarHeaderTitle({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <h2 className={cn(['', className])}>{children}</h2>
}

export function DashboardSidebarMain({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <main className={cn(['px-3', className])}>{children}</main>
}

export function DashboardSidebarNav({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardSidebarNavHeader({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <header className={cn(['', className])}>{children}</header>
}

export function DashboardSidebarNavHeaderTitle({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <div
      className={cn([
        'ml-3 text-[0.6rem] uppercase text-muted-foreground',
        className
      ])}
    >
      {children}
    </div>
  )
}

export function DashboardSidebarNavMain({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <main className={cn(['flex flex-col gap-2', className])}>{children}</main>
  )
}

type DashboardSidebarNavLinkProps = {
  href: string
  active?: boolean
}

export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn([
        'hover flex items-center rounded-md px-3 py-2 text-sm hover:bg-secondary/50',
        active && 'bg-secondary',
        className
      ])}
    >
      {children}
    </Link>
  )
}

export function DashboardSidebarFooter({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn(['mt-auto border-t border-border p-3', className])}>
      {children}
    </footer>
  )
}
