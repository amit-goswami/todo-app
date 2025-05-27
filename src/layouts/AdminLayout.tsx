import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="auth-wrapper">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
