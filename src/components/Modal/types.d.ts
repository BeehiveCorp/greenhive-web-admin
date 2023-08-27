import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isVisible: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
};
