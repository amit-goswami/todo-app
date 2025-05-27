import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-wrapper">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
