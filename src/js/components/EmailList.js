import React, { useState } from "react";
import { EMAILS } from "../mockdata/data";
import EmailRow from "./EmailRow";

function EmailList(props) {
  const [emails, setemails] = useState(EMAILS);

  return (
    <React.Fragment>
      {emails.map((email) => (
        <EmailRow email={email} key={email.id} />
      ))}
    </React.Fragment>
  );
}

export default EmailList;
