'use client'

import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="flex gap-2 flex-col p-4">
      <h1 className="font-bold">Estou me comprando!</h1>
      <Link href={`/`}>Voltar para a Home</Link>
    </div>
  )
}
