import { ModeToggle } from '@/components/mode-toggle'

export default function PrivateRoutes({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ModeToggle />
      <h1 className="font-bold">Private Routes</h1>
      {children}
    </div>
  )
}
