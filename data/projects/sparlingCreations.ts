import { Project } from './index'
import coverImage from '../../public/projects/sparlingCreations/cover.png'

const sparlingCreations: Project = {
  title: 'Sparling Creations',
  slug: 'sparling-creations',
  tags: ['vueJS', 'Audio', 'SCSS'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [coverImage],
  },
  description: `
  <p class="project-description__paragraph">
    A website built to house my freelance web design, video and audio
    projects. The site is powered by Vue and uses Vue Router for
    navigation.
  </p>
  <p class="project-description__paragraph">
    The design was created completely from scratch in Adobe XD, with
    animations and transitions all hand-coded using SCSS and BEM
    methodology. I wrote a mini-app in Vue that wraps the SoundCloud
    iFrame API in the 'Music' section of the site. This was done for
    aesthetic reasons in order to make the design of the player
    compliment the design of the site. The data layer of the site is
    powered using Cockpit CMS allowing for easy addition of new
    projects.
  </p>
  `,
}

export default sparlingCreations
