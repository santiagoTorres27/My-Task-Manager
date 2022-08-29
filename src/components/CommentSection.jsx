import React from "react";
import Comment from "./Comment";

const CommentSection = ({
  comments,
  onDeleteComment,
  color,
  colorGradient,
}) => {
  return (
    <div className="comment-section">
      {comments.map((item) => (
        <Comment
          key={item.id}
          comment={item}
          onDeleteComment={onDeleteComment}
          color={color}
          colorGradient={colorGradient}
        />
      ))}
    </div>
  );
};

export default CommentSection;
