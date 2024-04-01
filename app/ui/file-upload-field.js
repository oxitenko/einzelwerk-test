import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import doc from '../../public/img/docIcon.svg';
import cross from '../../public/img/crossIcon.svg';

const FileUploadField = (props) => {
  const { name } = props;
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles);
    },
    [setValue, name],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
  });

  const deleteFile = (filesName) => {
    const attachment = files?.filter((item) => item.name !== filesName);
    setValue(name, attachment);
  };

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      <div className="flex flex-row h-max">
        <div className="flex flex-col w-[326px] gap-3">
          <p className="text-bsae text-gray950">Dokument hochladen</p>
          <p className="text-xs text-gray400">
            Klicken Sie auf die Schaltfläche oder ziehen Sie ein Dokument im
            PDF-, DOCX-, PNG.
          </p>
          {!!files?.length && (
            <div className="flex flex-wrap gap-2">
              {files.map((item) => {
                return (
                  <div
                    className="flex h-6 bg-gray100 rounded-full items-center py-0.5 px-1.5 max-w-[90%] w-fit"
                    key={item.name}
                  >
                    <Image src={doc} alt="doc" />
                    <p className="text-xs text-gray950 mr-2 ml-1 truncate">
                      {item.name}
                    </p>
                    <button type="button" onClick={() => deleteFile(item.name)}>
                      <Image
                        className="min-w-[10px] min-h-[10px]"
                        src={cross}
                        alt="close"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          {...getRootProps({
            className:
              !isDragActive && !errors[name]
                ? 'max-h-[120px] min-h-[120px] w-[234px] border border-dashed border-gray400 rounded-lg cursor-pointer bg-addfile bg-no-repeat bg-center'
                : !isDragActive && errors[name]
                ? 'max-h-[120px] min-h-[120px] w-[234px] border border-dashed border-red rounded-lg cursor-pointer bg-addfile bg-no-repeat bg-center'
                : isDragActive
                ? 'absolute top-[40px] left-0 z-10 w-full bg-white rounded-lg cursor-pointer'
                : '',
          })}
        >
          {isDragActive && (
            <div className="flex gap-3 flex-col h-[700px] w-[560px] items-center justify-center border border-dashed border-gray400 rounded-lg m-auto">
              <p className="text-2xl text-gray950">Drop files here</p>
              <p className="text-xl text-gray700">
                Put your files in this field
              </p>
            </div>
          )}
          <input {...props} id={name} {...getInputProps()} />
        </div>
      </div>
      <div className="mb-6 flex justify-end w-[95%] h-5">
        <p className="text-base text-red">{errors[name]?.message}</p>
      </div>
    </>
  );
};

export default FileUploadField;
