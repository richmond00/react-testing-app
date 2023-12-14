import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import ListContext from "../providers/ListContext";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("Header", () => {
  test("should display nav menu", () => {
    (useContext as jest.Mock).mockReturnValue(["a", "b"]);
    render(
      // <ListContext.Provider value={["1", "2"]}>
      <Header />
      // </ListContext.Provider>
    );
    screen.debug();
  });
});
