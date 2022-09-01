import { ReactNode } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full w-full items-center justify-center dark:bg-slate-700">
      <div className="container relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="absolute inset-0 flex h-full w-full items-start justify-end py-8 px-8">
          <button className="rounded bg-white p-4 shadow-md dark:bg-slate-700">
            {/* <FiSun /> */}
            <FiMoon />
          </button>
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}
