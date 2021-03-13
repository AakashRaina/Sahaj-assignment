import React, { useState } from "react";
import "../../css/EmailRow.styl";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

function EmailRow({ email, onEmailRowSelect, selectedEmails }) {
  const handleClick = () => onEmailRowSelect(email.id);

  return (
    <div
      class={`email-row border-b border-gray-200 flex flex-row ${
        email.status === "UNREAD" ? "bg-gray-100" : "bg-white"
      } ${selectedEmails.includes(email.id) ? "bg-blue-200" : ""}`}
    >
      <span class='action flex'>
        {selectedEmails.includes(email.id) ? (
          <ImCheckboxChecked onClick={handleClick} />
        ) : (
          <ImCheckboxUnchecked onClick={handleClick} />
        )}
      </span>
      <span class='meta'>{email.from}</span>
      <span class='subject'>{email.subject}</span>
      <span class='date'>{email.date}</span>
    </div>
  );
}

export default EmailRow;
