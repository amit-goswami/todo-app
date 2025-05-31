import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface SidebarContextProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(['drawerOpen']);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(
    cookies.drawerOpen === undefined ? true : cookies.drawerOpen === 'true'
  );

  const toggleDrawer = () => {
    const newState = !drawerOpen;
    setDrawerOpen(newState);
    setCookie('drawerOpen', String(newState), {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setCookie('drawerOpen', 'false', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  };

  return (
    <SidebarContext.Provider value={{ drawerOpen, toggleDrawer, closeDrawer }}>
      {children}
    </SidebarContext.Provider>
  );
};
