import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
      <FontAwesomeIcon icon={icon} className="pr-1 w-5" />
      <span>{text}</span>
    </div>
  );
};

export default MenuText;
