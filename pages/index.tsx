import type { NextPage } from 'next'
import LinkButton from '../components/LinkButton'
import { FiUser, FiCode, FiSend } from 'react-icons/fi'

const Home: NextPage = () => {
  return (
    <div className="dark:bg-slate-700 items-center flex h-full flex-col text-center">
      <div className="my-auto flex items-center flex-col">
        <h1 className="text-6xl font-sans font-semibold dark:text-white">stephen sparling</h1>
        <h2 className="mt-8 dark:text-white">web developer | making cool stuff</h2>
        <div className="mt-12 flex flex-col sm:flex-row">
          <LinkButton
            Icon={FiUser}
            href="/about"
            label="who I am"
            className="sm:mr-24 mb-6 sm:mb-0"
          />
          <LinkButton
            Icon={FiCode}
            href="/about"
            label="what I do"
            className="sm:mr-24 mb-6 sm:mb-0"
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
