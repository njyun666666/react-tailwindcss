import { useState } from 'react';
import { Button } from '../components';
import { theme } from '../common/theme';
import { navModeType } from './DashboardLayout';

interface HeaderProps {
  navMode: navModeType;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ navMode, setNavOpen }: HeaderProps) => {
  const themeSetting = new theme();
  const [themeMode, setThemeMode] = useState(themeSetting.mode);

  const changeTheme = () => {
    if (themeMode === 'dark') {
      themeSetting.light();
      setThemeMode('light');
    } else {
      themeSetting.dark();
      setThemeMode('dark');
    }
  };

  const navChange = () => {
    setNavOpen(true);
  };

  return (
    <header className="flex h-12 w-full items-center justify-between px-2">
      <div className="flex items-center">
        {navMode === 'min' && (
          <div className="pr-2 text-xl">
            <Button icon={'bars'} onClick={navChange}></Button>
          </div>
        )}

        <div className="pr-2 text-2xl">🚀</div>
        <div className="text-2xl">react-tailwindcss</div>
      </div>
      <div className=""></div>
      <div className="flex space-x-5">
        <a href="https://github.com/njyun666666/react-tailwindcss" target="blank">
          <Button icon={['fab', 'github']}></Button>
        </a>
        <Button
          icon={themeMode === 'dark' ? ['far', 'lightbulb'] : ['fas', 'lightbulb']}
          onClick={changeTheme}
        ></Button>
        <Button icon={'user'}></Button>
      </div>
    </header>
  );
};
export default Header;
