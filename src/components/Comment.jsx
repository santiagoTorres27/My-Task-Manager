import React, { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

const Comment = ({ comment, onDeleteComment, color, colorGradient }) => {
  const { setDark } = useContext(ThemeContext);

  return (
    <div
      className={setDark("comment")}
      style={{ backgroundColor: colorGradient }}
    >
      <div>
        <span>
          <b>Added: </b>
          {comment.date}
        </span>
        <p>{comment.text}</p>
      </div>

      <div>
        <button
          className="btn-primary btn-primary--circle"
          onClick={() => {
            onDeleteComment(comment.id);
          }}
          style={{ backgroundColor: color }}
        >
          <img src="./img/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Comment;
