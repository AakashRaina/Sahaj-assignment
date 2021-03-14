import React, { useState } from "react";
import { createPortal } from "react-dom";
import AppContext from "./context";
import ComposeModal from "../components/ComposeModal";

function Provider({ children }) {
  const [mailBox, setmailBox] = useState("Inbox");
  const [showCompose, setshowCompose] = useState(false);

  const setActiveMailBox = (mailBox) => setmailBox(mailBox);

  const toggleComposeModal = () => setshowCompose((prevState) => !prevState);

  return (
    <AppContext.Provider
      value={{
        activeMailbox: mailBox,
        setActiveMailBox: setActiveMailBox,
        toggleComposeModal: toggleComposeModal,
      }}
    >
      {children}
      {createPortal(<ComposeModal showCompose={showCompose} />, document.body)}
    </AppContext.Provider>
  );
}

export default Provider;
