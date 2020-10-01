import React, { useContext } from "react";
import "./SearchUser.css";
import { chatContext } from "../Context";

export const SearchUser = () => {
  const { queryUser, setQueryUser, setUsers, users } = useContext(chatContext);
  const handleSearch = (e) => {
    setQueryUser(e.target.value);
    let filtered = [...users];
    filtered[2] = {...filtered[2]};
    
  };

  return (
    <div className="px-3">
      <input
        type="text"
        placeholder="Search..."
        className="form-control my-3"
        value={queryUser}
        onChange={handleSearch}
      />
      <i class="fas fa-search" />
    </div>
  );
};
