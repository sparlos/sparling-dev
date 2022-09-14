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
      <motion.h1 className="text-4xl" {...DEFAULT_SLIDE_DOWN_PROPS}>
        Hi, I&apos;m Stephen!
      </motion.h1>
      <motion.p
        className="mt-14"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.05,
        }}
      >
        I went into web development because I am someone who loves to create.
        The power to use simple text files to make complex web applications,
        beautiful layouts, and robust backend systems is something that I find
        extremely magical, even after having done it for the last 5 years.
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
        . While working here, I&apos;ve been able to foster countless skills
        while working with a wide variety of teams to bring software to life.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.15,
        }}
      >
        I&apos;ve also had the chance to work with a vast array of technologies,
        which you can take an in-depth look{' '}
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
        (basically everything you&apos;d read about in the &quot;You Don&apos;t
        Know JS Yet&quot; book series).
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
        of a truly great developer is soft skills, specifically their ability to
        communicate. Being able to communicate extremely effectively both with
        technical (other developers, technical clients) and non-technical
        (project managers, designers, non-technical clients) individuals is one
        of my greatest assets. I strive to discuss complex ideas in a way that
        anyone can understand, taking into account their level of software
        knowledge. I&apos;m also a great leader, having been promoted to a Staff
        Software Developer after just 2 years of working at finnovate.io.
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
        over to the contact page with ways you can do that.
      </motion.p>
    </ScrollableContentContainer>
  )
}
