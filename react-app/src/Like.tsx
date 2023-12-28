import React, { MouseEvent, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface Props {
  onLike?: (event: MouseEvent) => void;
  onDislike?: (event: MouseEvent) => void;
}

const Like = ({ onLike, onDislike }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeEvent = (event: MouseEvent) => {
    setIsLiked(true);
    onLike && onLike(event);
  };

  const dislikeEvent = (event: MouseEvent) => {
    setIsLiked(false);
    onDislike && onDislike(event);
  };

  if (isLiked) return <GoHeartFill color="red" onClick={dislikeEvent} />;
  else return <GoHeart onClick={likeEvent} />;
};

export default Like;
