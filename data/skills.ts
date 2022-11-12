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
import nodejsLogo from '../public/logos/nodejs.svg'
import cypressLogo from '../public/logos/cypress.svg'
import dockerLogo from '../public/logos/docker.svg'
import pythonLogo from '../public/logos/python.svg'
import kubernetesLogo from '../public/logos/kubernetes.svg'

const skills: Skill[] = [
  {
    name: 'React',
    description: `I use React daily in my professional life. I'm a big fan of keeping UI separate from business logic by utilizing utility functions for anything that doesn't have to do with state, and custom hooks for anything that does.`,
    logo: reactLogo,
  },
  {
    name: 'AWS',
    description: [
      `I've built multiple projects that have used a wide variety of services offered by AWS, including Elastic Beanstalk, S3, CodePipeline, CodeBuild, CloudFront, and others.`,
      `My crowning achievement AWS-wise was creating a fully custom build pipeline for a frontend application using AWS CDK, all defined in TypeScript.`,
      `The pipeline retrieved source code from GitHub using AWS CodeStar, built and ran linting/tests (unit and E2E via Cypress) via AWS CodeBuild, and finally pushed the built code up to an S3 bucket behind CloudFront (both defined using CDK).`,
    ],
    logo: awsLogo,
    logoDarkVariant: awsLightLogo,
  },
  {
    name: 'Tailwind',
    description: `I don't use Tailwind too often, as I usually prefer to write custom SCSS using BEM for my styling needs (this is what I do professionally as well). However, Tailwind is an interesting technology and I use it for some personal projects (like this one!) to improve my familiarity with it.`,
    logo: tailwindLogo,
  },
  {
    name: 'SCSS',
    description: `My preferred method for styling applications. I use this daily in my professional life, following the BEM naming convention to keep the styling clean and consistent with the HTML structure.`,
    logo: sassLogo,
  },
  {
    name: 'vueJS',
    description: `My very first JavaScript framework (unless you count jQuery). It has a special place in my heart, and most of the personal projects you see on this portfolio use it. I am quite familiar with 2.0, however I do not have much experience with 3.0.`,
    logo: vueLogo,
  },
  {
    name: 'MongoDB',
    description: `I use MongoDB fairly regularly professionally, mostly in conjunction with the popular mongoose package for Node.js to define schemas to keep document structures as consistent as possible.`,
    logo: mongoLogo,
  },
  {
    name: 'MySQL',
    description: `I've worked on a few projects that use MySQL professionally, and am familiar with connecting to local/staging/production DBs using MySQL Workbench. I've run queries to perform aggregations, made manual backups before running critical migrations, and updated data by hand when necessary.`,
    logo: mysqlLogo,
    logoDarkVariant: mysqlLightLogo,
  },
  {
    name: 'Next.js',
    description: `While I have no experience with Next professionally, I've built a few sites you can see on this portfolio using it (including this portfolio itself!). I'm familiar with using the built-in SSR/SSG to optimize load times and performance.`,
    logo: nextJSLogo,
  },
  { name: 'Node.js', description: 'null', logo: nodejsLogo },
  {
    name: 'Python',
    description: `I have quite a bit of both personal and professional experience using Python, having worked on a fairly robust Django application in my professional life. Personally, I like using Python for music and audio related side projects.`,
    logo: pythonLogo,
  },
  {
    name: 'GraphQL',
    description: [
      `My biggest professional experience with GraphQL was integrating it with an existing Express project to convert a standard REST API into a GraphQL API. This was done using Apollo Server on the backend, and Apollo Client on the frontend.`,
      `I've also worked with GraphQL in a Django project that used Graphene to facilitate the GraphQL integration.`,
    ],
    logo: graphqlLogo,
  },
  {
    name: 'Material Design',
    description: `I have quite a bit of experience with this professionally, having implemented several web applications that followed Material Design principles.`,
    logo: materialDesignLogo,
  },
  {
    name: 'Cypress',
    description: `Professionally, I've built E2E test suites from the ground up for existing web applications using Cypress. The E2E and unit tests for this site use Cypress as well.`,
    logo: cypressLogo,
  },
  {
    name: 'Gatsby',
    description: `I used Gatsby to create my old portfolio site, and while I think it's still a great framework, I've moved on to using Next.js for most of my frontends.`,
    logo: gatsbyLogo,
  },
  {
    name: 'Framer Motion',
    description: `My absolute favourite package for implementing modern animations in React. It's used on this site, and most other personal sites that I create.`,
    logo: framerMotionLogo,
  },
  {
    name: 'Figma',
    description: `I have experience both with designing wireframes in Figma (the design for this site was created using it), as well as implementing designs made by others for web applications.`,
    logo: figmaLogo,
  },
  {
    name: 'Docker',
    description: `Professionally, I've worked on a few applications that use Docker to run local server-side environments.`,
    logo: dockerLogo,
  },
  {
    name: 'Kubernetes',
    description: `My biggest professional experience with Kubernetes was working on a site that used Google Cloud Platform to hoist up a fairly robust Kubernetes system, that included Workloads to deploy pods for both server/client-side code and cron jobs as well as Ingresses to handle incoming network traffic.`,
    logo: kubernetesLogo,
  },
  // {
  //   name: 'Audio',
  //   description: `While not strictly related to my development abilities, I come from a music background, having studied music composition at York University for 4 years in my undergrad. One of my favourite things is to marry my two passions of web development and music together.`,
  //   logo: headphonesLogo,
  //   logoDarkVariant: headphonesLightLogo,
  // },
  // {
  //   name: 'Web MIDI API',
  //   description: 'null',
  //   logo: headphonesLogo,
  //   logoDarkVariant: headphonesLightLogo,
  // },
]

export default skills
