import React, { useState, useContext, useEffect } from "react";
import sublinks from "../data/stripeData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuDisplay, setSubMenuDisplay] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubMenuOpen(false);
  };

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleResize() {
      const windowSize = getWindowSize();
      const modalWidth = windowSize.innerWidth;

      if (modalWidth < 675) {
        setSubMenuDisplay(true);
      }
      if (modalWidth > 675) {
        setSubMenuDisplay(false);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        subMenuDisplay,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
