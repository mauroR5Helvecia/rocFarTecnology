import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const light = "light";
  const dark = "dark";

  const [theme, setTheme] = useState(light); // Estado inicial

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === light ? dark : light));
  };

  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export { ContextProvider, ContextGlobal };

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
