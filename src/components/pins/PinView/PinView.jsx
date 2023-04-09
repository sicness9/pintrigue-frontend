import { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";

// components
import Pin from "../Pin/Pin";
// import CommentSection from "../CommentSection/CommentSection";

// styles
import { PinViewContainer, PinViewContent } from "./PinView.styles";

// icons
import menu from "../../../images/black-ellipsis.svg";
import back from "../../../images/back-arrow.svg";
import fullscreen from "../../../images/resize-arrows.svg";
import unfilledHeart from "../../../images/like-image-unfilled.svg";
import filledHeart from "../../../images/like-image-filled.svg";
import userProfileImage from "../../../images/noimage-icon.svg";
import menuArrow from "../../../images/menu-arrow.svg";

const CommentSection = lazy(() => import("../CommentSection/CommentSection"));

const PinView = () => {
  const [pin, setPin] = useState({});
  const [comments, setComments] = useState([]);
  console.log("comments", comments);

  useEffect(() => {
    const pinId = window.location.pathname.split("/")[2];
    axios
      .get(`${process.env.REACT_APP_API_URL}/pins/search-by-id/${pinId}`)
      .then((res) => res.data)
      .then((data) => setPin(data))
      .catch((error) => {
        console.log("Error fetching pin for ID: ", pinId, error);
      });
  }, []);

  useEffect(() => {
    if (pin) {
      setComments(pin.comments);
    } else {
      setComments([]);
    }
  }, [pin]);

  console.log(pin);
  return (
    <>
      <PinViewContainer>
        <PinViewContent>
          <div className="pin-image-view-container">
            <div className="pin-image-view-header">
              <div className="pin-header-back-btn">
                <button className="back-btn">
                  <img
                    src={back}
                    alt="back button"
                    className="back-btn-image"
                  />
                </button>
              </div>
              <div className="pin-fullscreen-btn">
                <button className="fullscreen-btn">
                  <img
                    src={fullscreen}
                    alt="resize button"
                    className="resize-btn-image"
                  />
                </button>
              </div>
            </div>
            <div className="pin-container">
              <div className="pin-space-controller">
                <div className="pin-shape-controller">
                  <div className="pin">
                    <Pin
                      height={"568px"}
                      width={"320px"}
                      image_id={{
                        url: `${process.env.REACT_APP_CDN_URL}${pin.image_id}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pin-other-content-container">
            <div className="pin-other-content-header-container">
              <div className="like-and-menu-btns-container">
                <div className="menu-btn-container">
                  <button className="menu-btn">
                    <img
                      className="menu-btn-img"
                      src={menu}
                      alt="menu button"
                    />
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
            <div className="pin-likes-container">
              <div className="like-img-container">
                <img
                  className="pins-likes-image"
                  src={filledHeart}
                  alt="likes"
                />
              </div>
              <div className="pin-like-details-container">
                <div className="pin-like-details-text">You and 28k others</div>
              </div>
            </div>
            <div className="pin-title-container">
              <div className="pin-title-text">{pin.title}</div>
            </div>
            <div className="pin-publish-info-container">
              <div className="publish-info-text">
                Published on {pin?.created_at}
              </div>
            </div>
            <div className="pin-comments-container">
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
                        {pin?.posted_by?.posted_by?.username}
                      </div>
                    </div>
                    <div className="pin-owner-stats-container">
                      <div className="owner-stats-text">
                        {pin?.posted_by?.posted_by?.follower_count} followers
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
              <Suspense fallback={<div>Loading...</div>}>
                <CommentSection comments={comments} />
              </Suspense>
            </div>
          </div>
        </PinViewContent>
      </PinViewContainer>
    </>
  );
};

export default PinView;
