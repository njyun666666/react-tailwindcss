import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { forwardRef, useRef, useState } from 'react';

export interface TreeProps {
  data: TreeDataProps[];
  className?: string;
}

export interface TreeDataProps {
  id: string;
  content: React.ReactNode;
  children?: TreeDataProps[];
  expanded?: boolean;
  childrenRef?: React.RefObject<HTMLUListElement>;
}

interface TreeExpandProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showIcon?: boolean;
  expanded?: boolean;
}

const TreeExpandIcon = ({ showIcon, expanded, className, ...rest }: TreeExpandProps) => {
  return (
    <div {...rest} className={classNames('Tree-expand-icon w-6 h-6 text-center', className)}>
      {showIcon && (
        <FontAwesomeIcon
          icon={'angle-right'}
          className={classNames('transition-[transform] duration-300 ease-in-out', {
            'rotate-0': !expanded,
            'rotate-90': expanded,
          })}
        />
      )}
    </div>
  );
};

export const Tree = forwardRef<HTMLUListElement, TreeProps>(function TreeComponent(
  { data, className }: TreeProps,
  ref,
) {
  const [list, setList] = useState(data);

  const handleClick = (data: TreeDataProps) => {
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

  return (
    <ul className={classNames('Tree w-full', className)} ref={ref}>
      {list.map((item) => {
        const ilStyle = classNames('flex items-center mb-1', {});
        const expandIconStyle = classNames('rounded hover:transparent-alpha cursor-pointer');
        const contentStyle = classNames('', {});

        if (item.children) {
          item.childrenRef = useRef<HTMLUListElement>(null);
        }

        return (
          <React.Fragment key={item.id}>
            {!item.children ? (
              <li className={ilStyle}>
                <TreeExpandIcon />
                <div className={contentStyle}>{item.content}</div>
              </li>
            ) : (
              // have children
              <li>
                <div className={classNames(ilStyle)}>
                  <TreeExpandIcon
                    showIcon
                    expanded={item.expanded}
                    className={expandIconStyle}
                    onClick={() => handleClick(item)}
                  />

                  <div className={contentStyle}>{item.content}</div>
                </div>

                <Tree
                  data={item.children}
                  className={classNames(
                    'Tree-children pl-4 overflow-hidden will-change-[height] transition-[height] duration-300 ease-in-out',
                    {
                      'h-0': !item.expanded,
                    },
                  )}
                  ref={item.childrenRef}
                />
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
});

export default Tree;
