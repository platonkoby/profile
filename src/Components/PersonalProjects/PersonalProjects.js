import React from 'react'
import Project from '../Project'
import Section from '../Section'
import Content from '../Supports/Content'
import Example from '../WorkingExperience/Example'

function PersonalProjects() {

    const exampleElement = <Example say={'here'} />
    const examplePage = {tab: 'overview', display: exampleElement}

  return (
    <div className='personal-projects'>
        <Content>
            <Section heading={'personal projects'}>
                <Project title={'chess learner'} pages={[examplePage, examplePage]} />
                <Project title={'life shop'} pages={[examplePage]} />
            </Section>
        </Content>
    </div>
  )
}

export default PersonalProjects