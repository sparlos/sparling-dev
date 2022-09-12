import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, images } = project

  return (
    <motion.div
      layout
      className="relative mx-auto flex max-w-xs items-center justify-center rounded-lg shadow-md dark:bg-slate-600"
    >
      <Link href={`/projects-and-skills/${slug}`}>
        <button className="flex h-full w-full flex-col justify-between">
          <div className="relative h-32 w-full">
            <Image
              layout="fill"
              className="rounded-t-lg object-cover"
              src={images.cover}
              alt={`cover image for ${title} project`}
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
