import React, { useContext } from "react";
import ListContext from "../providers/ListContext";

const List = () => {
  const listContext = useContext(ListContext);
  return (
    <div>
      <h3>List</h3>
      <ul>
        {listContext.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
