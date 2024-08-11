import React, { createContext, useContext, useRef, ReactNode, MutableRefObject } from "react";

type ContainerRef = MutableRefObject<null>;

// Crear el contexto
const MainContainerContext = createContext<ContainerRef | undefined>(undefined);

export const MainContainerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <MainContainerContext.Provider value={containerRef}>
      <div ref={containerRef}>{children}</div>
    </MainContainerContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useMainContainer = () => {
  return useContext(MainContainerContext);
};
