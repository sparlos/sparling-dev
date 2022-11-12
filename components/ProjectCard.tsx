import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../data/projects'
import skills from '../data/skills'
import { getSkillLogo } from '../utils/skills'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, images, tags } = project
  const logos = tags
    .map((tag) => getSkillLogo(skills, tag))
    .filter((logo) => logo)

  return (
    <motion.div
      layout
      className="relative mx-auto flex max-w-xs items-center justify-center rounded-lg shadow-md dark:bg-slate-600"
    >
      <div className="pointer-events-none absolute top-0 left-0 z-10 flex h-20 w-full items-start justify-between rounded-lg bg-gradient-to-b from-black/50 px-4 pt-2">
        {new Array(3).fill(undefined).map((_, index) => {
          const logo = logos[index]
          return logo ? (
            <motion.div
              className="flex items-center"
              key={`${project}-logo-${index}`}
            >
              <Image alt="logo image" width={15} height={15} src={logo} />
            </motion.div>
          ) : (
            <div key={index} />
          )
        })}
      </div>
      <Link href={`/projects-and-skills/${slug}`}>
        <button className="flex h-full w-full flex-col justify-between">
          <div className="relative h-32 w-full">
            <Image
              layout="fill"
              className="rounded-t-lg object-cover"
              src={images.cover}
              alt={`cover image for ${title} project`}
              placeholder="blur"
            />
          </div>
          <div className="flex w-full flex-1 items-center justify-center py-4 text-sm">
            {title}
          </div>
        </button>
      </Link>
    </motion.div>
  )
}
