import React, { useContext } from "react";
import ListContext from "../providers/ListContext";

const Header = () => {
  const listContext = useContext(ListContext);
  console.log("header", listContext);
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
          {listContext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
