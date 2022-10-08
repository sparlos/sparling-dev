import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ScrollableContentContainer from '../../../components/ScrollableContentContainer'
import projects from '../../../data/projects'
import { Project } from '../../../data/projects/index'
import {
  getImageSlideDownAnimation,
  getTextSlideLeftAnimation,
} from '../../../utils/animations/project'

type DynamicProjectProps = {
  project: Project
}

export default function DynamicProject({ project }: DynamicProjectProps) {
  const router = useRouter()

  return (
    <ScrollableContentContainer large>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-3">
          <div>
            <motion.h1
              className="mt-3 mb-2 text-4xl"
              {...getTextSlideLeftAnimation()}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className="width-full mb-6 flex"
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
          <motion.div {...getTextSlideLeftAnimation()} className="mb-4">
            {project.description}
          </motion.div>
          <button onClick={() => router.back()}>
            <motion.button
              className="mb-8 text-cyan-700 underline dark:text-cyan-500"
              {...getTextSlideLeftAnimation()}
            >
              Back to projects
            </motion.button>
          </button>
          {project.images.landscape.map((landscapeImage, index) => (
            <motion.div
              key={`landscape-image-${index}`}
              {...getImageSlideDownAnimation(0.25 + index * 0.1)}
            >
              <Image
                className="mb-4 rounded-md shadow-md"
                src={landscapeImage}
                alt={`${project.title} cover image`}
                placeholder="blur"
              />
            </motion.div>
          ))}
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
                  placeholder="blur"
                />
              </motion.div>
            ))}
          </div>
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
