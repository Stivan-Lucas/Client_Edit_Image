'use client'

import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="flex gap-2 flex-col p-4">
      <Link href={`/dashboard`}>Dashboard</Link>
      <Link href={`/sign-up`}>Register</Link>
      <Link href={`/pricing`}>Pricing</Link>
    </div>
  )
}
