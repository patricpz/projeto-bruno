import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  LogOutIcon,
  LucideIcon,
  RocketIcon,
  SlidersVerticalIcon
} from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type UserDropdownProps = {
  user: Session['user']
}

type DropdownItem =
  | {
      label: string
      icon: LucideIcon
      onClick: () => void
    }
  | 'separator'

export function UserDropdown({ user }: UserDropdownProps) {
  const dropdownItems: DropdownItem[] = [
    {
      label: 'Log out',
      icon: LogOutIcon,
      onClick: () => signOut()
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:bg-foreground/5">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{user.name?.[0]}</AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col space-y-1 overflow-hidden text-left">
            {user.name && (
              <p className="text-xs font-medium leading-none">{user.name}</p>
            )}
            <p className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownItems.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <DropdownMenuSeparator key={'separator-user-dropdown-' + index} />
            )
          }
          return (
            <DropdownMenuItem key={item.label} onClick={item.onClick}>
              <item.icon className="mr-3 h-3 w-3" />
              {item.label}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
