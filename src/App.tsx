import { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
