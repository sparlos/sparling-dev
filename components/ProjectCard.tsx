import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../data/projects'
import skills from '../data/skills'
import { getSkillLogo } from '../utils/skills'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const { slug, title, images, tags } = project
  const logos = tags
    .map((tag) => getSkillLogo(skills, tag))
    .filter((logo) => logo)

  return (
    <motion.div
      layout
      className="sm:max-w-s relative mx-auto flex max-w-xs items-center justify-center rounded-lg shadow-md dark:bg-slate-600 sm:max-w-none"
    >
      <Link href={`/projects-and-skills/${slug}`}>
        <button className="flex h-full w-full flex-col justify-between">
          <div className="relative h-32 w-full sm:h-56 md:h-32 lg:h-56">
            <Image
              onLoadingComplete={() => setIsImageLoaded(true)}
              sizes="50vw"
              layout="fill"
              className="absolute top-0 left-0 z-10 h-full w-full rounded-t-lg object-cover"
              src={images.cover}
              alt={`cover image for ${title} project`}
            />
            {!isImageLoaded && (
              <SkeletonTheme
                borderRadius="0.75rem"
                baseColor="#cbd5e1"
                highlightColor="#e2e8f0"
              >
                <Skeleton className="absolute -top-[5px] left-0 h-full w-full" />
              </SkeletonTheme>
            )}
          </div>
          <div className="align-center flex w-full flex-1 flex-col items-center justify-center py-4 px-16 text-center">
            <div>{title}</div>
            <div className="mt-3 flex w-full justify-between">
              {new Array(5).fill(undefined).map((_, index) => {
                const logo = logos[index]
                return logo ? (
                  <motion.div
                    className="flex items-center"
                    key={`${project}-logo-${index}`}
                  >
                    <Image alt="logo image" width={15} height={15} src={logo} />
                  </motion.div>
                ) : logos.length % 2 === 0 && index % 2 !== 0 ? (
                  <div className="w-[15px]" key={index} />
                ) : null
              })}
            </div>
          </div>
        </button>
      </Link>
    </motion.div>
  )
}
