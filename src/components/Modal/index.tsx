import './styles.scss';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  description,
  isVisible,
  height = '60vh',
  width = '640px',
  onClose,
}) => {
  return (
    <>
      <div
        className={`modal ${isVisible ? '--visible' : ''}`}
        style={{
          width,
          height,
          transform: !isVisible ? `translateY(${height})` : 'translateY(0)',
        }}
      >
        <div className="modal__header">
          {!!title && <h4 className="modal__header__title">{title}</h4>}

          {!!description && (
            <p
              style={{ marginTop: title ? '8px' : 0 }}
              className="modal__header__description"
            >
              {description}
            </p>
          )}
        </div>

        <div className="modal__content">{children}</div>
      </div>

      <div
        onClick={onClose}
        className={`background-shadow ${isVisible ? '--visible' : ''}`}
      />
    </>
  );
};

export { Modal };
