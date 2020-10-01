import React from "react";
import { ChatFooter } from "./ChatFooter";
import { ChatMain } from "./ChatMain";
import { ChatTop } from "./ChatTop";

export const Chat = () => {
  return (
    <div>
      <ChatTop />
      <ChatMain />
      <ChatFooter />
    </div>
  );
};
