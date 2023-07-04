import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <h1 className="text-6xl text-primary">Dashbord</h1>
      <Outlet />
    </>
  );
};
export default DashboardLayout;
