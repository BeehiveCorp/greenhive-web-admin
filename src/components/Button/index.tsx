import { useTheme } from '@/contexts/ThemeContext';

import { ButtonProps } from './types';

import './styles.scss';

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  LeftIcon,
  RightIcon,
  primary,
  secondary,
  onClick,
  style,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        button
        ${primary ? 'primary' : ''}
        ${secondary ? (theme === 'dark' ? 'secondary' : 'primary') : ''}
        ${variant}
      `}
      style={style}
      role="button"
      onClick={onClick}
    >
      {LeftIcon && <LeftIcon />}

      {!!text && <p className="button__text">{text}</p>}

      {RightIcon && <RightIcon />}
    </div>
  );
};

export { Button };
