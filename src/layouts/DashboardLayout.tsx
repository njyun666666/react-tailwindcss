import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

const DashboardLayout = () => {
  return (
    <>
      <div className="fixed top-0 z-[100] w-full border-b">
        <Header />
      </div>
      <div className="h-screen">
        <div className="fixed top-12 h-[calc(100%-theme(height.12))] w-60 overflow-y-auto">
          <Nav />
        </div>
        <div className="grow pl-60 pt-12">
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
