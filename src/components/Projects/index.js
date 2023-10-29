import React from 'react'
import { Container, Wrapper, Title, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>One of my Iconic Project</Title>
        <CardContainer>
          {projects.map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects