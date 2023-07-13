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
