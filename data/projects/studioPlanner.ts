import { Project } from './index'
import coverImage from '../../public/projects/studioPlanner/cover.jpg'
import mobile1 from '../../public/projects/studioPlanner/mobile/1.jpg'
import mobile2 from '../../public/projects/studioPlanner/mobile/2.jpg'
import landscape1 from '../../public/projects/studioPlanner/landscape/1.jpg'
import landscape2 from '../../public/projects/studioPlanner/landscape/2.jpg'

const studioPlanner: Project = {
  slug: 'studio-planner',
  title: 'Studio Planner',
  tags: [
    'Next.js',
    'React',
    'Supabase',
    'Chakra UI',
    'dnd-kit',
    'Framer Motion',
  ],
  images: {
    cover: coverImage,
    portrait: [mobile1, mobile2],
    landscape: [coverImage, landscape1, landscape2],
  },
  description: `
  <p class="project-description__paragraph">
    Created to showcase a simple authenticated app, 
    <a
    class="project-description__link"
    href="https://studio-planner.vercel.app/login"
    target="_blank"
    rel="noreferrer"
    >this website</a>
     allows users to sign up/log in, and then access a musical instrument dashboard to view, create and delete instruments. It uses Next.js to power the front end, with the backend and database layers handled by Supbase.io. Built in a weekend.
  </p>
  <p class="project-description__paragraph">
    I usually do styling from the ground up using SCSS, but the purpose of this project was to display my fullstack abilities, so I opted to use Chakra UI to rapidly build out the front end (also, I've been dying to play around with Chakra). The dashboard allows drag and drop functionality, which is powered by dnd kit.
  </p>
  `,
}

export default studioPlanner
