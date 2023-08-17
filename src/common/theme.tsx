import { useEffect, useState } from 'react';

export type color = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'basic' | 'transparent';

export const colorMapping = {
  bg: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    error: 'bg-error',
    info: 'bg-info',
    warning: 'bg-warning',
    basic: 'bg-basic',
    transparent: 'bg-transparent',
  },
  text: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    error: 'text-error',
    info: 'text-info',
    warning: 'text-warning',
    basic: 'text-basic',
    transparent: '',
  },
  border: {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    error: 'border-error',
    info: 'border-info',
    warning: 'border-warning',
    basic: 'border-basic',
    transparent: 'border-transparent',
  },
};

export type themeModeType = 'light' | 'dark';
export enum themeScreenEnum {
  default = 0,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

export const useThemeScreenMode = () => {
  const getThemeScreenMode = () => {
    if (window.innerWidth >= themeScreenEnum['2xl']) {
      return themeScreenEnum['2xl'];
    } else if (window.innerWidth >= themeScreenEnum.xl) {
      return themeScreenEnum.xl;
    } else if (window.innerWidth >= themeScreenEnum.lg) {
      return themeScreenEnum.lg;
    } else if (window.innerWidth >= themeScreenEnum.md) {
      return themeScreenEnum.md;
    } else if (window.innerWidth >= themeScreenEnum.sm) {
      return themeScreenEnum.sm;
    } else {
      return themeScreenEnum.default;
    }
  };

  const [themeScreenMode, setThemeScreenMode] = useState<themeScreenEnum>(getThemeScreenMode());

  useEffect(() => {
    window.addEventListener('resize', () => {
      setThemeScreenMode(getThemeScreenMode());
    });
  }, []);

  return themeScreenMode;
};

export class theme {
  get mode() {
    return localStorage.theme as themeModeType;
  }

  light() {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }

  dark() {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }

  checkMode() {
    if (
      this.mode === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.dark();
    } else {
      this.light();
    }
  }
}
