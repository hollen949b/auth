type Props = {
    id?:string;
    children?: React.ReactNode;
    className?: string;
    onClick?:any;
}

export const Head = ({children, className="", ...props }:Props) => {
    return (
      <div 
        className={`w-full p-2 md:p-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
} 