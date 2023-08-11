import Page from '../Page';
import NavMenu, { NavMenuDataProps } from '../../components/navMenu/NavMenu';
import MenuText from '../../components/navMenu/MenuText';

const menu: NavMenuDataProps[] = [
  {
    id: '1',
    linkProps: {
      to: '/',
    },
    content: <MenuText icon={'home'} text="Home" />,
  },
  {
    id: '2',
    content: <MenuText icon={'star'} text="Button" />,
    children: [
      {
        id: '2-1',
        linkProps: {
          to: '/button',
        },
        content: <MenuText icon={'star'} text="Button 2-1" />,
      },
      {
        id: '2-2',
        linkProps: {
          to: '/button',
        },
        content: <MenuText icon={'star'} text="Button 2-2" />,
      },
    ],
  },
  {
    id: 'NavMenu',
    content: <MenuText icon={'star'} text="NavMenu" />,
    children: [
      {
        id: 'NavMenu-1',
        linkProps: {
          to: '/navMenu',
        },
        content: <MenuText icon={'star'} text="NavMenu-1" />,
      },
      {
        id: 'NavMenu-2',
        linkProps: {
          to: '/navMenu/2',
        },
        content: <MenuText icon={'star'} text="NavMenu-2" />,
      },
    ],
  },
  {
    id: '3',
    content: <MenuText icon={'tree'} text="Tree" />,
    children: [
      {
        id: '3-1',

        linkProps: {
          to: '/tree',
        },
        content: <MenuText icon={'tree'} text="Tree 3-1" />,
      },
      {
        id: '3-2',
        linkProps: {
          to: '/tree/2',
        },
        content: <MenuText icon={'tree'} text="Tree 3-2" />,
      },
      {
        id: '3-3',
        content: <MenuText icon={'gear'} text="Tree 3-3" />,
        children: [
          {
            id: 'Tree x-1',
            linkProps: {
              to: '/tree/x-1',
            },
            content: <MenuText icon={'gear'} text="x-1" />,
          },
          {
            id: 'Tree x-2',
            linkProps: {
              to: '/tree/x-2',
            },
            content: <MenuText icon={'gear'} text="x-2" />,
          },
        ],
      },
    ],
  },
];

const NavMenuPage = () => {
  return (
    <Page title="NavMenu">
      <h1>NavMenu</h1>
      <NavMenu data={menu} />
    </Page>
  );
};
export default NavMenuPage;
