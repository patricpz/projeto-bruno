import { ReactNode } from 'react'
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip
} from './tooltip'

interface SimpleTooltipProps {
  children: JSX.Element
  content: ReactNode
}

export const SimpleTooltip = ({ children, content }: SimpleTooltipProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
