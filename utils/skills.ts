export type Skill = {
  name: string
  description: string
}

export const mockSkills: Skill[] = [
  {
    name: 'react',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
  {
    name: 'aws',
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
  },
  {
    name: 'tailwind',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
  {
    name: 'SCSS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
  {
    name: 'vueJS',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
  {
    name: 'MongoDB',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
  {
    name: 'MySQL',
    description: `this is some flavour text about this skill. I will talk about how I am
          soooo good at this skill and everyone else who tries to master this
          skill is still not as good as I am`,
  },
]

export const splitSkills = (skills: Skill[]): [Skill[], Skill[]] => {
  const midpoint =
    skills.length % 2 === 0 ? skills.length / 2 : skills.length / 2 + 1
  const firstHalf = skills.slice(0, midpoint)
  const secondHalf = skills.slice(midpoint, skills.length)
  return [firstHalf, secondHalf]
}
