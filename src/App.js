import React from "react";
import { Chat } from "./Components/Chat";
import { UserList } from "./Components/UserList";
import { Context } from "./Context";

export const App = () => {
  return (
      <Context>
        <div className="container pt-3" style={{ height: "100vh" }}>
          <div className="row">
            <div className="col-sm-12 col-lg-3 bg-dark px-2">
              <UserList/>
            </div>
            <div className="col-sm-12 col-lg-9 p-0 bg-white">
              <Chat />
            </div> 
          </div>
        </div>
      </Context>
  );
};
