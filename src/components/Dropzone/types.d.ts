export type DropzoneProps = {
  onUpload: (file: File) => void;
  selectedFile: File | null;
};
