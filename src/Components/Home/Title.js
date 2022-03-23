import React, { useContext, useEffect, useState } from 'react'
import '../../Assets/Styles/components/title.scss'
import { GridButtonContext } from '../../Context/GridButtonContext'

function Title() {

  const {gridButtonHovered, setGridButtonHoveredTrue, setGridButtonHoveredFalse, toggleGrid} = useContext(GridButtonContext)
  const [titleBtnClasses, setTitleBtnClasses] = useState("title-btn")

  useEffect(() => {
    gridButtonHovered 
    ? setTitleBtnClasses("title-btn title-btn-hover")
    : setTitleBtnClasses("title-btn")
  }, [gridButtonHovered])

  return (
    <div className="title">
      <div className="title-main">Portfolio</div>
      <div className="title-support">press 'q' for quick navigation</div>
      <button className={titleBtnClasses}
              onClick={toggleGrid}
              onMouseEnter={setGridButtonHoveredTrue}
              onMouseLeave={setGridButtonHoveredFalse}
      >q</button>
    </div>
  )
}

export default Title