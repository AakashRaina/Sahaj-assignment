import React, { useState } from "react";
import EmailRow from "./EmailRow";

function EmailList({ emails, onEmailRowSelect, selectedEmails, onEmailClick }) {
  if (emails.length === 0) {
    return (
      <div class='flex justify-center items-center text-3xl font-bold'>
        It's quiet in here 😶
      </div>
    );
  }

  return (
    <div>
      {emails.map((email) => (
        <EmailRow
          email={email}
          key={email.id}
          onEmailRowSelect={onEmailRowSelect}
          selectedEmails={selectedEmails}
          onEmailClick={onEmailClick}
        />
      ))}
    </div>
  );
}

export default EmailList;
