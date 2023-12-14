import React, { useContext } from "react";
import ListContext from "../providers/ListContext";

const Header = () => {
  const listContext = useContext(ListContext);

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
