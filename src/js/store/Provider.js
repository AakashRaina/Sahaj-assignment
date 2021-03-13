import React, { useState } from "react";
import AppContext from "./context";

function Provider({ children }) {
  const [mailBox, setmailBox] = useState("Inbox");

  const setActiveMailBox = (mailBox) => setmailBox(mailBox);

  return (
    <AppContext.Provider
      value={{
        activeMailbox: mailBox,
        setActiveMailBox: setActiveMailBox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
