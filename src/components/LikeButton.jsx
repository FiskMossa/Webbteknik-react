import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const handleLikeClick = () => {
        if (!liked) {
            setLikesCount(likesCount + 1);
        } else {
            setLikesCount(likesCount - 1);
        }
        setLiked(!liked);
  };

  return (
        <div>
            <button onClick={handleLikeClick } className={liked ? 'like-button liked' : 'like-button'}>
                {liked ? 'Unlike' : 'Like'}
            </button>
            <span>{likesCount} {likesCount === 1 ? 'like' : 'likes'}</span>
        </div>
    );
};

export default LikeButton;
