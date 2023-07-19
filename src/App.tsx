import { RouterProvider } from 'react-router-dom';
import router from './router';
import { HelmetProvider } from 'react-helmet-async';
import './icon';
import { theme } from './common/theme';

const App = () => {
  new theme().checkMode();

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
