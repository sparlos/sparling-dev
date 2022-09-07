import { GetStaticPropsContext } from 'next'
import ScrollableContentContainer from '../../../components/ScrollableContentContainer'
import { mockProjectList, Project } from '../../../utils/projects'

type DynamicProjectProps = {
  project: Project
}

export default function DynamicProject({ project }: DynamicProjectProps) {
  return (
    <ScrollableContentContainer large>
      {project?.title}
    </ScrollableContentContainer>
  )
}

export async function getStaticPaths() {
  return {
    paths: mockProjectList.map((project) => ({
      params: { project: project.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      project: mockProjectList.find(
        (project) => project.slug === context?.params?.project
      ),
    },
  }
}
