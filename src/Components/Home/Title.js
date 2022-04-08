import React, { useContext, useEffect, useState } from 'react'
import { GridButtonContext } from '../../Context/GridButtonContext'

function Title() {

  const {gridButtonHovered, toggleGridHover, toggleGrid} = useContext(GridButtonContext)
  const [titleBtnClasses, setTitleBtnClasses] = useState("title-btn")
  const [sliderUnderlineClasses, setSliderUndrelineClasses] = useState("slider-underline")

  useEffect(() => {
    if (gridButtonHovered) {
      setTitleBtnClasses("title-btn title-btn-hover")
      setSliderUndrelineClasses('slider-underline slider-underline-hover')
      return
    }
    setTitleBtnClasses("title-btn")
    setSliderUndrelineClasses('slider-underline')
  }, [gridButtonHovered])

  return (
    <div className="title">
      <div className="title-main">Portfolio</div>
      <div className="title-support">
        <div className="support-text">
        press 'q' for
          <button className={titleBtnClasses}
            onClick={toggleGrid}
            onMouseEnter={toggleGridHover}
            onMouseLeave={toggleGridHover}
            > quick navigation</button>
        </div> 
        <div className={sliderUnderlineClasses}></div>
      </div>
    </div>
  )
}

export default Title


//TODO: remove circled Q and make an underlining animation with a highlight to a 'quick navigation'