import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export interface NavMenuProps {
  data: NavMenuDataProps[];
  className?: string;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavMenuDataProps {
  id: string;
  linkProps?: NavLinkProps;
  icon?: IconProp;
  content: React.ReactNode;
  children?: NavMenuDataProps[];
  expanded?: boolean;
  childrenRef?: React.RefObject<HTMLUListElement>;
}

interface NavMenuExpandProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showIcon?: boolean;
  expanded?: boolean;
}

const NavMenuExpandIcon = ({ showIcon, expanded, className, ...rest }: NavMenuExpandProps) => {
  return (
    <div {...rest} className={classNames('NavMenu-expand-icon h-6 w-6 text-center', className)}>
      {showIcon && (
        <FontAwesomeIcon
          icon={faAngleRight}
          className={classNames('transition-[transform] duration-300 ease-in-out', {
            'rotate-0': !expanded,
            'rotate-90': expanded,
          })}
        />
      )}
    </div>
  );
};

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(function NavMenuComponent(
  { data, className, setNavOpen }: NavMenuProps,
  ref
) {
  const [list, setList] = useState(data);

  useEffect(() => {
    const newList = list.map((item) => {
      if (item.children && item.childrenRef) {
        const isActive = !!item.childrenRef.current?.querySelector('a.active');

        if (isActive) {
          item.expanded = true;
        }
      }

      return item;
    });

    setList(newList);
  }, []);

  const handleClick = (data: NavMenuDataProps) => {
    let offsetHeight = data.childrenRef?.current?.offsetHeight;

    if (data.childrenRef?.current) {
      if (data.expanded) {
        data.childrenRef.current.style.height = `${offsetHeight}px`;
        data.childrenRef?.current?.offsetHeight;
      } else {
        data.childrenRef.current.style.height = 'auto';
        offsetHeight = data.childrenRef?.current?.offsetHeight;

        data.childrenRef.current.style.height = '0px';
        data.childrenRef?.current?.offsetHeight;
      }
    }

    const targetExpanded = !data.expanded;

    const newList = list.map((item) => {
      if (item.id === data.id) {
        item.expanded = targetExpanded;
      }
      return item;
    });

    if (data.childrenRef?.current) {
      if (targetExpanded) {
        data.childrenRef.current.style.height = `${offsetHeight}px`;
      } else {
        data.childrenRef.current.style.height = `0px`;
      }
    }

    setList(newList);

    setTimeout(() => {
      if (data.childrenRef?.current) {
        if (targetExpanded) {
          data.childrenRef.current.style.height = 'auto';
        }
      }
    }, 300);
  };

  const handleChangeOpen = () => {
    setNavOpen(false);
  };

  return (
    <ul className={classNames('NavMenu w-full', className)} ref={ref}>
      {list.map((item) => {
        const itemStyle = classNames('mb-1');
        const iconStyle = classNames('NavMenu-icon w-10 text-center p-2 mr-1');
        const linkStyle = classNames('w-full flex items-center rounded cursor-pointer hover:transparent-alpha');
        const contentStyle = classNames('NavMenu-content w-[10.25rem]');

        if (item.children) {
          item.childrenRef = useRef<HTMLUListElement>(null);
        }

        return (
          <React.Fragment key={item.id}>
            {!item.children ? (
              <li className={itemStyle}>
                {item.linkProps && (
                  <NavLink className={linkStyle} end {...item.linkProps} onClick={handleChangeOpen}>
                    <div className={iconStyle}>{item.icon && <FontAwesomeIcon icon={item.icon} />}</div>
                    <div className={contentStyle}>{item.content}</div>
                    <NavMenuExpandIcon />
                  </NavLink>
                )}
              </li>
            ) : (
              // have children
              <li>
                <div className={classNames(itemStyle, linkStyle)} onClick={() => handleClick(item)}>
                  <div className={iconStyle}>{item.icon && <FontAwesomeIcon icon={item.icon} />}</div>
                  <div className={contentStyle}>{item.content}</div>
                  <NavMenuExpandIcon showIcon expanded={item.expanded} />
                </div>

                <NavMenu
                  data={item.children}
                  className={classNames(
                    'NavMenu-children overflow-hidden transition-[height,padding-left] duration-300 ease-in-out will-change-[height,padding-left]',
                    {
                      'h-0': !item.expanded,
                    }
                  )}
                  ref={item.childrenRef}
                  setNavOpen={setNavOpen}
                />
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
});

export default NavMenu;
