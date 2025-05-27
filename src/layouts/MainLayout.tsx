import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-wrapper">
      <header>Main Navigation</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
