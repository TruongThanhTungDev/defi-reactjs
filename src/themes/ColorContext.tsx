import { createContext, ReactNode } from 'react';
import { neutral } from './neutral';
import { semantic } from './semantic';
import { accent } from './accent';
import { primary } from './primary';
import { gold } from './gold';

interface ColorContextProps {
  children: ReactNode;
}

const initColor = { neutral, semantic, accent, primary, gold };

export const ColorContext = createContext(initColor);

const ColorProvider = ({ children }: ColorContextProps) => {
  return (
    <ColorContext.Provider value={initColor}>{children}</ColorContext.Provider>
  );
};

export default ColorProvider;
