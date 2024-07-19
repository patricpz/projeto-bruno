import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ThemeWrapper } from '@/contexts/themeWrapper'
import './globals.css'
import { SessionWrapper } from '@/contexts/sessionWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desafio 2',
  description: 'Desafio 2'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionWrapper>{children}</SessionWrapper>
        </ThemeWrapper>
        <Toaster />
      </body>
    </html>
  )
}
