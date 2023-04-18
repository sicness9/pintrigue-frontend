import { useEffect, useState, Suspense, lazy } from "react";

// assets
import menu from "../../../assets/black-ellipsis.svg";
import back from "../../../assets/back-arrow.svg";
import fullscreen from "../../../assets/resize-arrows.svg";
import unfilledHeart from "../../../assets/like-image-unfilled.svg";
import filledHeart from "../../../assets/like-image-filled.svg";
import userProfileImage from "../../../assets/noimage-icon.svg";
import menuArrow from "../../../assets/menu-arrow.svg";

// styles
import { PinDetailsStyles } from "./PinDetails.styles";

const CommentSection = lazy(() => import("../CommentSection/CommentSection"));

const PinDetails = (props) => {
  // array containing comments for the pin
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (props.pin) {
      setComments(props.pin.comments);
    } else {
      setComments([]);
    }
  }, [props.pin]);

  return (
    <PinDetailsStyles>
      <div className="pin-other-content-header-container">
        <div className="like-and-menu-btns-container">
          <div className="menu-btn-container">
            <button className="menu-btn">
              <img className="menu-btn-img" src={menu} alt="menu button" />
            </button>
          </div>
          <div className="pin-like-btn-container">
            <button className="pin-like-btn">
              <img
                className="like-btn-img"
                src={unfilledHeart}
                alt="like button"
              />
            </button>
          </div>
        </div>
        <div className="save-button-container">
          <button className="save-button">
            <div className="save-btn-text">Save</div>
          </button>
        </div>
      </div>
      <div className="pin-details-container">
        <div className="pin-likes-container">
          <div className="like-img-container">
            <img className="pins-likes-image" src={filledHeart} alt="likes" />
          </div>
          <div className="pin-like-details-container">
            <div className="pin-like-details-text">You and 28k others</div>
          </div>
        </div>
        <div className="pin-title-container">
          <div className="pin-title-text">{props.pin?.title}</div>
        </div>
        <div className="pin-publish-info-container">
          <div className="publish-info-text">
            Published on {props.pin?.created_at}
          </div>
        </div>
        <div className="pin-owner-info-container">
          <div className="pin-owner-profile-container">
            <div className="pin-owner-image-container">
              <img
                className="user-profile-image"
                src={userProfileImage}
                alt="user profile"
              />
            </div>
            <div className="pin-owner-name-stats-container">
              <div className="pin-owner-name-container">
                <div className="owner-name-text">
                  {props.pin?.posted_by?.posted_by?.username}
                </div>
              </div>
              <div className="pin-owner-stats-container">
                <div className="owner-stats-text">
                  {props.pin?.posted_by?.posted_by?.follower_count} followers
                </div>
              </div>
            </div>
          </div>
          <div className="follow-btn-container">
            <button className="follow-btn">
              <div className="follow-btn-text">Follow</div>
            </button>
          </div>
        </div>
        <div className="pin-comments-container">
          <Suspense fallback={<div>Loading...</div>}>
            <CommentSection comments={comments} />
          </Suspense>
        </div>
      </div>
    </PinDetailsStyles>
  );
};

export default PinDetails;