import { useSelector } from "react-redux";
import { IState } from "./store";
import React from "react";
import "./style.css";

export const List: React.FC = () => {
  const listOfUsers = useSelector((state: IState) => {
    console.log(state);
    return state?.listOfUsers;
  });

  React.useEffect(() => {
    console.log(listOfUsers);
  }, [listOfUsers]);

  return (
    <div className="wrapper-list">
      <h3 className="header">List of users</h3>
      {listOfUsers?.map((item) => (
        <span>
          User: <br />
          {item.firstName} {item.lastName} {item.email}
          <br />
        </span>
      ))}
    </div>
  );
};
