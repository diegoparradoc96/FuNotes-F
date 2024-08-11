// ProveedorGlobal.tsx
import React, { ReactNode } from "react";

import { MainContainerProvider } from "../context";

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MainContainerProvider>{children}</MainContainerProvider>;
};

export default GlobalProvider;
