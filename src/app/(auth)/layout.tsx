import { FormPage } from '@/components/form/FormPage'
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  return <FormPage>{children}</FormPage>
}
