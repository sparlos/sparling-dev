import { motion } from 'framer-motion'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  slug: string
}

export default function ProjectCard({ title, slug }: ProjectCardProps) {
  return (
    <motion.div
      layout
      className="relative mx-auto flex h-40 max-w-xs items-center justify-center rounded-lg shadow-md dark:bg-slate-600"
    >
      <Link href={`/projects-and-skills/${slug}`}>
        <button className="h-full w-full">{title}</button>
      </Link>
    </motion.div>
  )
}
