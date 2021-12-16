import React, { useState } from "react";
import { BsShareFill } from "react-icons/bs";
import {
  AiFillMessage,
  AiOutlineLike,
  AiFillLike,
  AiFillCloseCircle,
} from "react-icons/ai";

function Data(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [commmentText, setCommmentText] = useState("");

  const [showComment, setShowComment] = useState(false);
  const { data, increaseLike, decreaseLikes, addComment } = props;
  const { _id, image, title, desc } = data;
  let { likes, comments } = data;
  comments = comments.reverse();
  // console.log(comments);

  const liked = () => {
    setIsLiked(!isLiked);
    increaseLike(_id);
  };

  const disLiked = () => {
    setIsLiked(!isLiked);
    decreaseLikes(_id);
  };

  const commentsClicked = () => {
    setShowComment(!showComment);
  };

  const addNewComment = async (e) => {
    e.preventDefault();
    // console.log("commmentText");
    if (commmentText !== "") {
      console.log(commmentText);
      await addComment(_id, commmentText);
      alert("Comment added succesfully");
      setCommmentText("");
    }
  };
  return (
    <section className="inner" key={title}>
      <section>
        <img src={image} className="img" />
        <div>
          {!showComment && (
            <div className="right-icons">
              {isLiked ? (
                <AiFillLike onClick={disLiked} className="heart-icon" />
              ) : (
                <AiOutlineLike onClick={liked} className="heart-icon" />
              )}
              <p className="likes">{likes}</p>
              <AiFillMessage
                onClick={commentsClicked}
                className="heart-icon margin"
              />
              <p className="likes comments-length">{comments.length}</p>
              <a href="whatsapp://send?text=https://play.google.com/store/apps/details?id=com.freemocktests.estudyspot">
                <BsShareFill className="heart-icon margin" />
              </a>
            </div>
          )}

          {!showComment ? (
            <div className="title-main">
              <p className="title">
                {title} <br />
                <span className="description">{desc}</span>
              </p>
            </div>
          ) : (
            <div className="comments-show">
              <AiFillCloseCircle
                className="close-button"
                onClick={commentsClicked}
              />
              <p className="comments-title">Latest Comments</p>
              <div className="comments-all">
                {comments.map((each, index) => (
                  <div key={index}>
                    <p className="comments">{each}</p>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="add-comments">
                <form onSubmit={addNewComment}>
                  <input
                    type="text"
                    placeholder="Enter Your Comment"
                    value={commmentText}
                    onChange={(e) => setCommmentText(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Data;
