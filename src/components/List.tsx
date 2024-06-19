import React, { useContext } from "react";
import ListContext from "../lib/providers/ListContext";

const List = () => {
  const listContext = useContext(ListContext);
  console.log("list", listContext);
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
