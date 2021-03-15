import React, { useContext, useState, useEffect } from "react";
import EmailList from "./EmailList";
import EmailActions from "./EmailActions";
import "../../css/EmailsContainer.styl";
import AppContext from "../store/context";
import { EMAILS } from "../mockdata/data";

function EmailsContainer(props) {
  const contextData = useContext(AppContext);
  const [data, setdata] = useState([]);
  const [selectedEmails, setselectedEmails] = useState([]);

  useEffect(() => {
    setselectedEmails([]);
    if (contextData.activeMailbox === "Inbox") return setdata(EMAILS);
    else if (contextData.activeMailbox === "Sent")
      return setdata(JSON.parse(localStorage.getItem("sentItems")));
    else setdata([]);
  }, [contextData.activeMailbox]);

  const onEmailRowSelect = (id) => {
    if (selectedEmails.includes(id)) {
      const ids = selectedEmails.filter((eId) => eId != id);
      setselectedEmails(ids);
    } else {
      const ids = [...selectedEmails];
      ids.push(id);
      setselectedEmails(ids);
    }
  };

  const selectAll = () => {
    if (selectedEmails.length === data.length) {
      setselectedEmails([]);
    } else {
      const ids = [];
      data.forEach((email) => ids.push(email.id));
      setselectedEmails(ids);
    }
  };

  const onDeleteClick = () => {
    const filteredData = data.filter(
      (email) => !selectedEmails.includes(email.id)
    );
    setdata(filteredData);

    if (contextData.activeMailbox === "Sent")
      localStorage.setItem("sentItems", JSON.stringify(filteredData));
  };

  const onEmailClick = (id) => {
    const emails = data.map((email) => {
      if (email.id === id)
        return {
          ...email,
          status: "READ",
        };
      else return email;
    });

    setdata(emails);
  };

  return (
    <div class='emails-container border-2 border-gray-200 shadow-lg grid grid-rows-6 bg-gray-100'>
      <div class='row-span-1 h-full bg-gray-200'>
        <EmailActions
          emails={data}
          activeMailbox={contextData.activeMailbox}
          onDeleteClick={onDeleteClick}
          selectAll={selectAll}
        />
      </div>
      <div class='grid row-span-5 h-full overflow-scroll'>
        <EmailList
          emails={data}
          onEmailRowSelect={onEmailRowSelect}
          selectedEmails={selectedEmails}
          onEmailClick={onEmailClick}
        />
      </div>
    </div>
  );
}

export default EmailsContainer;
