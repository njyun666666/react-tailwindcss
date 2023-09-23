import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { color, colorMapping } from '../../common/theme';
import { faCheckCircle, faCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

export type ButtonState = 'loading' | 'success' | 'error' | undefined;

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: IconProp;
  color?: color;
  outline?: boolean;
  iconProps?: FontAwesomeIconProps;
  state?: ButtonState;
  setState?: Dispatch<SetStateAction<ButtonState>>;
}

export const Button = ({
  color = 'transparent',
  outline,
  disabled,
  className,
  children,
  type,
  iconProps,
  state,
  setState,
  ...rest
}: ButtonProps) => {
  const [btnState, setBtnState] = useState<ButtonState>();
  let classStyle = '';

  if (outline) {
    classStyle = classNames('border', colorMapping.border[color], colorMapping.text[color]);
  } else {
    classStyle = classNames(colorMapping.bg[color]);
  }

  useEffect(() => {
    switch (state) {
      case 'loading':
        setBtnState('loading');
        if (setState) setState('loading');

        break;

      case 'success':
        setBtnState('success');
        if (setState) setState('success');

        setTimeout(() => {
          setBtnState(undefined);
          if (setState) setState(undefined);
        }, 1000);
        break;

      case 'error':
        setBtnState('error');
        if (setState) setState('error');

        setTimeout(() => {
          setBtnState(undefined);
          if (setState) setState(undefined);
          //
        }, 1000);
        break;

      default:
        setBtnState(undefined);
        if (setState) setState(undefined);

        break;
    }
  }, [setState, state]);

  return (
    <button
      className={classNames(
        'Button',
        {
          'Button-outline': outline,
        },
        color,
        'relative overflow-hidden rounded px-1.5 py-0.5 font-bold',
        classStyle,
        className
      )}
      // eslint-disable-next-line react/button-has-type
      type={type === undefined ? 'button' : type}
      disabled={disabled || !!state}
      {...rest}
    >
      <div className="Button-text space-x-1.5">
        {iconProps && (
          <FontAwesomeIcon
            {...iconProps}
            icon={iconProps.icon}
            className={classNames(
              {
                'mr-1.5': children,
              },
              iconProps.className
            )}
          />
        )}

        {children && <span>{children}</span>}
      </div>

      {!!btnState && (
        <div className="text-foreground absolute left-0 top-0 flex h-full w-full items-center justify-center">
          {btnState === 'loading' && (
            <FontAwesomeIcon icon={faCircle} flip="horizontal" className="animate-[fa-flip_1s_ease-in-out_infinite]" />
          )}

          {btnState === 'success' && (
            <FontAwesomeIcon icon={faCheckCircle} className="bg-background rounded-full text-success" />
          )}
          {btnState === 'error' && (
            <FontAwesomeIcon icon={faXmarkCircle} className="bg-background rounded-full text-error" />
          )}
        </div>
      )}
    </button>
  );
};
