import { useDropzone } from 'react-dropzone';
import { BiCloudUpload } from 'react-icons/bi';

import { useTheme } from '@/contexts/ThemeContext';
import { DropzoneProps } from './types';

import './styles.scss';

const Dropzone: React.FC<DropzoneProps> = ({ onUpload, selectedFile }) => {
  const { palette } = useTheme();

  const maxSize = 10 * 1024 * 1024;

  const onDrop = (acceptedFile: File[]) => {
    const file = acceptedFile[0];

    if (file.size > maxSize) {
      alert('File size exceeds the limit of 10MB.');
      return;
    }

    onUpload(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize,
    maxFiles: 1,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? '--dragging' : ''}`}
    >
      {selectedFile ? (
        <img
          className="dropzone__preview"
          src={URL.createObjectURL(selectedFile)}
          alt="Preview do dropzone"
        />
      ) : (
        <div className="dropzone__empty-state">
          <BiCloudUpload size={40} color={palette.secondary} />

          <h4 className="dropzone__empty-state__message">
            Clique aqui ou arraste sua imagem
          </h4>
        </div>
      )}

      <input {...getInputProps()} />
    </div>
  );
};

export { Dropzone };
