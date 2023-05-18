import classNames from 'classnames';
import { Icon, IconTheme, IconColors } from '../icon';
import Styles  from './Button.module.css';
import type { ThemeColors, ThemeSizes } from '@/interfaces/theme';

type ButtonColors   = Pick<ThemeColors, 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'clear' | 'lime'>;
type ButtonSizes    = Pick<ThemeSizes, 'xs' | 'sm' | 'base' | 'lg' | 'xl'>;

interface ButtonProps {
    /* Button contents */
    label:string | boolean;
    /* Button Size */
    size?:keyof ButtonSizes;
    /* Button Color */
    color?:keyof ButtonColors;
    /* Disable button */
    disabled?:boolean;
    /* Additional Bbutton classes */
    className?:string;
    /* Set index */
    tabIndex?:any;
    /* Button Type */
    type?:'button' | 'submit' | 'reset';
    iconLeft?:keyof IconTheme;
    iconRight?:keyof IconTheme;
    iconColor?:keyof IconColors;
    full?:boolean;
    href?:string;
    onClick?:any;
}

export const Button = ({
    label,
    full,
    size = 'base',
    color = 'primary',
    iconColor = 'primary',
    disabled = false,
    className,
    tabIndex, 
    type,
    href,
    iconLeft,
    iconRight,
    onClick, 
    ...props 
}:ButtonProps) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'button';
    const btnColor = `btn-${color}`; 
    const btnSize = `btn-${size}`;
    const wFull = typeof full !== 'undefined' && 'w-full';

    const IconRight = () => {
        return (typeof iconRight !== 'undefined') ? <Icon className={`${Styles['btn-icon']} ${Styles.icon}`} icon={iconRight} color={iconColor} />:<></>
    };

    const IconLeft = () => {
        return (typeof iconLeft !== 'undefined') ? <Icon className={`${Styles['btn-icon']} ${Styles.icon}`} icon={iconLeft} color={iconColor}  />:<></>
    };

    return <Component
        onClick={onClick}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : type}
        
        className={classNames(
                wFull,
                Styles.btn,
                Styles[btnColor],
                Styles[btnSize],
                className,
            )}
        {...props}
    >
        <IconLeft />{label && <span>{label}</span>}<IconRight />
    </Component>
}