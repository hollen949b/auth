type Props = {
    id?:string;
    children?: React.ReactNode;
    className?: string;
    onClick?:any;
  }

export const ActionsRight = ({children, className="", ...props }:Props) => {
    return (
      <div 
        className={` ${className}`}
        {...props}
      >
        {children}
      </div>
    )
} 
export const ActionsBottom = ({children, className="", ...props }:Props) => {
    return (
      <div 
        className={` ${className}`}
        {...props}
      >
        {children}
      </div>
    )
} 