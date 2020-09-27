import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Loader from "react-loader-spinner";
import classNames from "classnames";
import { DocumentReport, PlusCircle, Trash } from "heroicons-react";

interface Props {
  className?: string;
  onUpload?: Function;
  file?: File;
  onNewExport: Function;
}

export default function FileUpload({
  className,
  onUpload,
  file,
  onNewExport,
}: Props) {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (!acceptedFiles[0]) {
        return;
      }
      const newFile = acceptedFiles[0];

      onUpload && onUpload(newFile);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (file) {
    return (
      <div className="flex w-full">
        <div className="flex items-center flex-grow">
          <DocumentReport size={24} />
          {file.name}
        </div>
        <button
          className="flex items-center p-2 underline hover:text-orange-600 transition duration-500 ease-in-out"
          onClick={(e) => onNewExport()}
        >
          New export <PlusCircle size={24} className="ml-2 " />
        </button>
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
