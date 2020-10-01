import React, { useContext } from "react";
import { chatContext } from "../Context";

export const ChatTop = () => {
  const { users, thisUser, setUsers } = useContext(chatContext);

  const icon = {
    position: "absolute",
    top: "40%",
    right: "1rem",
    fontSize: "18px",
    color: "gray",
    cursor: "pointer",
  };

  const setLike = () => {
    setUsers(
      users.map((item, index) => ({
        ...item,
        like: index === thisUser ? isLike(index) : test(index)
      }))
    );
    function isLike(i) {
      if(users[i].like) return false;
      else return true;
    }
    function test(i) {
      if(users[i].like) return true;
      else return false;
    }
  };

  if (users.length) {
    return (
      <div
        className="container p-3 d-flex align-items-center"
        style={{ backgroundColor: "#f9f9f9", position: "relative" }}
      >
        <img
          src={users[thisUser].picture.medium}
          alt="#1"
          width="50px"
          height="50px"
          className="img-fluid rounded-pill"
          style={{ border: "3px solid green" }}
        />
        <div className=" ml-3">
          <div
            style={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1" }}
          >
            Chat with {users[thisUser].name.first} {users[thisUser].name.last}
          </div>
          <div style={{ fontSize: "12px" }}>
            already {users[thisUser].message.length * 2} messages
          </div>
        </div>
        <i
          class="fas fa-star"
          style={users[thisUser].like ? { ...icon, color: "gold" } : icon}
          onClick={() => setLike()}
        />
      </div>
    );
  } else return null;
};
