import { useState } from "react";

//styles
import { CommentSectionContainer } from "./CommentSection.styles";

// assets
import menuArrow from "../../../assets/menu-arrow.svg";
import menuArrowSide from "../../../assets/menu-arrow-side.svg";
import unfilledLikeHeart from "../../../assets/unfilled-like-grey.svg";
import filledLikeHeart from "../../../assets/like-image-filled.svg";

const CommentSection = (props) => {
  const [isShown, setIsShown] = useState(true);
  const comments = props.comments;

  // hides/shows comments section
  const handleClick = () => {
    setIsShown((prevState) => !prevState);
  };

  // function to get time difference between now and date comment was made
  const getTimeDifference = (commentDate) => {
    var date1 = new Date();
    var date2 = new Date(commentDate);
    var timeDifference = date1.getTime() - date2.getTime();
    var differenceInDays = timeDifference / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
  };

  // formats the result of time difference to display under the comment
  const formatTimeDifference = (commentDate) => {
    const timeDifference = getTimeDifference(commentDate);

    if (timeDifference < 30) {
      return timeDifference + "d";
    } else if (timeDifference >= 30 && timeDifference <= 364) {
      return Math.floor(timeDifference / 30) + "mo";
    } else {
      return Math.floor(timeDifference / 365) + "y";
    }
  };

  return (
    <>
      <CommentSectionContainer>
        <div className="comments-header-container">
          {comments && (
            <div className="number-of-comments">
              {comments.length > 1
                ? `${comments.length} comments`
                : `${comments.length} comment`}
            </div>
          )}
          <div className="hide-n-show-button-container">
            <button className="hide-n-show-button" onClick={handleClick}>
              {isShown ? (
                <img
                  className="hide-comment-image"
                  src={menuArrow}
                  alt="hide and show button"
                />
              ) : (
                <img
                  className="hide-comment-image"
                  src={menuArrowSide}
                  alt="hide and show button"
                />
              )}
            </button>
          </div>
        </div>
        {isShown && (
          <div className="comments-container">
            {comments &&
              comments.map((comment, i) => {
                return (
                  <div key={i} className="comment">
                    <div className="poster_image">
                      <img
                        src={`${import.meta.env.VITE_CDN_URL}${
                          comment.posted_by.image_id
                        }`}
                        alt="poster profile pic"
                        className="poster_image_pic"
                      />
                    </div>

                    <div className="comment-message">
                      <div className="comment-user-container">
                        <span className="commenter-name">
                          {comment.posted_by.username}
                        </span>
                        {comment.comment}
                      </div>

                      <div className="comment-detail-functions">
                        <div className="post-date">
                          {formatTimeDifference(comment.created_at) === "0d"
                            ? "Today"
                            : formatTimeDifference(comment.created_at)}
                        </div>
                        <button className="reply-btn">
                          <div className="reply-btn-text">Reply</div>
                        </button>
                        <button className="comment-like-btn">
                          <img src={unfilledLikeHeart} />
                          <div className="comment-likes">{comment.likes}</div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </CommentSectionContainer>
    </>
  );
};

export default CommentSection;
