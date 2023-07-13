import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex h-full w-full flex-col p-2">
      <NavLink to="">Home</NavLink>
      <NavLink to="button">Button</NavLink>
    </nav>
  );
};
export default Nav;
