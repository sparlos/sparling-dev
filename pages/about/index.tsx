import { motion } from 'framer-motion'
import Head from 'next/head'
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
        I&apos;m a driven young professional in the world of full stack web
        design & development. I&apos;ve spent the last few years honing my
        skills in top web technologies including React, jQuery, SQL, PHP, Node,
        SASS & SCSS, Bootstrap, VS Code, Figma, WordPress, Python, Vue, MongoDB,
        and GraphQL.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.1,
        }}
      >
        At my last job, I worked within a large team of other sales associates
        and multiple managers. I gained a lot of valuable experience pertaining
        to communication, teamwork, meeting the varied expectations of multiple
        people, and achieving goals on a deadline.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.15,
        }}
      >
        I&apos;m hardworking, receptive and unrelenting when it comes to doing
        the very best that I can. This is demonstrated by my 4 year study at
        York University, culminating in a Bachelor of Fine Arts with Honours. I
        was awarded a Magna Cum Laude for my efforts across those 4 years.
      </motion.p>
      <motion.p
        className="mt-8"
        {...DEFAULT_SLIDE_RIGHT_PROPS}
        transition={{
          ...DEFAULT_SPRING_TRANSITION,
          delay: 0.2,
        }}
      >
        If all of this sounds good to you, I&apos;m ready to work. Preferably
        full-time; I&apos;m open to either local (Toronto area) or remote work.
        Please reach out to me and I&apos;d love to start a dialogue.
      </motion.p>
    </ScrollableContentContainer>
  )
}
