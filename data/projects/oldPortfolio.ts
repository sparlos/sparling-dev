import { Project } from './index'
import coverImage from '../../public/projects/oldPortfolio/cover.png'
import mobile1 from '../../public/projects/oldPortfolio/mobile/1.png'
import mobile2 from '../../public/projects/oldPortfolio/mobile/2.png'
import mobile3 from '../../public/projects/oldPortfolio/mobile/3.png'
import mobile4 from '../../public/projects/oldPortfolio/mobile/4.png'
import landscape1 from '../../public/projects/oldPortfolio/landscape/1.png'
import landscape2 from '../../public/projects/oldPortfolio/landscape/2.png'
import landscape3 from '../../public/projects/oldPortfolio/landscape/3.png'

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
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus
  nam ducimus aspernatur corrupti inventore dolorem libero ut voluptates
  dolorum. Ad, rerum quod. Ipsa, aspernatur sint. Harum doloremque dolorem
  quia.`,
}

export default oldPortfolio
