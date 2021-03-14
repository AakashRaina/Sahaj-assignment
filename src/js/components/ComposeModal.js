import React, { useState } from "react";
import "css/ComposeModal.styl";
import { AiFillCloseCircle } from "react-icons/ai";

function ComposeModal({ showCompose, toggleComposeModal }) {
  const [to, setto] = useState(null);
  const [cc, setcc] = useState(null);
  const [subject, setsubject] = useState(null);
  const [body, setbody] = useState(null);

  const isSendDisabled = () => {
    if (to && subject && body) return false;
    else return true;
  };

  const send = () => {
    const sentItems = JSON.parse(localStorage.getItem("sentItems"));

    const sentMail = {
      id: `${Math.random() * (40 - 30) + 30}`,
      status: "READ",
      from: "aakashraina9@gmail.com",
      to: [`${to}`],
      cc: cc ? [`${cc}`] : undefined,
      subject: `${subject}`,
      body: `${body}`,
      date: "2/12/21",
    };

    if (sentItems) {
      sentItems.push(sentMail);
      localStorage.setItem("sentItems", JSON.stringify(sentItems));
    } else {
      localStorage.setItem("sentItems", JSON.stringify([sentMail]));
    }

    toggleComposeModal();
  };

  if (!showCompose) return null;

  return (
    <div
      class='flex flex-col absolute bottom-0 right-0 w-1/2 h-1/2 compose-container border bg-white .shadow-md mb-3 mr-3 rounded-lg'
      style={{ height: "50%" }}
    >
      <div class='flex justify-end items-center pr-2 border-b border-gray-300'>
        <span onClick={toggleComposeModal} class='cursor-pointer'>
          <AiFillCloseCircle />
        </span>
      </div>
      <div class='border-b border-gray-300'>
        <input
          class='h-full w-full pl-2'
          placeholder='To'
          onBlur={(e) => setto(e.target.value)}
        />
      </div>
      <div class='border-b border-gray-300'>
        <input
          class='h-full w-full pl-2'
          placeholder='Cc'
          onBlur={(e) => setcc(e.target.value)}
        />
      </div>
      <div class='border-b border-gray-300'>
        <input
          class='h-full w-full pl-2'
          placeholder='subject'
          onBlur={(e) => setsubject(e.target.value)}
        />
      </div>
      <div class='border-b border-gray-300'>
        <textarea
          class='h-full w-full resize-none'
          onBlur={(e) => setbody(e.target.value)}
        />
      </div>
      <div class='flex justify-end items-center'>
        <button
          class='bg-blue-300 p-2 rounded'
          onClick={send}
          disabled={isSendDisabled()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ComposeModal;
