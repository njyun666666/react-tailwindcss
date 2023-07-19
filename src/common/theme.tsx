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
