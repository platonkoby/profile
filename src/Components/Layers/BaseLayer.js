 import React from 'react'
import '../../Assets/Styles/components/layers/layer.scss'
import '../../Assets/Styles/components/layers/base_layer.scss'
import HomeSection from '../Home/HomeSection'
import MenuOverlay from '../Home/MenuOverlay'

function BaseLayer() {

  

  return (
    <div className='layer base-layer'>
      <div className="main-container">
        <HomeSection />
        <MenuOverlay />
      </div>
    </div>
  )
}

export default BaseLayer