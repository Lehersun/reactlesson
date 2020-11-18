import React, { useState } from "react";
import PropTypes from "prop-types";

function AddComment({ onCreate }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (name.trim() && text.trim()) {
      onCreate(name, text);
    }

    event.target[0].value = "";
    event.target[1].value = "";
  }

  return (
    <form className="add-comment" onSubmit={submitHandler}>
      <label className="add-comment_label">Имя</label>
      <input
        className="add-comment_name"
        placeholder="Введите имя"
        onChange={(event) => setName(event.target.value)}
      />
      <label className="add-comment_label">Текст</label>

      <textarea
        className="add-comment_text"
        placeholder="Введите текст комментария"
        onChange={(event) => setText(event.target.value)}
      />
      <button className="add-comment_button" type="submit">
        Добавить
      </button>
    </form>
  );
}

AddComment.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddComment;
