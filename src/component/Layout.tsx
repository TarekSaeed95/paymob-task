import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Header } from './Header'

type LayoutProps = {
  classNames?: string
  children: ReactNode| ReactNode[]
}
export const Layout: FC<LayoutProps> = ({ classNames, children }) => {
  return (
    <main className={twMerge('min-h-screen bg-[#F3F4F8] ', classNames)}>
      <Header />
      <div className="w-full mx-auto sm:w-1/2">
      </div>
    </main>
  )
}
