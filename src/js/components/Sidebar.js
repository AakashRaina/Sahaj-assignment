import React from "react";
import "../../css/Sidebar.styl";
import { BiPencil } from "react-icons/bi";
import { SIDEBAR_OPTIONS } from "../mockdata/data";

function Sidebar(props) {
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
                idx === 0 ? `active text-white` : null
              }`}
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
