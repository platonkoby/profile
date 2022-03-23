import { useEffect, useState } from 'react';
import './Assets/Styles/App.scss';
import BaseLayer from './Components/Layers/BaseLayer';
import OverviewLayer from './Components/Layers/OverviewLayer';
import SideBarLayer from './Components/Layers/SideBarLayer';
import { GridButtonContext } from './Context/GridButtonContext';
import { MenuContext } from './Context/MenuContext';

function App() {
  const [menuOpened, setMenuOpened] = useState()
  const [gridButtonHovered, setGridButtonHovered] = useState()
  const [gridOpened, setGridOpened] = useState()
  const identity = a => a;

  const toggleMenu = () => setMenuOpened(!menuOpened)

  const setGridButtonHoveredTrue = () => setGridButtonHovered(true)
  const setGridButtonHoveredFalse = () => setGridButtonHovered(false)

  const safeToggleOperation = (operation, guard, recover = () => {}) => 
  input => guard(input, operation) || recover;
  
  const keyPressedIsQ = input => input.key === 'q';

  const onlyIf = validator => (input, operation) =>
    validator(input) ? operation() : NaN;

  const orElse = identity;

  const toggleGrid = () => setGridOpened(gridOpened => !gridOpened)

  const safeToggleGridOnKeyPressed = safeToggleOperation(
    toggleGrid,
    onlyIf(keyPressedIsQ),
    orElse(null)
  )

  return (
    <div tabIndex={0} onKeyDown={safeToggleGridOnKeyPressed}>
      <GridButtonContext.Provider value={{gridButtonHovered, setGridButtonHoveredTrue, setGridButtonHoveredFalse, toggleGrid}}>
      <MenuContext.Provider value={{toggleMenu}}>
        <BaseLayer />
      </MenuContext.Provider>
        {menuOpened && <SideBarLayer />}
        {gridOpened && <OverviewLayer />}
      </GridButtonContext.Provider>
    </div>
  );
}

export default App;
