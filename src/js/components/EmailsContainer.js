import React, { useContext, useState, useEffect } from "react";
import EmailList from "./EmailList";
import EmailActions from "./EmailActions";
import "../../css/EmailsContainer.styl";
import AppContext from "../store/context";
import { EMAILS } from "../mockdata/data";

function EmailsContainer(props) {
  const contextData = useContext(AppContext);
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (contextData.activeMailbox === "Inbox") return setdata(EMAILS);
    else setdata([]);
  }, [contextData.activeMailbox]);

  return (
    <div class='emails-container border-2 border-gray-200 shadow-lg grid grid-rows-6 bg-gray-100'>
      <div class='row-span-1 h-full bg-gray-200'>
        <EmailActions emails={data} activeMailbox={contextData.activeMailbox} />
      </div>
      <div class='grid row-span-5 h-full overflow-scroll'>
        <EmailList emails={data} />
      </div>
    </div>
  );
}

export default EmailsContainer;
