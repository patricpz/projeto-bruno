import logo from '@/assets/logo/logo.png'
import Link from 'next/link'

export function Logo() {
  return (
    <div className="py-6">
      <Link href={'/app'}>
        <img src={logo.src} alt="Antrol Ai" />
      </Link>
    </div>
  )
}
