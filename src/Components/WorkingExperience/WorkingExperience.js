import React from 'react'
import Content from '../Supports/Content'
import Section from '../Section'
import Project from '../Project'
import Example from './Example'

function WorkingExperience() {

  const exampleElement = <Example say={'here'} />
  const examplePage = {tab: 'overview', display: exampleElement}

  return (
    <div className='working-expreince'>
        <Content>
            <Section heading={'Working Experience'}>
                <Project title={'DataGate II'} pages={[examplePage, examplePage, examplePage]} />
            </Section>
        </Content>
    </div>
  )
}

export default WorkingExperience