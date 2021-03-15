import React, { useState, useEffect } from "react";
import "../../css/EmailActions.styl";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import { BsForwardFill } from "react-icons/bs";
import { MdMarkunread } from "react-icons/md";
import { RiSpamFill } from "react-icons/ri";

function EmailActions({ emails, activeMailbox, onDeleteClick, selectAll }) {
  const [isCheckboxSelected, setisCheckboxSelected] = useState(false);

  useEffect(() => {
    setisCheckboxSelected(false);
  }, [activeMailbox]);

  const showUnReadCount = () => {
    if (emails.length === 0) return `(0)`;
    else {
      const count = emails.reduce((acc, item) => {
        if (item.status === "UNREAD") {
          acc = acc + 1;
        }

        return acc;
      }, 0);

      return `(${count})`;
    }
  };

  const handleCheckboxClick = () => {
    setisCheckboxSelected((prevState) => !prevState);
    selectAll();
  };

  const handleDelete = () => {
    onDeleteClick();
    setisCheckboxSelected(false);
  };

  return (
    <div class='email-actions flex flex-col'>
      <div class='header flex items-center'>
        <span class='pl-8 text-xl font-bold'>
          {activeMailbox} {showUnReadCount()}
        </span>
      </div>
      <div class='actions bg-white border-b flex flex-row items-center justify-around'>
        <span style={{ marginLeft: "40px" }}>
          {isCheckboxSelected ? (
            <ImCheckboxChecked onClick={handleCheckboxClick} />
          ) : (
            <ImCheckboxUnchecked onClick={handleCheckboxClick} />
          )}
        </span>
        <span>
          <BsForwardFill color='green' /> Forward
        </span>
        <span onClick={handleDelete}>
          <AiOutlineDelete color='red' /> Delete
        </span>
        <span>
          <MdMarkunread color='blue' /> Read
        </span>
        <span>
          <RiSpamFill color='black' /> Spam
        </span>
      </div>
    </div>
  );
}

export default EmailActions;
