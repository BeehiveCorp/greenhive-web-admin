import { ColorResult } from 'react-color';

export type InputProps = {
  label?: string;
  LeftIcon?: () => ReactNode;
  RightIcon?: () => ReactNode;
  onColorPick?: (props: ColorResult) => void;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
