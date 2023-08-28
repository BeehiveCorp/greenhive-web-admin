import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  isVisible: boolean;
  title?: string;
  description?: string;
  height?: string;
  width?: string;
  onClose: () => void;
};
