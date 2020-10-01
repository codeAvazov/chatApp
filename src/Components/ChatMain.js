import React, { useContext } from "react";
import "./ChatMain.css";
import { chatContext } from "../Context";

export const ChatMain = () => {
  const { users, thisUser } = useContext(chatContext);
  let date = new Date();
  if (users.length) {
    return (
      <div
        className="my-1 p-4 d-flex"
        style={{
          backgroundColor: "#f9f9f9",
          height: "60vh",
          overflowY: "scroll",
        }}
      >
        <div className="w-100">
          {users[thisUser].message.map((item, index) => (
            <div key={index} className="message">
              <div>
                <div>
                  <span className="circle"></span>
                  <span>
                    {users[thisUser].name.first}{" "}
                    {date.getHours() + ":" + date.getMinutes() + " , Today"}
                  </span>
                </div>
                <div className="text">{item}</div>
              </div>
              <div className="me">
                <div>
                  <span className="circle"></span>
                  <span>
                    {"Me"}{" "}
                    {date.getHours() + ":" + date.getMinutes() + " , Today"}
                  </span>
                </div>
                <div className="text">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else return null;
};
