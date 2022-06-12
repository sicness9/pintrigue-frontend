import { useState, useEffect, createContext } from "react";

export const CreateImageContext = createContext();

const CreateImageContextProvider = ({ children }) => {
  // drag and drop functionality
  const [imageDropped, setImageDropped] = useState(false);
  // handle image state
  const [image, setImage] = useState([]);
  //handle thumbnail image state
  const [thumbnail, setThumbnail] = useState([]);

  // creates the thumbnail preview of the image uploaded
  // handles the drag and drop upload events
  useEffect(() => {
    const handleFiles = (files) => {
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        let file = files[i];

        if (!file.type.match("image.*")) {
          continue;
        }

        // const img = document.createElement("img");
        // const preview = document.getElementById("preview");
        // img.classList.add("obj");
        // img.file = file;
        // preview.appendChild(img);

        const reader = new FileReader();
        reader.onload = function (e) {
          // aImg.src = e.target.result;
          setImage([...image, file]);
          setThumbnail([...thumbnail, { src: e.target.result }]);
        };
        reader.readAsDataURL(file);
        return file;
      }
    };

    let dropbox = document.getElementById("dropbox");
    const dragenter = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };
    dropbox.addEventListener("dragenter", dragenter, false);

    const dragover = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };
    dropbox.addEventListener("dragover", dragover, false);

    const drop = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const files = e.dataTransfer.files;

      handleFiles(files);
      setImageDropped(true);
    };
    dropbox.addEventListener("drop", drop, false);
  }, [image]);

  // handles file selection for click input
  useEffect(() => {
    const handleClickFiles = (files) => {
      console.log("received file ", files);
      for (let i = 0; i < files.length; i++) {
        let file = files[i];

        if (!file.type.match("image.*")) {
          continue;
        }

        // const img = document.createElement("img");
        // const preview = document.getElementById("preview");
        // img.classList.add("obj");
        // img.file = file;
        // preview.appendChild(img);

        const reader = new FileReader();
        reader.onload = function (e) {
          // aImg.src = e.target.result;
          setImage([...image, file]);
          setThumbnail([...thumbnail, { src: e.target.result }]);
        };
        reader.readAsDataURL(file);
        return file;
      }
    };

    let fileUpload = document.getElementById("image-upload");
    const upload = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const files = fileUpload.files;
      handleClickFiles(files);
      setImageDropped(true);
    };
    fileUpload.addEventListener("change", upload, false);
  }, []);

  return (
    <CreateImageContext.Provider
      value={[
        imageDropped,
        setImageDropped,
        image,
        setImage,
        thumbnail,
        setThumbnail,
      ]}
    >
      {children}
    </CreateImageContext.Provider>
  );
};

export default CreateImageContextProvider;
