import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // localStorage.theme = 'light';
    // localStorage.theme = 'dark';
  });

  return (
    <>
      <h1 className="text-primary">Primary</h1>
      <h1 className="text-secondary">Secondary</h1>
      <h1 className="text-success">Success</h1>
      <h1 className="text-error">Error</h1>
      <h1 className="text-info">Info</h1>
      <h1 className="text-warning">Warning</h1>
      <p>測試</p>
    </>
  );
};

export default App;
