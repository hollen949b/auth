interface CommonProps {
    id:string,
    type:string,
    value?:string,
    disabled?: boolean,
    onChange?:any,
    required?:any,
    autoComplete?:any,
    placeholder?:any,
    autoFocus?:any,
    className?: string,
    label?:string;
    groupStart?:React.ReactNode,
    groupEnd?:React.ReactNode,
    onInput?:any,
}

const Input = ({ disabled = false, className='', ...props }: CommonProps) => (
    <input
        disabled={disabled}
        className={`border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
        {...props}
    />
)

export const FancyInput = ({ disabled = false, className='', id, label, value, groupStart, groupEnd, ...props }: CommonProps) => (
    <div className={`${value ? "pt-4":"pt-0" } px-2 border-none relative h-9 md:h-12 overflow-hidden flex flex-nowrap ${className}`}>
        { groupStart &&
            <div>{groupStart}</div>
        }
        <label htmlFor={id} className={`${value ? "top-0 opacity-100":"-top-8 opacity-0" } absolute px-2 pt-1 left-0 w-full text-sm text-gray-400 transition-all text-left`}>{label}</label>
        <input 
            id={id} 
            name={id}
            disabled={disabled}
            className="h-full w-full text-base p-0 m-0 focus:p-0 bg-transparent border-none shadow-none focus:border-none outline-none focus:outline-none ring-0 focus:ring-0 transition-all"
            value={value}
            aria-label={label}
            placeholder={label}
            {...props}
        />
        { groupEnd &&
            <div>{groupEnd}</div>
        }
    </div>
)

export default Input