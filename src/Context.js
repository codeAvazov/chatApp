import React, { createContext, useEffect, useState } from "react";

export const chatContext = createContext();

export const Context = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [queryUser, setQueryUser] = useState("");
  const [thisUser, setThisUser] = useState(0);
  const [messag, setMessag] = useState("");

  let filter = users;
  if (queryUser !== "") {
    filter = users.filter((user) => {
      let full = user.name.first + user.name.last;
      return full.toLowerCase().includes(queryUser);
    });
  }

  return (
    <chatContext.Provider
      value={{
        users: filter,
        setUsers,
        queryUser,
        setQueryUser,
        thisUser,
        setThisUser,
        messag,
        setMessag,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
