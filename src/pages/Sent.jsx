import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

function Sent() {
  return (
    <div className="sentPart">
      <i className="iconParts">
        <HiOutlineEmojiSad />
      </i>
      <h1>No sent messages! Send one now!</h1>
    </div>
  );
}

export default Sent;
