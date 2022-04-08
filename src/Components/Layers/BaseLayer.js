import React from 'react'
import '../../Assets/Styles/components/layers/layer.scss'
import '../../Assets/Styles/components/layers/base_layer.scss'
import HomeSection from '../Home/HomeSection'
import MenuOverlay from '../Home/MenuOverlay'
import AboutMe from '../AboutMe/AboutMe'
import WorkingExperience from '../WorkingExperience/WorkingExperience'
import PersonalProjects from '../PersonalProjects/PersonalProjects'

function BaseLayer() {

  

  return (
    <div className='layer base-layer'>
      <div className="main-container">
        <HomeSection />
        <MenuOverlay />
        <AboutMe />
        <WorkingExperience />
        <PersonalProjects />
      </div>
    </div>
  )
}

export default BaseLayer