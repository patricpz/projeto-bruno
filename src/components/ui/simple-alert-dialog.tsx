import { cn } from '@/lib/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from './alert-dialog'

interface SimpleAlertDialogProps {
  children: React.ReactNode
  title: string
  description: string
  cancelText: string
  confirmText: string
  onConfirm: () => void
  danger?: boolean
}

export const SimpleAlertDialog = ({
  children,
  title,
  description,
  cancelText,
  confirmText,
  onConfirm,
  danger = false
}: SimpleAlertDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={cn({
              'bg-destructive text-destructive-foreground hover:bg-destructive/80':
                danger
            })}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
