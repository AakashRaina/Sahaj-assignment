import React from "react";
import "css/ComposeModal.styl";
import { AiFillCloseCircle } from "react-icons/ai";

function ComposeModal({ showCompose, toggleComposeModal }) {
  const send = () => {
    const sentItems = JSON.parse(localStorage.getItem("sentItems"));

    if (sentItems) {
      sentItems.push({
        id: 10,
        status: "READ",
        from: "aakashraina9@gmail.com",
        to: ["test@gmail.com", "mockdata@gmail.com"],
        cc: ["test@gmail.com", "mockdata@gmail.com"],
        subject: "Coding Assignment - UI - Sahaj Software Solutions",
        body: "Lipsum text here",
        date: "2/12/21",
      });

      localStorage.setItem("sentItems", JSON.stringify(sentItems));
    } else {
      localStorage.setItem(
        "sentItems",
        JSON.stringify([
          {
            id: 10,
            status: "READ",
            from: "aakashraina9@gmail.com",
            to: ["test@gmail.com", "mockdata@gmail.com"],
            cc: ["test@gmail.com", "mockdata@gmail.com"],
            subject: "Coding Assignment - UI - Sahaj Software Solutions",
            body: "Lipsum text here",
            date: "2/12/21",
          },
        ])
      );
    }
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
        <input class='h-full w-full pl-2' placeholder='To' />
      </div>
      <div class='border-b border-gray-300'>
        <input class='h-full w-full pl-2' placeholder='Cc' />
      </div>
      <div class='border-b border-gray-300'>
        <textarea class='h-full w-full resize-none' />
      </div>
      <div class='flex justify-end items-center'>
        <button class='bg-blue-300 p-2 rounded' onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ComposeModal;
