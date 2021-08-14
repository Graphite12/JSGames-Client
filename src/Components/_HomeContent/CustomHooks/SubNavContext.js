import React, { useState } from "react";

export const SubNavContext = React.createContext();

const SubNavProvider = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  };

  return (
    <SubNavContext.Provider value={providerValue}>
      {children}
    </SubNavContext.Provider>
  );
};

export default SubNavProvider;
