import { DownloadIcon, LucideIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from './dropdown-menu'

interface SimpleDropdownPropsSchema {
  children: React.ReactNode
  items: SimpleDropdownMenuItemSchema[]
}

export type SimpleDropdownMenuItemSchema =
  | {
      name: string
      icon: LucideIcon
      onClick: () => void
      subMenu?: undefined
    }
  | {
      name: string
      icon?: LucideIcon
      onClick?: undefined
      subMenu?: Omit<SimpleDropdownMenuItemSchema, 'subMenu'>[]
    }

export const SimpleDropdown = ({
  children,
  items
}: SimpleDropdownPropsSchema) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => {
          if (!item.subMenu) {
            return (
              <DropdownMenuItem
                key={item.name}
                onClick={item.onClick}
                className="gap-2"
              >
                {item.icon && <item.icon size={15} />}
                {item.name}
              </DropdownMenuItem>
            )
          }

          return (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="gap-2">
                {item.icon && <item.icon size={15} />}
                {item.name}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {item.subMenu.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem.name}
                      onClick={subItem.onClick}
                      className="gap-2"
                    >
                      {item.icon && <item.icon size={15} />}
                      {subItem.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
