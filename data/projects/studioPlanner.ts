import { Project } from './index'
import coverImage from '../../public/projects/studioPlanner/cover.png'
import mobile1 from '../../public/projects/studioPlanner/mobile/1.png'
import mobile2 from '../../public/projects/studioPlanner/mobile/2.png'
import landscape1 from '../../public/projects/studioPlanner/landscape/1.png'
import landscape2 from '../../public/projects/studioPlanner/landscape/2.png'

const studioPlanner: Project = {
  slug: 'studio-planner',
  title: 'Studio Planner',
  tags: [
    'Next.js',
    'GraphQL',
    'Tailwind',
    'Figma',
    'Gatsby',
    'SCSS',
    'Framer Motion',
    'React',
  ],
  images: {
    cover: coverImage,
    portrait: [mobile1, mobile2],
    landscape: [coverImage, landscape1, landscape2],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://studio-planner.vercel.app/login"
      target="_blank"
      rel="noreferrer"
    >A website</a>
    created to showcase a simple authenticated app that allows users to
    sign up/log in, and then access an instrument dashboard. This
    dashboard allows a user to view, create and delete instruments. It
    uses Next.js to power the front end, with the backend and database
    layers handled by Supbase.io. Built in a weekend.
  </p>
  <p class="project-description__paragraph">
    I usually do styling from the ground up using SCSS, but as the purpose
    of this project was to display my fullstack abilities, I opted to use
    Chakra UI to rapidly build out the front end (and because I've been
    dying to play around with it). The dashboard allows drag and drop
    functionality, which is powered by dnd kit.
  </p>
  `,
}

export default studioPlanner
