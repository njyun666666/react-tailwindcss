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
          'loading absolute top-0 left-0 w-full h-full flex justify-center items-center ',
          className,
        )}
      >
        {/* <FontAwesomeIcon icon={'rocket'} beat /> */}
        <span className="loading-img">🚀</span>
      </div>
    </>
  );
};

export default Loading;
