import React from "react";
import { Link } from "@reach/router";
import { aTag } from "./buttonStyle";

export default function ButtonComponent(props) {
  return (
    <Link to="/another?id=11">
      <p className={aTag}>go to another</p>
    </Link>
  );
}
