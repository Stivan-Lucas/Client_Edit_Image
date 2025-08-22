import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import ProgressBar from '@/components/progress-bar'

import './globals.css'
import { LoadingProvider } from '../context/loading-context'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EDIT IMAGE',
  description:
    'Edição e manipulação de imagens para transformar em PDF. De uma maneira simples e direta!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LoadingProvider>
              <ProgressBar />
              {children}
            </LoadingProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
