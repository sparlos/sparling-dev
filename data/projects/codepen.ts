import { Project } from './index'
import coverImage from '../../public/projects/codepen/cover.jpg'
import landscape1 from '../../public/projects/codepen/landscape/1.jpg'
import landscape2 from '../../public/projects/codepen/landscape/2.jpg'
import landscape3 from '../../public/projects/codepen/landscape/3.jpg'
import landscape4 from '../../public/projects/codepen/landscape/4.jpg'
import landscape5 from '../../public/projects/codepen/landscape/5.jpg'

const codepen: Project = {
  title: 'CodePen stuff',
  slug: 'codepen-stuff',
  tags: ['vueJS', 'SCSS', 'Audio', 'Algorithms'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [landscape1, landscape2, landscape3, landscape4, landscape5],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://codepen.io/collection/Xermmq"
      target="_blank"
      rel="noreferrer"
    >A collection of CodePen experiments</a>
    created for CodePen's weekly challenges. My background in music
    allowed me to base each challenge submission around music,
    exploiting an underused feature in web development: music and audio.
  </p>
  <p>
    The collection includes:
  </p>
  <ul class="project-description__list project-description__paragraph">
    <li>
      <a
      class="project-description__link"
      href="https://codepen.io/sparlos/pen/oOqMGw"
      target="_blank"
      rel="noreferrer"
      >Generative music based on prime numbers</a>
    </li>
    <li>
      <a
      class="project-description__link"
      href="https://codepen.io/sparlos/pen/gydjdL"
      target="_blank"
      rel="noreferrer"
      >An implementation of the bubble sort algorithm represented using tones</a>
    </li>
    <li>
      <a
      class="project-description__link"
      href="https://codepen.io/sparlos/pen/QRwVjp"
      target="_blank"
      rel="noreferrer"
      >An infinitely random starfield where every star creates a tone based on the star's Y position</a>
    </li>
    <li>
      <a
      class="project-description__link"
      href="https://codepen.io/sparlos/pen/JqOrmw"
      target="_blank"
      rel="noreferrer"
      >A visual representation of Steve Reich's 'Piano Phase' using planet orbits</a>
    </li>
    <li>
      <a
      class="project-description__link"
      href="https://codepen.io/sparlos/pen/argZay"
      target="_blank"
      rel="noreferrer"
      >A beat creation system where each portion of the beat is represented by a component of a hamburger.</a>
    </li>
  </ul>
  <p class="project-description__paragraph">
    Every project was implemented using Vue for logic and SCSS for
    styling. The source code for all of the projects is available for
    perusal at the CodePen links provided.
  </p>
  `,
}

export default codepen
