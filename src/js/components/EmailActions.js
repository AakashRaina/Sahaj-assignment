import React, { useContext } from "react";
import "../../css/EmailActions.styl";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import { BsForwardFill } from "react-icons/bs";
import { MdMarkunread } from "react-icons/md";
import { RiSpamFill } from "react-icons/ri";

function EmailActions({ emails, activeMailbox }) {
  const showUnReadCount = () => {
    if (emails.length === 0) return `(0)`;
    else return `(16)`;
  };

  return (
    <div class='email-actions flex flex-col'>
      <div class='header flex items-center'>
        <span class='pl-8 text-xl font-bold'>
          {activeMailbox}
          {showUnReadCount()}
        </span>
      </div>
      <div class='actions bg-white border-b flex flex-row items-center justify-around'>
        <span style={{ marginLeft: "40px" }}>
          <ImCheckboxUnchecked />
        </span>
        <span>
          <BsForwardFill /> Forward
        </span>
        <span>
          <AiOutlineDelete /> Delete
        </span>
        <span>
          <MdMarkunread /> Read
        </span>
        <span>
          <RiSpamFill /> Spam
        </span>
      </div>
    </div>
  );
}

export default EmailActions;
