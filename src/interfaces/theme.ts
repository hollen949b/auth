import { IconTheme } from "@/components/icon";

export interface Theme {
    icon:IconTheme;
}

export interface StateColors {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    light: string;
    clear: string;
    dark: string;
    link: string;
}

export interface ThemeColors extends StateColors {
    [key: string]: string;
    purple:string;
    lime:string;
    white:string;
}

export interface ThemeSizes {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
}

export interface ThemeRadius {
    none:string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full:string;
}