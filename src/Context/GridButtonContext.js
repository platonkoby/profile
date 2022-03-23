import { createContext } from "react";

export const GridButtonContext = createContext(
    {
        gridButtonHovered: false,
        toggleGridHover: () => {},
        toggleGrid: () => {}
    }
)