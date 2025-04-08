import React from 'react'
import { Link } from 'react-router-dom'

import { ImPencil } from "react-icons/im";
import { RiInboxFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";


function Sidebar() {
  return (
    <div className="sidebar">
      <button className="compose"><ImPencil/> Compose</button>
      <ul>
        <li><Link to="/"><RiInboxFill className="icon"/> Inbox</Link></li>
        <li><Link to="/"><IoIosStarOutline className="icon"/> Starred</Link></li>
        <li><Link to="/"><MdAccessTime className="icon"/> Snoozed</Link></li>
        <li><Link to="/"><AiOutlineSend className="icon"/> Sent</Link></li>
        <li><Link to="/"><IoDocumentOutline className="icon"/> Drafts</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar