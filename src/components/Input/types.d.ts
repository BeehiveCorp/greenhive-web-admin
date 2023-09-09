import { ColorResult } from 'react-color';

export type InputProps = {
  label?: string;
  LeftIcon?: () => ReactNode;
  RightIcon?: () => ReactNode;
  onColorPick?: (props: ColorResult) => void;
  containerStyle?: React.CSSProperties;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
