import { Project } from './index'
import coverImage from '../../public/projects/livestreamRadio/cover.png'
import landscape1 from '../../public/projects/livestreamRadio/landscape/1.png'
import landscape2 from '../../public/projects/livestreamRadio/landscape/2.png'
import landscape3 from '../../public/projects/livestreamRadio/landscape/3.png'
import landscape4 from '../../public/projects/livestreamRadio/landscape/4.png'

const livestreamRadio: Project = {
  slug: 'livestream-radio',
  title: 'Livestream Radio',
  tags: ['vueJS', 'Vuetify', 'SCSS', 'Material Design'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [coverImage, landscape1, landscape2, landscape3, landscape4],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://livestreamradio.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >A website</a>
    that allows a user to add and categorize YouTube livestreams as
    “stations”. Open source and maintained
    <a
      class="project-description__link"
      href="https://github.com/sparlos/livestream-radio"
      target="_blank"
      rel="noreferrer"
    />
    on GitHub.</a>
  </p>
  <p class="project-description__paragraph">
    The project was written using Vue and Vuetify, a material design
    framework for Vue. This website allows the user to categorize and
    easily switch between different YouTube livestreams. This site
    showcases my ability to take an idea and follow through to full
    implementation. The project is also completely open source, and is where
    I merged my first PR from an outside contributor!
  </p>
  <p class="project-description__paragraph">
    Time restrictions, which compelled me to complete the build within a
    week, wound up being extremely beneficial for the project, forcing the
    most crucial features to the forefront.
  </p>
  `,
}

export default livestreamRadio
