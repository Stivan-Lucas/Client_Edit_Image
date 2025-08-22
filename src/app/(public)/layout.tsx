import { ModeToggle } from '@/components/mode-toggle'

export default function PublicRoutes({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <ModeToggle />
      <h1 className="font-bold">Public Routes</h1>
      {children}
    </div>
  )
}
