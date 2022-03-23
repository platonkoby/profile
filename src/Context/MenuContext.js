import { createContext } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineGridView } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'

export const MenuContext = createContext(
    {
        menuOpened: false,
        toggleMenu: () => {}
    }
)

export const MenuButtonsContext = createContext(
    {
       HamburgerIcon: GiHamburgerMenu,
       GridIcon: MdOutlineGridView,
       ArrowLeftIcon: BsArrowLeft,
       smallIconSize: null,
       mediumIconSize: 22,
       bigIconSize: 30,
    }
)

