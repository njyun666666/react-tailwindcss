// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <>
      <div
        className={classNames(
          'Loading absolute left-0 top-0 flex h-full w-full items-center justify-center ',
          className
        )}
      >
        {/* <FontAwesomeIcon icon={'rocket'} beat /> */}
        <span className="Loading-img">🚀</span>
      </div>
    </>
  );
};

export default Loading;
