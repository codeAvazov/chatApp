import React, { useContext } from "react";
import { chatContext } from "../Context";
import "./ChatFooter.css";

export const ChatFooter = () => {
  const { messag, setMessag, setUsers, users, thisUser } = useContext(
    chatContext
  );

  const addMessage = () => {
    setUsers(
      users.map((item, index) => ({
        ...item,
        message: index === thisUser ? addMes(item) : steteMes(item),
      }))
    );
    function addMes(item) {
      return [...item.message, messag];
    }
    function steteMes(item) {
      return [...item.message];
    }
    setMessag('');
  };

  return (
    <div
      className="my-1 p-4 d-flex flex-column"
      style={{
        backgroundColor: "#f9f9f9",
        height: "23vh",
      }}
    >
      <div>
        <textarea
          className="form-control"
          placeholder="Type your message"
          rows="3"
          value={messag}
          onChange={(e) => setMessag(e.target.value)}
        />
      </div>
      <div className="send" onClick={() => addMessage()}>
        Send
      </div>
    </div>
  );
};
