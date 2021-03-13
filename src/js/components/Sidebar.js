import React, { useContext } from "react";
import "../../css/Sidebar.styl";
import { BiPencil } from "react-icons/bi";
import { SIDEBAR_OPTIONS } from "../mockdata/data";
import AppContext from "../store/context";

function Sidebar(props) {
  const contextData = useContext(AppContext);

  const onMailboxClick = (e) =>
    contextData.setActiveMailBox(e.target.innerText);

  return (
    <div class='sidebar-container h-full flex flex-col'>
      <div class='compose flex justify-center items-center'>
        <div class='button rounded-full flex justify-center items-center bg-blue-400 text-white font-bold'>
          <BiPencil /> Compose
        </div>
      </div>
      <div class='options flex flex-col items-center'>
        {SIDEBAR_OPTIONS.map((option, idx) => {
          return (
            <span
              class={`bg-blue-100 mb-4 p-2 ${
                contextData.activeMailbox === option
                  ? `active text-white`
                  : null
              }`}
              onClick={onMailboxClick}
            >
              {option}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
