import { useState } from 'react';
import { BlockPicker } from 'react-color';

import { useTheme } from '@/contexts/ThemeContext';

import { InputProps } from './types';

import './styles.scss';
import { BiXCircle } from 'react-icons/bi';

const Input: React.FC<InputProps> = ({
  label,
  name,
  LeftIcon,
  RightIcon,
  onColorPick,
  value,
  containerStyle,
  ...rest
}) => {
  const { palette } = useTheme();

  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  return (
    <div className="input-container">
      {!!label && <label htmlFor={name}>{label}</label>}

      <div className="input-container__wrapper" style={containerStyle}>
        {LeftIcon && <LeftIcon />}

        <input
          onClick={() => {
            if (onColorPick) setIsColorPickerOpen(true);
          }}
          value={value}
          {...rest}
        />

        {RightIcon && !isColorPickerOpen && <RightIcon />}

        {isColorPickerOpen && (
          <BiXCircle
            color={value ?? palette.primary}
            size={24}
            onClick={() => setIsColorPickerOpen(false)}
            style={{ cursor: 'pointer' }}
          />
        )}

        {onColorPick && isColorPickerOpen && (
          <div className="input-container__color-picker">
            <BlockPicker
              onChangeComplete={onColorPick}
              color={String(value) ?? palette.primary}
              styles={{
                default: {
                  card: { background: palette.container, borderRadius: '8px' },
                  body: { borderRadius: '8px' },
                  head: { height: '40px' },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { Input };
