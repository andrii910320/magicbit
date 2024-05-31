import React, { FC } from "react";
import { IFindUserRes } from "../../constants/interface";
import "./index.css";

const ShowFoundUser: FC<IFindUserRes> = ({ email, number }) => {
  return (
    <div className="container">
      <p>User found with:</p>
      <p>email: {email}</p>
      <p>number: {number}</p>
    </div>
  );
};

export default ShowFoundUser;
