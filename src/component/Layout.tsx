import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Header } from './Header'

type LayoutProps = {
  classNames?: string
  children: ReactNode | ReactNode[]
}
export const Layout: FC<LayoutProps> = ({ classNames, children }) => {
  return (
    <main className={twMerge('min-h-screen bg-black ', classNames)}>
      <Header />
      <div className="w-full pt-12 mx-auto">
        {children}
      </div>
    </main>
  )
}
