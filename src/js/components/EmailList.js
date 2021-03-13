import React, { useState } from "react";
import EmailRow from "./EmailRow";

function EmailList({ emails, onEmailRowSelect, selectedEmails }) {
  if (emails.length === 0) {
    return (
      <div class='flex justify-center items-center text-3xl font-bold'>
        It's quiet in here 😶
      </div>
    );
  }

  return (
    <React.Fragment>
      {emails.map((email) => (
        <EmailRow
          email={email}
          key={email.id}
          onEmailRowSelect={onEmailRowSelect}
          selectedEmails={selectedEmails}
        />
      ))}
    </React.Fragment>
  );
}

export default EmailList;
