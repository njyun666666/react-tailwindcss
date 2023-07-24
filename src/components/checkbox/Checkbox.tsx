import classNames from 'classnames';

interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const Checkbox = ({ id, className, children, ...rest }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" id={id} className={classNames(className)} {...rest} />
      <label htmlFor={id}>{children}</label>
    </>
  );
};
export default Checkbox;
