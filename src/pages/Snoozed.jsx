import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

function Snoozed() {
  return (
    <div className="snoozedPart">
      <i className="iconParts">
        <HiOutlineEmojiSad  />
      </i>
      <h1>No Snoozed messages! Do you want it!</h1>
    </div>
  );
}

export default Snoozed;
