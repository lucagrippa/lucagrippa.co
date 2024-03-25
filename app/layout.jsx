import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Logo } from '@/components/logo'
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] })

const routes = [
  {
      title: "Home",
      href: "/",
      //   description:
      //     "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
      title: "Blog",
      href: "/blog",
      //   description:
      //     "For sighted users to preview content available behind a link.",
  },
  {
      title: "Projects",
      href: "/projects",
      //   description:
      //     "For sighted users to preview content available behind a link.",
  },
  {
      title: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB,
      //   description:
      //     "For sighted users to preview content available behind a link.",
  },
]

export const metadata = {
  title: 'lucagrippa.io',
  description: 'Personal blog and portfolio of Luca Grippa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <Logo />
            <Navigation routes={routes} />
            <main className="flex flex-col mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-10">
              {children}
            </main>
            <Footer routes={routes} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
