import { Skill } from '../utils/skills'
import reactLogo from '../public/logos/react.svg'
import vueLogo from '../public/logos/vue.svg'
import awsLogo from '../public/logos/aws.svg'
import awsLightLogo from '../public/logos/awsLight.svg'
import mongoLogo from '../public/logos/mongo.svg'
import tailwindLogo from '../public/logos/tailwind.svg'
import sassLogo from '../public/logos/sass.svg'
import mysqlLogo from '../public/logos/mysql.svg'
import mysqlLightLogo from '../public/logos/mysqlLight.svg'
import nextJSLogo from '../public/logos/nextJS.png'
import headphonesLogo from '../public/logos/headphones.svg'
import headphonesLightLogo from '../public/logos/headphonesLight.svg'
import graphqlLogo from '../public/logos/graphql.svg'
import figmaLogo from '../public/logos/figma.svg'
import framerMotionLogo from '../public/logos/framerMotion.svg'
import gatsbyLogo from '../public/logos/gatsby.svg'
import materialDesignLogo from '../public/logos/materialDesign.svg'

const skills: Skill[] = [
  {
    name: 'React',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: reactLogo,
  },
  {
    name: 'AWS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I amthis is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: awsLogo,
    logoDarkVariant: awsLightLogo,
  },
  {
    name: 'Tailwind',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: tailwindLogo,
  },
  {
    name: 'SCSS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: sassLogo,
  },
  {
    name: 'vueJS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: vueLogo,
  },
  {
    name: 'MongoDB',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: mongoLogo,
  },
  {
    name: 'MySQL',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
    logo: mysqlLogo,
    logoDarkVariant: mysqlLightLogo,
  },
  {
    name: 'Next.js',
    description: 'nextjs is cool',
    logo: nextJSLogo,
  },
  {
    name: 'Audio',
    description: 'null',
    logo: headphonesLogo,
    logoDarkVariant: headphonesLightLogo,
  },
  { name: 'GraphQL', description: 'null', logo: graphqlLogo },
  {
    name: 'Web MIDI API',
    description: 'null',
    logo: headphonesLogo,
    logoDarkVariant: headphonesLightLogo,
  },
  { name: 'Figma', description: 'null', logo: figmaLogo },
  { name: 'Framer Motion', description: 'null', logo: framerMotionLogo },
  { name: 'Gatsby', description: 'null', logo: gatsbyLogo },
  { name: 'Material Design', description: 'null', logo: materialDesignLogo },
]

export default skills
