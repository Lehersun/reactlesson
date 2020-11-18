import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

function CommentsList(props) {
  return (
    <ul className="comments-list">
      {props.comments.map((commentItem) => {
        return <Comment commentItem={commentItem} key={commentItem.id} />;
      })}
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
