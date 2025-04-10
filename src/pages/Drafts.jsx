import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

function Drafts() {
  return (
    <div className="draftPart">
      <i className="iconParts">
        <HiOutlineEmojiSad />
      </i>
      <h1>You don't have any saved drafts.</h1>
      <h2>
        Saving a draft allows you to keep a message you aren't ready to send
        yet.
      </h2>
    </div>
  );
}

export default Drafts;
