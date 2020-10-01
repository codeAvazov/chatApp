import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { chatContext } from "../Context";
import { SearchUser } from "./SearchUser";

export const UserList = () => {
  const { users, setUsers, setThisUser } = useContext(chatContext);

  useEffect(() => {
    let data = localStorage.getItem('list');
    if(data) {
      setUsers(JSON.parse(data))
    } else {
      Axios.get("https://randomuser.me/api/?results=15")
      .then((response) => {
        setUsers(
          response.data.results.map((item) => ({
            ...item,
            like: false,
            message: ["Hi", "Hello", "How are you", "Okay"],
          }))
        );
      })
      .catch((e) => console.log(e));
    }
    
  }, []);

  useEffect(() => {
    if (users.length) localStorage.setItem("list", JSON.stringify(users));
  }, [users]);

  const setUser = (index) => {
    setThisUser(index);
  };

  return (
    <div>
      <SearchUser />
      <ul
        className="list-group list-unstyled text-white"
        style={{ overflowY: "scroll", height: "85vh" }}
      >
        {users.map((user, index) => (
          <li
            className="list-group-item bg-transparent border-0 my-1"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => setUser(index)}
          >
            <div className="d-flex align-items-center">
              <img
                src={user.picture.medium}
                alt="#1"
                width="50px"
                height="50px"
                className="img-fluid rounded-pill"
                style={{ border: "3px solid grey" }}
              />
              <div className=" ml-3">
                <div style={{ fontSize: "14px" }}>
                  {user.name.first} {user.name.last}
                </div>
                <div style={{ fontSize: "12px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "5px",
                      height: "5px",
                      marginRight: "5px",
                      borderRadius: "50%",
                    }}
                    className={
                      user.gender === "male" ? "bg-success" : "bg-danger"
                    }
                  ></span>
                  {user.gender === "male" ? "online" : "offline"}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
