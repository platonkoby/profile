import { createContext } from "react";

export const GridButtonContext = createContext(
    {
        gridButtonHovered: false,
        setGridButtonHoveredTrue: () => {},
        setGridButtonHoveredFalse: () => {},
        toggleGrid: () => {}
    }
)