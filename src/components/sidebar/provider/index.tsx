import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

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

const LOCAL_STORAGE_KEY = 'drawerOpen';

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    setDrawerOpen(stored === 'false' ? false : true);
  }, []);

  const persistDrawerState = useCallback((value: boolean) => {
    setDrawerOpen(value);
    localStorage.setItem(LOCAL_STORAGE_KEY, String(value));
  }, []);

  const toggleDrawer = useCallback(() => {
    if (drawerOpen !== null) {
      persistDrawerState(!drawerOpen);
    }
  }, [drawerOpen, persistDrawerState]);

  const closeDrawer = useCallback(() => {
    persistDrawerState(false);
  }, [persistDrawerState]);

  if (drawerOpen === null) return null; // or a spinner

  return (
    <SidebarContext.Provider value={{ drawerOpen, toggleDrawer, closeDrawer }}>
      {children}
    </SidebarContext.Provider>
  );
};
