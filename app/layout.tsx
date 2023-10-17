import type { Metadata } from 'next'
import '../styles/globals.scss'
import RightSideBar from "@/components/RightSideBar";


export const metadata: Metadata = {
  title: 'CV',
  description: 'My CV Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="cv-wrapper">
      <div className="container">
          {children}
          <RightSideBar/>
      </div>
      </body>
    </html>
  )
}
