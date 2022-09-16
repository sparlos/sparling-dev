import { GetStaticPropsContext } from 'next'
import Image from 'next/future/image'
import Link from 'next/link'
import ScrollableContentContainer from '../../../components/ScrollableContentContainer'
import projects from '../../../data/projects'
import { Project } from '../../../data/projects/index'

type DynamicProjectProps = {
  project: Project
}

export default function DynamicProject({ project }: DynamicProjectProps) {
  return (
    <ScrollableContentContainer large>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div>
            <h1 className="mt-3 mb-2 text-4xl">{project.title}</h1>
            <div className="width-full mb-6 flex">
              {project.tags.map((tag, index) => (
                <div
                  className="mr-2 text-slate-500 dark:text-slate-200"
                  key={tag}
                >
                  {tag} {index !== project.tags.length - 1 && ' |'}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">{project.description}</div>
          <Link href="/projects-and-skills?view=projects">
            <button className="mb-8 text-cyan-700 underline dark:text-cyan-500">
              Back to projects
            </button>
          </Link>
          <Image
            className="mb-4 rounded-md shadow-md"
            src={project.images.cover}
            alt={`${project.title} cover image`}
            placeholder="blur"
          />
          {/* TODO update with landscape/desktop images */}
          <Image
            className="mb-4 rounded-md shadow-md"
            src={project.images.cover}
            alt={`${project.title} cover image`}
            placeholder="blur"
          />
          <Image
            className="mb-4 rounded-md shadow-md"
            src={project.images.cover}
            alt={`${project.title} cover image`}
            placeholder="blur"
          />
        </div>
        <div>
          {/* TODO: update with portrait/mobile images */}
          <div className="mb-4 h-[400px] w-full bg-red-200"></div>
          <div className="mb-4 h-[400px] w-full bg-red-200"></div>
          <div className="mb-4 h-[400px] w-full bg-red-200"></div>
          <div className="mb-4 h-[400px] w-full bg-red-200"></div>
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
