import { Project } from './index'
import coverImage from '../../public/projects/newPortfolio/cover.png'

const newPortfolio: Project = {
  title: 'new portfolio',
  slug: 'new-portfolio',
  tags: ['react', 'Next.js', 'Tailwind'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [],
  },
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus
  nam ducimus aspernatur corrupti inventore dolorem libero ut voluptates
  dolorum. Ad, rerum quod. Ipsa, aspernatur sint. Harum doloremque dolorem
  quia.`,
}

export default newPortfolio
