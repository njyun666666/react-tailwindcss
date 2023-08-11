import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { color, colorMapping } from '../../common/theme';
import Loading from '../loading/Loading';

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: IconProp;
  color?: color;
  outline?: boolean;
  loading?: boolean;
}

export const Button = ({
  icon,
  color = 'transparent',
  outline,
  loading,
  disabled,
  className,
  children,
  type,
  ...rest
}: ButtonProps) => {
  let classStyle = '';

  if (outline) {
    classStyle = classNames('border', colorMapping.border[color], colorMapping.text[color]);
  } else {
    classStyle = classNames(colorMapping.bg[color]);
  }

  return (
    <button
      className={classNames(
        'Button',
        {
          'Button-outline': outline,
        },
        color,
        'rounded px-1.5 py-0.5 font-bold overflow-hidden relative',
        classStyle,
        className,
      )}
      // eslint-disable-next-line react/button-has-type
      type={type === undefined ? 'button' : type}
      disabled={disabled || loading}
      {...rest}
    >
      <div className="Button-text space-x-1.5">
        {icon && <FontAwesomeIcon icon={icon} />}
        {children && <span>{children}</span>}
      </div>

      {loading && <Loading />}
    </button>
  );
};
