import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { color, colorMapping } from '../../common/theme';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: IconProp;
  color?: color;
  outline?: boolean;
}

export const Button = ({ icon, color = 'transparent', outline, className, children, ...rest }: ButtonProps) => {
  let classStyle = '';

  if (outline) {
    classStyle = classNames('border', colorMapping.border[color], colorMapping.text[color]);
  } else {
    classStyle = classNames(colorMapping.bg[color]);
  }

  return (
    <button
      className={classNames(
        'button',
        {
          'button-outline': outline,
        },
        color,
        'space-x-2 rounded px-1.5 py-0.5 font-bold disabled:opacity-30',
        classStyle,
        className
      )}
      {...rest}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children && <span>{children}</span>}
    </button>
  );
};
