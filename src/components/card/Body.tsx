import classNames from 'classnames';
import Styles from './Card.module.css';

type Props = {
    id?:string;
    children?: React.ReactNode;
    className?: string;
    onClick?:any;
  }

export const Body = ({children, className="", ...props }:Props) => {
    return (
      <div 
        className={classNames(
          Styles.cardBody,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
} 