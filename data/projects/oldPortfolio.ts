import { Project } from './index'
import coverImage from '../../public/projects/oldPortfolio/cover.png'
import mobile1 from '../../public/projects/oldPortfolio/mobile/mobile1.png'

const oldPortfolio: Project = {
  slug: 'old-portfolio',
  title: 'Old Portfolio',
  tags: ['react', 'tailwind'],
  images: {
    cover: coverImage,
    portrait: [mobile1, mobile1, mobile1, mobile1],
    landscape: [coverImage, coverImage, coverImage, coverImage],
  },
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus
  nam ducimus aspernatur corrupti inventore dolorem libero ut voluptates
  dolorum. Ad, rerum quod. Ipsa, aspernatur sint. Harum doloremque dolorem
  quia.`,
}

export default oldPortfolio
