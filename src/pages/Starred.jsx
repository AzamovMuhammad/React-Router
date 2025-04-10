import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

function Starred() {
  return (
    <div className="starredPart">
      <i className="iconParts">
        <HiOutlineEmojiSad />
      </i>
      <h1>
        No starred messages. Stars let you give messages a special status to
        make them easier to find. To star a message, click on the star outline
        beside any message or conversation.
      </h1>
    </div>
  );
}

export default Starred;
