import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import List from "./List";
import ListContext from "../lib/providers/ListContext";

describe("List", () => {
  test("should display list", () => {
    render(<List />);
    screen.debug();
  });
});
