import { motion } from 'framer-motion'
import Link from 'next/link'
import ScrollableContentContainer from '../../components/ScrollableContentContainer'
import {
  DEFAULT_SLIDE_DOWN_PROPS,
  DEFAULT_SLIDE_RIGHT_PROPS,
  DEFAULT_SPRING_TRANSITION,
} from '../../utils/framer'

export default function About() {
  return (
    <ScrollableContentContainer title="about | sparling.dev">
      <motion.h1 className="mt-4 text-4xl" {...DEFAULT_SLIDE_DOWN_PROPS}>
        Hi, I&apos;m Stephen!
      </motion.h1>
      <motion.p
        className="mt-8 sm:mt-14"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.05,
        }}
      >
        I went into web development because I love to create. The power to turn
        simple text files into complex web applications, beautiful layouts, and
        robust backend systems is something that I find even more magical now
        than when I began five years ago.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.1,
        }}
      >
        I&apos;ve been working professionally in the field since March 2020 at
        my current company,{' '}
        <a
          className="underline"
          href="https://finnovate.io/"
          target="_blank"
          rel="noreferrer"
        >
          finnovate.io
        </a>
        , where I&apos;ve been able to foster countless skills while working
        with a diverse array of teams, bringing software to life.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.15,
        }}
      >
        I&apos;ve also had the chance to work with a vast variety of
        technologies, which you can take an in-depth look at{' '}
        <Link href="/projects-and-skills?view=skills">
          <button className="underline">on the skills page.</button>
        </Link>{' '}
        For the sake of summary, some technologies I&apos;ve had a lot of
        professional experience with are: React, AWS, Python/Django, Kubernetes,
        GCP, React Native, Node, Postgres, MongoDB, and MySQL.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.2,
        }}
      >
        Along with those specialized technologies, I have a very strong
        foundation in HTML (semantics/accessibility is a big deal to me), CSS
        (SCSS, styled components, cross browser testing), and JavaScript
        (basically everything you&apos;d read about in the excellent{' '}
        <a
          className="underline"
          href="https://github.com/getify/You-Dont-Know-JS"
          target="_blank"
          rel="noreferrer"
        >
          &quot;You Don&apos;t Know JS Yet&quot;
        </a>{' '}
        book series).
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.25,
        }}
      >
        While I have strong software development skills, I believe the hallmark
        of a truly great developer are soft skills, specifically a
        developer&apos;s ability to communicate. Being able to communicate
        extremely effectively both with technical individuals (other developers,
        technically oriented clients) and non-technical individuals (project
        managers, designers, clients who might not understand the technical
        details of a project) is one of my greatest assets. I am consistently
        able to discuss complex ideas in a way that anyone can understand,
        taking into account their level of software knowledge. I&apos;m also a
        great leader, having been promoted to Staff Software Developer after
        just 2 years at finnovate.io.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.3,
        }}
      >
        If you&apos;ve made it this far, thanks for reading about me! If
        you&apos;d like to reach out and start a dialogue to learn more, head on
        over to{' '}
        <Link href="/contact">
          <button className="underline">the contact page</button>
        </Link>{' '}
        to find out how you can do that.
      </motion.p>
    </ScrollableContentContainer>
  )
}
