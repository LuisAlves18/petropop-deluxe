'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { SessionProvider } from "next-auth/react"
import ApolloGraphqlProvider from '@/utils/apollo/ApolloGraphQlProvider'
import Header from './components/Header'




export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body className=" ml-auto mr-auto">
        
      <ApolloGraphqlProvider>
        <SessionProvider session={session}>
          <Header/>
          <div className={`${inter.className} overflow-hidden max-w-screnSize flex justify-center`}>{children}</div>
        </SessionProvider>
      </ApolloGraphqlProvider>
      </body>
    </html>
  )
}
