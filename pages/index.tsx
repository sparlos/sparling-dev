import type { NextPage } from 'next'
import Head from 'next/head'
import LinkButton from '../components/LinkButton'
import { FiUser, FiCode, FiSend } from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center text-center dark:text-white">
      <Head>
        <title>stephen sparling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="my-auto flex flex-col items-center">
        <h1 className="font-sans text-6xl font-semibold">stephen sparling</h1>
        <h2 className="mt-8">web developer | making cool stuff</h2>
        <div className="mt-12 flex flex-col sm:flex-row">
          <LinkButton
            Icon={FiUser}
            href="/about"
            label="who I am"
            className="mb-6 sm:mr-24 sm:mb-0"
          />
          <LinkButton
            Icon={FiCode}
            href="/about"
            label="what I do"
            className="mb-6 sm:mr-24 sm:mb-0"
            bgColor="bg-red-500"
          />
          <LinkButton
            Icon={FiSend}
            href="/about"
            label="where I'm found"
            bgColor="bg-violet-500"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
