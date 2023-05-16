import { Head } from "./Head"
import { Body } from "./Body"
import { Foot } from "./Foot";
import { ActionsRight } from "./CardActions"
import Styles from './Card.module.css';
import type { ThemeColors, ThemeRadius } from '@/interfaces/theme';
import classNames from "classnames";

type CardColors = Pick<ThemeColors, 'white' | 'gray'>;
type CardRadius = Pick<ThemeRadius, 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>;

type Props = {
  id?:string;
  children?: React.ReactNode;
  className?: string;
  onClick?:any;
  color:keyof CardColors;
  radius:keyof CardRadius;
}

export const Card = ({
  color,
  radius,
  children, 
  className="", 
  ...props 
}:Props) => {
  const radiusSize = `cardRadius-${radius}`;
  const cardColor = `card-${color}`; 
  return (
    <div className={classNames(
      Styles.card,
      Styles[cardColor],
      Styles[radiusSize],
      className
    )}
      {...props}
    >
      {children}
    </div>
  )
} 

Card.Head = Head
Card.ActionsRight = ActionsRight
Card.Body = Body
Card.Foot = Foot