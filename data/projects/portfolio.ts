import { Project } from './index'
import coverImage from '../../public/projects/newPortfolio/cover.png'

const newPortfolio: Project = {
  title: 'new portfolio',
  slug: 'new-portfolio',
  tags: ['react', 'Next.js', 'tailwind'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [],
  },
}

export default newPortfolio
