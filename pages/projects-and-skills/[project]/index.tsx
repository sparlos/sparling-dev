import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ScrollableContentContainer from '../../../components/ScrollableContentContainer'
import projects from '../../../data/projects'
import { Project } from '../../../data/projects/index'
import {
  getImageSlideDownAnimation,
  getTextSlideLeftAnimation,
} from '../../../utils/animations/project'
import { purifyProjectDescription } from '../../../utils/projects'

type DynamicProjectProps = {
  project: Project
}

export default function DynamicProject({ project }: DynamicProjectProps) {
  const router = useRouter()
  const [purifiedDescription, setPurifiedDescription] = useState(
    project.description
  )

  useEffect(() => {
    setPurifiedDescription(purifyProjectDescription(project.description))
  }, [project])

  return (
    <ScrollableContentContainer
      title={`${project.title} | sparling.dev`}
      size="max-w-6xl"
    >
      <div className="grid grid-cols-4 gap-4">
        <div
          className={`col-span-4 ${
            project.images.portrait.length === 0
              ? 'md:col-span-4'
              : 'md:col-span-3'
          }`}
        >
          <div>
            <motion.h1
              className="mt-3 mb-2 text-4xl"
              {...getTextSlideLeftAnimation()}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className="width-full mb-6 flex flex-wrap"
              {...getTextSlideLeftAnimation()}
            >
              {project.tags.map((tag, index) => (
                <div
                  className="mr-2 text-slate-500 dark:text-slate-200"
                  key={tag}
                >
                  {tag} {index !== project.tags.length - 1 && ' |'}
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            {...getTextSlideLeftAnimation()}
            className="mb-4 max-w-prose pr-8"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: purifiedDescription,
              }}
            />
          </motion.div>
          <motion.button
            onClick={() => router.push('/projects-and-skills?view=projects')}
            className="mb-8 text-cyan-700 underline dark:text-cyan-500"
            {...getTextSlideLeftAnimation()}
          >
            Back to projects
          </motion.button>
          {project.images.landscape.map((landscapeImage, index) => (
            <motion.div
              key={`landscape-image-${index}`}
              {...getImageSlideDownAnimation(0.25 + index * 0.1)}
            >
              <Image
                className="mx-auto mb-4 rounded-md shadow-md"
                src={landscapeImage}
                alt={`${project.title} cover image`}
                // placeholder="blur"
              />
            </motion.div>
          ))}
          <motion.button
            onClick={() => router.push('/projects-and-skills?view=projects')}
            className="mb-8 mt-4 hidden w-full text-center text-lg text-cyan-700 underline dark:text-cyan-500 md:inline"
            {...getTextSlideLeftAnimation()}
          >
            Back to projects
          </motion.button>
        </div>
        <div className="col-span-4 md:col-span-1">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {project.images.portrait.map((portraitImage, index) => (
              <motion.div
                key={`portrait-image-${index}`}
                {...getImageSlideDownAnimation(0.2 + index * 0.15)}
              >
                <Image
                  className="rounded-md shadow-md"
                  src={portraitImage}
                  alt={`${project.title} cover image`}
                  // placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
          <motion.button
            onClick={() => router.push('/projects-and-skills?view=projects')}
            className="mb-8 mt-10 inline w-full text-center text-lg text-cyan-700 underline dark:text-cyan-500 md:hidden"
            {...getTextSlideLeftAnimation()}
          >
            Back to projects
          </motion.button>
        </div>
      </div>
    </ScrollableContentContainer>
  )
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: { project: project.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      project: projects.find(
        (project) => project.slug === context?.params?.project
      ),
    },
  }
}
