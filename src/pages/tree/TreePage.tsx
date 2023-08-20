import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tree, { TreeDataProps } from '../../components/tree/Tree';
import Page from '../Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface MenuTextProps {
  icon: IconProp;
  text: string;
  className?: string;
}

const MenuText = ({ icon, text, className }: MenuTextProps) => {
  return (
    <div className={classNames(className)}>
      <FontAwesomeIcon icon={icon} className="w-5 pr-1" />
      <span>{text}</span>
    </div>
  );
};

const menu: TreeDataProps[] = [
  {
    id: '1',
    content: <MenuText icon={'home'} text="Home" />,
  },
  {
    id: '2',
    content: <MenuText icon={'star'} text="Button" />,
    children: [
      {
        id: '2-1',
        content: <MenuText icon={'star'} text="Button 2-1" />,
      },
      {
        id: '2-2',
        content: <MenuText icon={'star'} text="Button 2-2" />,
      },
    ],
  },
  {
    id: '3',
    content: <MenuText icon={'tree'} text="Tree" />,
    children: [
      {
        id: '3-1',
        content: <MenuText icon={'tree'} text="Tree 3-1" />,
      },
      {
        id: '3-2',
        content: <MenuText icon={'tree'} text="Tree 3-2" />,
      },
      {
        id: '3-3',
        content: <MenuText icon={'gear'} text="Tree 3-3" />,
        children: [
          {
            id: 'Tree x-1',
            content: <MenuText icon={'gear'} text="Tree x-1" />,
          },
          {
            id: 'Tree x-2',
            content: <MenuText icon={'gear'} text="Tree x-2" />,
          },
        ],
      },
    ],
  },
];

const TreePage = () => {
  return (
    <Page title="Tree">
      <h1>Tree</h1>

      <Tree data={menu} className="" />

      <div className="my-10"></div>
    </Page>
  );
};
export default TreePage;
