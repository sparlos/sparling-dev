import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string
}

export default function ProjectCard({ title }: ProjectCardProps) {
  return (
    <motion.div
      layout
      className="flex h-32 items-center justify-center rounded shadow-md dark:bg-slate-600"
    >
      <div />
      {title}
    </motion.div>
  )
}
