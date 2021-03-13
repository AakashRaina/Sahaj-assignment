import React, { useContext } from "react";
import "../../css/EmailActions.styl";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import { BsForwardFill } from "react-icons/bs";
import { MdMarkunread } from "react-icons/md";
import { RiSpamFill } from "react-icons/ri";
import AppContext from "../store/context";

function EmailActions(props) {
  const contextData = useContext(AppContext);

  return (
    <div class='email-actions flex flex-col'>
      <div class='header flex items-center'>
        <span class='pl-8 text-xl font-bold'>
          {contextData.activeMailbox}(16)
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
