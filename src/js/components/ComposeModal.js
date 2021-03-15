import React, { useContext } from "react";
import "css/ComposeModal.styl";
import { AiFillCloseCircle } from "react-icons/ai";
import AppContext from "../store/context";

function ComposeModal({ showCompose, toggleComposeModal }) {
  const context = useContext(AppContext);

  const send = (e) => {
    e.preventDefault();

    const to = e.target[0].value;
    const cc = e.target[1].value;
    const subject = e.target[2].value;
    const body = e.target[3].value;

    if (!to || !subject || !body) return;

    const sentItems = JSON.parse(localStorage.getItem("sentItems"));
    const sentMail = {
      id: `${Math.random() * (40 - 30) + 30}`,
      status: "READ",
      from: "aakashraina9@gmail.com",
      to: [`${to}`],
      subject: `${subject}`,
      body: `${body}`,
      date: "2/12/21",
    };

    if (cc) {
      sentMail.cc = [`${cc}`];
    }

    if (sentItems) {
      sentItems.push(sentMail);
      localStorage.setItem("sentItems", JSON.stringify(sentItems));
    } else {
      localStorage.setItem("sentItems", JSON.stringify([sentMail]));
    }

    if (context.activeMailbox === "Sent") {
      const { data: sentMails } = context;
      sentMails.push(sentMail);
      context.setdata(sentMails);
    }

    toggleComposeModal();
  };

  if (!showCompose) return null;

  return (
    <form
      class='flex flex-col absolute bottom-0 right-0 w-1/2 h-1/2 compose-container border bg-white .shadow-md mb-3 mr-3 rounded-lg'
      style={{ height: "50%" }}
      onSubmit={send}
    >
      <div class='flex justify-end items-center pr-2 border-b border-gray-300'>
        <span onClick={toggleComposeModal} class='cursor-pointer'>
          <AiFillCloseCircle />
        </span>
      </div>
      <div class='border-b border-gray-300'>
        <input class='h-full w-full pl-2' placeholder='To' name='to' />
      </div>
      <div class='border-b border-gray-300'>
        <input class='h-full w-full pl-2' placeholder='Cc' name='cc' />
      </div>
      <div class='border-b border-gray-300'>
        <input
          class='h-full w-full pl-2'
          placeholder='Subject'
          name='subject'
        />
      </div>
      <div class='border-b border-gray-300'>
        <textarea
          class='h-full w-full resize-none pl-2'
          name='body'
          placeholder='Enter your body here'
        />
      </div>
      <div class='flex justify-end items-center'>
        <button class='bg-blue-300 p-2 rounded' type='submit'>
          Send
        </button>
      </div>
    </form>
  );
}

export default ComposeModal;
