import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

const DashboardLayout = () => {
  return (
    <>
      <div className="fixed top-0 z-[100] w-full border-b bg-[--color-header-bg]">
        <Header />
      </div>
      <div className="h-screen scrollbar">
        <div className="fixed top-12 h-[calc(100%-theme(height.12))] w-60 overflow-y-hidden hover:overflow-y-auto bg-[--color-header-bg]">
          <Nav />
        </div>
        <div className="pl-60 pt-12">
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
