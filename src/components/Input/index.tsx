import { InputProps } from './types';

import './styles.scss';

const Input: React.FC<InputProps> = ({ label, name, LeftIcon, RightIcon }, rest) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>

      <div className="input-container__wrapper">
        {LeftIcon && <LeftIcon />}

        <input {...rest} />

        {RightIcon && <RightIcon />}
      </div>
    </div>
  );
};

export { Input };
