import { Project } from './index'
import coverImage from '../../public/projects/oldPortfolio/cover.jpg'
import mobile1 from '../../public/projects/oldPortfolio/mobile/1.jpg'
import mobile2 from '../../public/projects/oldPortfolio/mobile/2.jpg'
import mobile3 from '../../public/projects/oldPortfolio/mobile/3.jpg'
import mobile4 from '../../public/projects/oldPortfolio/mobile/4.jpg'
import landscape1 from '../../public/projects/oldPortfolio/landscape/1.jpg'
import landscape2 from '../../public/projects/oldPortfolio/landscape/2.jpg'
import landscape3 from '../../public/projects/oldPortfolio/landscape/3.jpg'

const oldPortfolio: Project = {
  slug: 'old-portfolio',
  title: 'Old Portfolio',
  tags: [
    'React',
    'GraphQL',
    'Tailwind',
    'Figma',
    'Gatsby',
    'SCSS',
    'Framer Motion',
  ],
  images: {
    cover: coverImage,
    portrait: [mobile1, mobile2, mobile3, mobile4],
    landscape: [coverImage, landscape1, landscape2, landscape3],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://old.sparling.dev"
      target="_blank"
      rel="noreferrer"
    >A website</a>
    made to showcase the web development & design projects of
    Stephen Sparling. I attempted a very minimalist, clean looking
    website that focuses on ease of navigation for a user to find the
    info they want. The user experience is enhanced by sleek,
    purposeful animations to bring the user&apos;s attention to the
    fact that something has changed on the page.
  </p>
  <p class="project-description__paragraph">
    The design was created entirely using Figma, and is powered by
    Tailwind CSS, a great utility-first CSS framework. All animations
    are either hand-crafted in SCSS or utilize the excellent Framer
    Motion library. The functionality of the site comes from Gatsby,
    with some custom React code and graphQL queries.
  </p>
  <p>
    Soruce code for the site
    <a
      class="project-description__link"
      href="https://github.com/sparlos/dev-portfolio"
      target="_blank"
      rel="noreferrer"
    >is avaliable here</a>.
  </p>
  `,
}

export default oldPortfolio
