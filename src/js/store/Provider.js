import React, { useState } from "react";
import { createPortal } from "react-dom";
import AppContext from "./context";
import ComposeModal from "../components/ComposeModal";

function Provider({ children }) {
  const [data, setdata] = useState([]);
  const [mailBox, setmailBox] = useState("Inbox");
  const [showCompose, setshowCompose] = useState(false);

  const setEmails = (data) => setdata(data);

  const setActiveMailBox = (mailBox) => setmailBox(mailBox);

  const toggleComposeModal = () => setshowCompose((prevState) => !prevState);

  return (
    <AppContext.Provider
      value={{
        data: data,
        activeMailbox: mailBox,
        setdata: setEmails,
        setActiveMailBox: setActiveMailBox,
        toggleComposeModal: toggleComposeModal,
      }}
    >
      {children}
      {createPortal(
        <ComposeModal
          showCompose={showCompose}
          toggleComposeModal={toggleComposeModal}
        />,
        document.body
      )}
    </AppContext.Provider>
  );
}

export default Provider;
