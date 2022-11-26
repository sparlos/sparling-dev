import { Project } from './index'
import coverImage from '../../public/projects/newPortfolio/cover.jpg'
import mobile1 from '../../public/projects/newPortfolio/mobile/1.jpg'
import mobile2 from '../../public/projects/newPortfolio/mobile/2.jpg'
import mobile3 from '../../public/projects/newPortfolio/mobile/3.jpg'
import mobile4 from '../../public/projects/newPortfolio/mobile/4.jpg'
import landscape1 from '../../public/projects/newPortfolio/landscape/1.jpg'
import landscape2 from '../../public/projects/newPortfolio/landscape/2.jpg'
import landscape3 from '../../public/projects/newPortfolio/landscape/3.jpg'
import landscape4 from '../../public/projects/newPortfolio/landscape/4.jpg'
import landscape5 from '../../public/projects/newPortfolio/landscape/5.jpg'
import landscape6 from '../../public/projects/newPortfolio/landscape/6.jpg'
import landscape7 from '../../public/projects/newPortfolio/landscape/7.jpg'

const newPortfolio: Project = {
  title: 'Portfolio',
  slug: 'portfolio',
  tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Figma'],
  images: {
    cover: coverImage,
    portrait: [mobile1, mobile2, mobile3, mobile4],
    landscape: [
      landscape1,
      landscape2,
      landscape3,
      landscape4,
      landscape5,
      landscape6,
      landscape7,
    ],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://sparling.dev/"
      target="_blank"
      rel="noreferrer"
    >A minimalist website</a>
    created to showcase my work. As with my previous developer portfolio, I like to go for a website that is sleek, simple, and most importantly, makes it easy for users to get the information they need.
  </p>
  <p class="project-description__paragraph">
    The meatiest part of the app is the projects and skills page, which introduces you to my capabilities via two different avenues: 1. the projects I've completed in the past; 2. the experience I've gained using specific technologies. The projects side is filterable with a multi-select, allowing users to hone in on projects that use specific technologies.
  </p>
  <p class="project-description__paragraph">
    The project uses Next.js, making use of its static site generation features to serve up specific project pages blazingly fast. Framer Motion is used to facilitate quick and purposeful animations that guide the user's attention.
  </p>
  `,
}

export default newPortfolio
