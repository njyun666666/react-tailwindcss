import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import { themeScreenEnum, useThemeScreenMode } from '../common/theme';
import classNames from 'classnames';
import NavMenu, { NavMenuDataProps } from './NavMenu';
import { Button } from '../components';
import { faAngleRight, faGear, faHome, faStar, faTree } from '@fortawesome/free-solid-svg-icons';

const menu: NavMenuDataProps[] = [
  {
    id: '1',
    linkProps: {
      to: '/',
    },
    icon: faHome,
    content: 'Home',
  },
  {
    id: '2',
    icon: faStar,
    content: 'Button',
    children: [
      {
        id: '2-1',
        linkProps: {
          to: '/button',
        },
        icon: faStar,
        content: 'Button 2-1',
      },
      {
        id: '2-2',
        linkProps: {
          to: '/button',
        },
        icon: faStar,
        content: 'Button 2-2',
      },
    ],
  },
  {
    id: '3',
    icon: faTree,
    content: 'Tree',
    children: [
      {
        id: '3-1',

        linkProps: {
          to: '/tree',
        },
        icon: faTree,
        content: 'Tree 3-1',
      },
      {
        id: '3-2',
        linkProps: {
          to: '/tree/2',
        },
        icon: faTree,
        content: 'Tree 3-2',
      },
      {
        id: '3-3',
        icon: faGear,
        content: 'Tree 3-3',
        children: [
          {
            id: 'Tree x-1',
            linkProps: {
              to: '/tree/x-1',
            },
            icon: faGear,
            content: 'x-1',
          },
          {
            id: 'Tree x-2',
            linkProps: {
              to: '/tree/x-2',
            },
            icon: faGear,
            content: 'x-2',
          },
        ],
      },
    ],
  },
];

export type navModeType = 'min' | 'icon' | 'max';

const localNavMode = localStorage.getItem('navMode') ? (localStorage.getItem('navMode') as navModeType) : 'max';

const initNavMode = (): navModeType => {
  if (window.innerWidth >= themeScreenEnum.xl) {
    return localNavMode === 'max' ? 'max' : 'icon';
  } else if (window.innerWidth >= themeScreenEnum.sm) {
    return 'icon';
  } else {
    return 'min';
  }
};

const DashboardLayout = () => {
  const [defaultNavMode, setDefaultNavMode] = useState<navModeType>(localNavMode);
  const [navMode, setNavMode] = useState<navModeType>(initNavMode());
  const [navOpen, setNavOpen] = useState(false);
  const [showNavExpandBtn, setShowNavExpandBtn] = useState(defaultNavMode === 'max');
  const themeScreenMode = useThemeScreenMode();

  const handleNavOpen = () => {
    setNavOpen(true);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  const handleNavModeChange = () => {
    if (navMode === 'max') {
      localStorage.setItem('navMode', 'icon');
      setDefaultNavMode('icon');
      setNavMode('icon');
      setNavOpen(false);
    } else {
      localStorage.setItem('navMode', 'max');
      setDefaultNavMode('max');
      setNavMode('max');
    }
  };

  useEffect(() => {
    if (themeScreenMode >= themeScreenEnum.xl) {
      setShowNavExpandBtn(true);

      if (defaultNavMode === 'max') {
        setNavMode('max');
      }
    } else if (themeScreenMode >= themeScreenEnum.sm) {
      setShowNavExpandBtn(false);
      setNavMode('icon');
      setNavOpen(false);
    } else {
      setShowNavExpandBtn(false);
      setNavMode('min');
      setNavOpen(false);
    }
  }, [themeScreenMode]);

  return (
    <>
      <div className="fixed top-0 z-20 w-full border-b bg-[--color-header-bg]">
        <Header setNavOpen={setNavOpen} navMode={navMode} />
      </div>
      <div className="scrollbar h-screen">
        <div
          className={classNames(
            'fixed z-10 flex flex-col overflow-x-hidden bg-[--color-header-bg] transition-[max-width] duration-300 ease-in-out will-change-[max-width]',
            navMode === 'max' && 'NavMode-max top-12 h-[calc(100%-theme(height.12))] max-w-[15.5rem]',
            navMode === 'icon' && 'NavMode-icon top-12 h-[calc(100%-theme(height.12))] ',
            navMode === 'icon' && !navOpen && 'max-w-[3rem]',
            navMode === 'icon' && navOpen && 'NavMode-icon-open max-w-[15.5rem]',
            navMode === 'min' && 'NavMode-min top-0 z-50 h-full max-w-0',
            navMode === 'min' && navOpen && 'max-w-[15.5rem]'
          )}
          onMouseEnter={() => navMode === 'icon' && handleNavOpen()}
          onMouseLeave={() => navMode === 'icon' && handleNavClose()}
        >
          <nav
            className={classNames(
              'w-60 grow flex-col overflow-y-auto px-1 py-2',
              navMode === 'icon' && !navOpen && 'overflow-y-hidden',
              navMode === 'icon' && navOpen && 'overflow-y-auto'
            )}
          >
            <NavMenu data={menu} setNavOpen={setNavOpen} />
          </nav>

          {showNavExpandBtn && (navMode === 'icon' || navMode === 'max') && (
            <div className={classNames('w-full px-1 py-1')}>
              <Button
                iconProps={{ icon: faAngleRight }}
                className={classNames(
                  'w-full px-2 py-2 transition-[width,transform] duration-300 ease-in-out will-change-[width,transform]',
                  navMode === 'max' && '-rotate-180',
                  navMode === 'icon' && 'w-10 rotate-0',
                  navMode === 'icon' && navOpen && 'w-full'
                )}
                onClick={handleNavModeChange}
              ></Button>
            </div>
          )}
        </div>

        {navMode === 'min' && navOpen && (
          <div onClick={handleNavClose} className={classNames('mask fixed left-0 top-0 z-40 h-full w-full')}></div>
        )}

        <div
          className={classNames(
            'transition-[padding-left] duration-300 ease-in-out will-change-[padding-left]',
            navMode === 'max' && 'pl-[15.5rem] pt-12',
            navMode === 'icon' && 'pl-[3.25rem] pt-12',
            navMode === 'min' && 'pl-0 pt-12'
          )}
        >
          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
