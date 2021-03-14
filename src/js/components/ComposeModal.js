import React from "react";
import "css/ComposeModal.styl";

function ComposeModal({ showCompose }) {
  if (!showCompose) return null;

  return (
    <div
      class='w-1/2 h-1/2 compose-container border bg-white .shadow-md mb-3 mr-3 rounded-lg'
      style={{ height: "50%" }}
    >
      Compose
    </div>
  );
}

export default ComposeModal;
