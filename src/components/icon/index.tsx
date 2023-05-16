import themeDefault from '@/utils/theme-default';

export interface IconTheme {
    x: {path:string};
    at: {path:string};
    home: {path:string};
    plus: {path:string};
    user: {path:string};
    phone: {path:string};
    email: {path:string};
    search: {path:string};
    angleUp: {path:string};
    angleRight: {path:string};
    angleDown: {path:string};
    angleLeft: {path:string};
    ellipsesY: {path:string};
    ellipsesX: {path:string};

    // Socialmedia
    facebook: {path:string};
    instagram: {path:string};
    twitter: {path:string};
    spotify: {path:string};
    discord: {path:string};
    gitlab: {path:string};
}

interface IconProps {
    className?:string;
    icon:keyof IconTheme;
    children?:React.ReactNode,
}

export const Icon = ({icon, className, ...props}:IconProps) => {
    const {icon:Theme} = themeDefault;
    const path = Theme[icon].path;
    return(
        <svg className={`${className}`} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" role="img" focusable="false" aria-hidden="true">
            <path d={`${path}`} />
        </svg>   
    )
}