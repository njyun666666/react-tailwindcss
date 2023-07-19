import { useState } from 'react';
import { Button } from '../components';
import { theme } from '../common/theme';

const Header = () => {
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

  return (
    <header className="flex h-12 w-full items-center justify-between px-5">
      <div className="flex items-center">
        <div className="pr-2 text-xl">
          <Button icon={'bars'}></Button>
        </div>
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
