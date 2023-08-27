export type InputProps = {
  label?: string;
  LeftIcon?: () => ReactNode;
  RightIcon?: () => ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
