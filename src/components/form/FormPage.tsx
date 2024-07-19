import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type FormPageGenericProps<T = unknown> = {
  children: ReactNode
  className?: string
} & T

export function FormPage({ className, children }: FormPageGenericProps) {
  return <main className={cn('p-8', className)}>{children}</main>
}

export function FormContainer({ className, children }: FormPageGenericProps) {
  return (
    <div className={cn('mx-auto max-w-md space-y-4', className)}>
      {children}
    </div>
  )
}

export function FormHeader({ className, children }: FormPageGenericProps) {
  return <div className={cn('text-center', className)}>{children}</div>
}

export function FormTitle({ className, children }: FormPageGenericProps) {
  return <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
}

export function FormDescription({ className, children }: FormPageGenericProps) {
  return (
    <p className={cn('text-gray-500 dark:text-gray-400', className)}>
      {children}
    </p>
  )
}

export function FormContent({ className, children }: FormPageGenericProps) {
  return <div className={cn('space-y-4', className)}>{children}</div>
}

export function FormInputs({ className, children }: FormPageGenericProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4', className)}>{children}</div>
  )
}

export function FormInput({ className, children }: FormPageGenericProps) {
  return <div className={cn('', className)}>{children}</div>
}
