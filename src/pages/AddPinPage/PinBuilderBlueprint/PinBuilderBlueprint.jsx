import { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import RestartPopout from "../RestartPopout/RestartPopout";
import UploadImageThumbnail from "../UploadImageThumbnail/UploadImageThumbnail";

// styles
import { PinBuilderBlueprintStyles } from "./PinBuilderBlueprint.styles";

// assets
import menu from "../../../assets/ellipsis.svg";
import arrow from "../../../assets/menu-arrow.svg";
import upload from "../../../assets/upload.svg";
import tempUser from "../../../assets/temp-user-profile.svg";

// redux
import { addPinToFeed } from "../../../slices/pinFeedSlice";
import { useAddPinMutation } from "../../../slices/pinApiSlice";

const PinBuilderBlueprint = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [addPin, { isLoading }] = useAddPinMutation();
  const isMounted = useRef(false);

  // handles pin category state
  const [pinCategory, setPinCategory] = useState("");
  const handleCategoryInput = (e) => {
    const { value } = e.target;
    setPinCategory(value);
  };

  // handle pin description state
  const [pinDescription, setPinDescription] = useState("");
  const handleDescriptionInput = (e) => {
    const { value } = e.target;
    setPinDescription(value);
  };

  // handle the pin title input
  const [pinTitle, setPinTitle] = useState("");
  const handleTitleInput = (e) => {
    const { value } = e.target;
    setPinTitle(value);
  };

  // state management for pop out menu
  const [restartPopoutActive, setRestartPopoutActive] = useState(false);
  const handleRestartPopout = () =>
    setRestartPopoutActive((prevState) => !prevState);

  // toggle between category button and input field
  const [categoryButtonActive, setCategoryButtonActive] = useState(true);
  const handleToggleCategoryButton = () =>
    setCategoryButtonActive((prevState) => !prevState);

  // drag and drop functionality
  const [imageDropped, setImageDropped] = useState(false);

  //handle thumbnail image state
  const [thumbnail, setThumbnail] = useState();

  // handle image state
  const [image, setImage] = useState();

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
        setImage(file);

        const reader = new FileReader();
        reader.onload = function (e) {
          // setThumbnail((prevState) => [...prevState, e.target.result]);
          setThumbnail({ src: e.target.result });
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
      handleFiles(files);
      setImageDropped(true);
    };
    fileUpload.addEventListener("change", upload, false);

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
  }, [image, thumbnail]);

  //  pin info from api response after created
  const [newlyMadePin, setNewlyMadePin] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  // handles pin creation
  const createPin = async (event) => {
    // event.preventDefault();
    const formData = new FormData();
    formData.append("image_id", image, image.file);
    formData.append("title", pinTitle);
    formData.append("about", pinDescription);
    formData.append("category", pinCategory);
    formData.append("postedby", user.username);

    const res = await addPin(formData)
      .unwrap()
      .then((res) => {
        setNewlyMadePin(res.data);
        // console.log("response ", res);
      })
      .then(() => refreshPage());
  };

  const pinComponents = () => {
    const pinState = {
      category: pinCategory,
      title: pinTitle,
      description: pinDescription,
      thumbnail: thumbnail,
    };
    return pinState;
  };

  const makepin = useMemo(
    () => pinComponents(pinCategory, pinTitle, pinDescription, thumbnail),
    [pinCategory, pinTitle, pinDescription, thumbnail]
  );

  useEffect(() => {
    if (isMounted.current) {
      dispatch(addPinToFeed(makepin));
    } else {
      isMounted.current = true;
    }
  }, [makepin, dispatch]);

  return (
    <PinBuilderBlueprintStyles>
      <div className="pin-builder-body-container">
        <div className="board-and-delete-option-container">
          <>
            <div
              className="delete-button-container"
              onClick={handleRestartPopout}
            >
              <button className="delete-button">
                <div className="delete-button-img-container">
                  <img src={menu} alt="menu" />
                </div>
              </button>
            </div>
            {restartPopoutActive && <RestartPopout />}
          </>
          <div className="board-selection-container">
            <div className="board-input-container">
              <button className="board-input">
                <div className="button-text">Choose Board</div>
                <img src={arrow} className="btn-arrow" alt="drop down menu" />
              </button>
              <button className="board-save-btn" onClick={createPin}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="pin-details-container">
          <div className="upload-space-container" id="dropbox">
            <UploadImageThumbnail
              thumbnail={thumbnail}
              setThumbnail={setThumbnail}
              setImage={setImage}
            />
            <div
              className="pin-image-upload-container"
              style={{ display: image ? "none" : "flex" }}
            >
              <div className="upload-container-space-controller">
                <label
                  className="upload-container"
                  htmlFor="image-upload"
                  id="upload-container"
                  // onClick={}
                >
                  <img className="upload-img" src={upload} alt="upload" />
                  <div className="label-text">
                    Drag and drop or click to upload
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="pin-image-upload visually-hidden"
                  // onChange={handleChange}
                />
                <div className="info-text">
                  Recommendation: Use high-quality .jpg files less than 20MB
                </div>
              </div>
            </div>
          </div>
          <div className="pin-information-container">
            <div className="container-space-controller">
              <div className="pin-title-container">
                <input
                  className="title-input"
                  placeholder="Add your title"
                  onChange={handleTitleInput}
                  value={pinTitle}
                />
                <div className="divider"></div>
              </div>
              <div className="user-info-container">
                <div className="profile-img-container">
                  <img src={tempUser} />
                </div>
                <div className="user-info-name">
                  <div className="user-info-name-text">{user.username}</div>
                </div>
              </div>
              <div className="pin-description-container">
                <textarea
                  className="pin-description"
                  placeholder="Tell everyone what your Pin is about"
                  onChange={handleDescriptionInput}
                  value={pinDescription}
                />
                <div className="divider"></div>
              </div>
              <div className="category-container">
                {categoryButtonActive && (
                  <button
                    className="category-btn"
                    onClick={handleToggleCategoryButton}
                  >
                    Category
                  </button>
                )}
                {!categoryButtonActive && (
                  <input
                    className="category-input"
                    placeholder="Add a category"
                    onChange={handleCategoryInput}
                    value={pinCategory}
                  />
                )}
                {!categoryButtonActive && <div className="divider"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PinBuilderBlueprintStyles>
  );
};

export default PinBuilderBlueprint;
