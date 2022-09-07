import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string
}

export default function ProjectCard({ title }: ProjectCardProps) {
  return (
    <motion.div
      layout
      className="mx-auto flex h-40 max-w-xs items-center justify-center rounded-lg shadow-md dark:bg-slate-600"
    >
      <div />
      {title}
    </motion.div>
  )
}
