import React, { useContext, useEffect, useState } from 'react'
import '../../Assets/Styles/components/menu/home_menu_overlay.scss'
import { GridButtonContext } from '../../Context/GridButtonContext'
import { MenuButtonsContext, MenuContext } from '../../Context/MenuContext'

function MenuOverlay() {

    const {toggleMenu} = useContext(MenuContext)
    const {gridButtonHovered, toggleGrid} = useContext(GridButtonContext)
    const {HamburgerIcon, GridIcon, ArrowLeftIcon, mediumIconSize, bigIconSize} = useContext(MenuButtonsContext)
    const [quickMenuButtonClasses, setQuickMenuButtonClasses] = useState("grid-button-container");
    const [arrowIconClasses, setArrowIconClasses] = useState("arrow-left")

    const setClassesOnGridButtonHover = () => {
      setQuickMenuButtonClasses("button-container grid-button-hover")
      setArrowIconClasses("arrow-left grid-button-hover")
    }

    const setClassesOnGridButtonUnHover = () => {
      setQuickMenuButtonClasses("button-container")
      setArrowIconClasses("arrow-left")
    }

    useEffect(() => {
      gridButtonHovered
      ? setClassesOnGridButtonHover()
      : setClassesOnGridButtonUnHover()
    }, [gridButtonHovered])


  return (
    <div className='home-menu-overlay'>
        <button className="hamburger-button-container">
          <HamburgerIcon size={mediumIconSize} onClick={toggleMenu} />
        </button>
        <button className={quickMenuButtonClasses}>
          <GridIcon size={mediumIconSize}
                    onClick={toggleGrid} />
        </button>
        <ArrowLeftIcon size={bigIconSize} className={arrowIconClasses} />
    </div>
  )
}

export default MenuOverlay