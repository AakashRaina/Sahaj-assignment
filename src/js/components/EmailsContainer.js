import React from "react";
import EmailList from "./EmailList";
import EmailActions from "./EmailActions";
import "../../css/EmailsContainer.styl";

function EmailsContainer(props) {
  return (
    <div class='emails-container border-2 border-gray-200 shadow-lg grid grid-rows-6 bg-gray-300'>
      <div class='row-span-1 h-full bg-gray-200'>
        <EmailActions />
      </div>
      <div class='grid row-span-5 h-full overflow-scroll'>
        <EmailList />
      </div>
    </div>
  );
}

export default EmailsContainer;
