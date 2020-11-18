import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function Comment({ commentItem }) {
  const { removeComment } = useContext(Context);

  return (
    <li className="comment-body">
      <div className="comment-header">
        <span className="comment-header_name">{commentItem.name}</span>
        <button
          className="comment-delete-button"
          onClick={() => removeComment(commentItem.id)}
        >
          Удалить
        </button>
      </div>
      <div className="comment-content">{commentItem.text}</div>
      <div className="comment-footer">
        <span className="comment-footer_date">{commentItem.date}</span>
      </div>
    </li>
  );
}

Comment.propTypes = {
  commentItem: PropTypes.object.isRequired,
};

export default Comment;
