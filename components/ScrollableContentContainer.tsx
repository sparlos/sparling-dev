import Head from 'next/head'
import { ReactNode } from 'react'

type ScrollableContentContainerProps = {
  children: ReactNode
  title?: string
  size?: string
}

export default function ScrollableContentContainer({
  children,
  title,
  size = 'max-w-3xl',
}: ScrollableContentContainerProps) {
  return (
    <div className="h-full w-full overflow-auto">
      <Head>
        <title>{title || 'sparling.dev'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={`ml-auto mr-auto ${size} px-6 pt-24 pb-32 leading-relaxed sm:px-12`}
      >
        {children}
      </div>
    </div>
  )
}
