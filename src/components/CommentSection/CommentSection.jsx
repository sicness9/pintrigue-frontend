import { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";

//styles
import { CommentSectionContainer } from "./CommentSection.styles";

// icons
import menuArrow from "../../images/menu-arrow.svg";
import menuArrowSide from "../../images/menu-arrow-side.svg";

const CommentSection = (props) => {
  const comments = props.comments;

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
            <button className="hide-n-show-button">
              <img
                className="hide-comment-image"
                src={menuArrow}
                alt="hide and show button"
              />
            </button>
          </div>
        </div>
        <div className="comments-container">
          {comments &&
            comments.map((comment, i) => {
              return (
                <div key={i} className="comment">
                  <div className="poster_image">
                    <img
                      src={`${process.env.REACT_APP_CDN_URL}${comment.posted_by.image_id}`}
                      alt="poster profile pic"
                      className="poster_image_pic"
                    />
                  </div>

                  <div className="comment-message">
                    <span className="commenter-name">
                      {comment.posted_by.username}
                    </span>
                    {comment.comment}
                  </div>
                </div>
              );
            })}
        </div>
      </CommentSectionContainer>
    </>
  );
};

export default CommentSection;
