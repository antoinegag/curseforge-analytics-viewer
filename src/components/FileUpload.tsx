import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Loader from "react-loader-spinner";
import classNames from "classnames";
import { DocumentReport } from "heroicons-react";

interface Props {
  className?: string;
  onUpload?: Function;
}

export default function FileUpload({ className, onUpload }: Props) {
  const [file, setFile] = useState<File>();

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (!acceptedFiles[0]) {
        return;
      }
      const newFile = acceptedFiles[0];

      setFile(newFile);
      onUpload && onUpload(newFile);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (file) {
    return (
      <div className="flex items-center">
        <DocumentReport size={24} />
        {file.name}
      </div>
    );
  }

  return (
    <div {...getRootProps()} className={classNames(className, "drop-zone")}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Loader type="Rings" color="#DD5F18" height={200} width={200} />
      ) : (
        <div className="text-xl text-center my-2">
          Drop export here or
          <br />
          <span className="underline cursor-pointer">choose a file</span>
        </div>
      )}
    </div>
  );
}
