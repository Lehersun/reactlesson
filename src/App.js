import "./App.css";
import React from "react";
import CommentsList from "./comment/CommentsList";
import Context from "./context";
import AddComment from "./comment/AddComment";

function App() {
  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem("comments") || "[]")
  );

  function removeComment(id) {
    setComments(comments.filter((comment) => comment.id !== id));
  }

  function newComment(name, text) {
    setComments(
      comments.concat([
        {
          id: Date.now(),
          name,
          text,
          date: Date(),
        },
      ])
    );
  }

  localStorage.setItem("comments", JSON.stringify(comments));

  return (
    <Context.Provider value={{ removeComment }}>
      <div className="comments">
        <h1>Комментарии:</h1>

        {comments.length ? (
          <CommentsList comments={comments} />
        ) : (
          <p>Нет комментариев ...</p>
        )}
        <AddComment onCreate={newComment} />
      </div>
    </Context.Provider>
  );
}

export default App;
