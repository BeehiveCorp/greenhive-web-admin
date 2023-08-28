import { TextareaProps } from './types';

import './styles.scss';

const Textarea: React.FC<TextareaProps> = ({ label, name, value, ...rest }) => {
  return (
    <div className="textarea-container">
      {!!label && <label htmlFor={name}>{label}</label>}

      <div className="textarea-container__wrapper">
        <textarea value={value} {...rest} />
      </div>
    </div>
  );
};

export { Textarea };
