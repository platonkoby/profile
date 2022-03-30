import React from 'react'
import Content from '../Supports/Content'
import Section from '../Section'
import Project from '../Project'

function WorkingExperience() {
  return (
    <div className='working-expreince'>
        <Content>
            <Section heading={'Working Experience'}>
                <Project />
            </Section>
        </Content>
    </div>
  )
}

export default WorkingExperience