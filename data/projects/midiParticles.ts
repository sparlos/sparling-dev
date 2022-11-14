import { Project } from './index'
import coverImage from '../../public/projects/midiParticles/cover.jpg'
import landscape1 from '../../public/projects/midiParticles/landscape/1.jpeg'
import landscape2 from '../../public/projects/midiParticles/landscape/2.jpg'
import landscape3 from '../../public/projects/midiParticles/landscape/3.gif'

const midiParticles: Project = {
  slug: 'midi-particles',
  title: 'MIDI Particles',
  tags: ['vueJS', 'Web MIDI API', 'SCSS', 'Vuex', 'Canvas', 'OoP'],
  images: {
    cover: coverImage,
    portrait: [],
    landscape: [landscape3, coverImage, landscape1, landscape2],
  },
  description: `
  <p class="project-description__paragraph">
    <a
      class="project-description__link"
      href="https://midiparticles.netlify.app/"
      target="_blank"
      rel="noreferrer"
    >An extremely customizable application</a>
    that takes MIDI input and creates particle visualizations. Because it
    uses the experimental Web MIDI API, it is only supported in Chrome at
    the moment. The project is open source and maintained
    <a
      class="project-description__link"
      href="https://github.com/sparlos/MIDI-Particles"
      target="_blank"
      rel="noreferrer"
    />
    on GitHub.</a>
  </p>
  <p class="project-description__paragraph">
    The app includes an onscreen keyboard to mimic the user's real life
    MIDI input device. The speed of the particles is determined by the
    input velocity that the MIDI device registers (between 0-127).
  </p>
  <p class="project-description__paragraph">
    Its many customizable features are all listed on the GitHub repo. All
    customizable settings are saved in localStorage with the aid of lowDB
    and, because of the large amount of settings, the project also uses
    Vuex for state management.
  </p>
  <p class="project-description__paragraph">
    For the actual animation, the app uses requestAnimationFrame paired
    with Canvas2D rendering. All of the JavaScript and Vue code was
    written completely from scratch. The particles and particle systems
    were also created from scratch using an Object Oriented Approach which
    utilizes modern ES6 classes.
  </p>
  `,
}

export default midiParticles
