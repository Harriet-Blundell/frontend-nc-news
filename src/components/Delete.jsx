import React from 'react';

const Delete = props => {
  const { deleteArticle, articleId, deleteComment, commentId } = props;
  return (
    <div>
      <button
        onClick={() => {
          if (articleId) {
            deleteArticle(articleId);
          } else if (commentId) {
            deleteComment(commentId);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
