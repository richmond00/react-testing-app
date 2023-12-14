import Header from "./components/Header";
import List from "./components/List";
import ListContext from "./providers/ListContext";

function App() {
  const tempList = ["hello 1", "hello 2", "hello 3"];

  return (
    <div className="App">
      <ListContext.Provider value={tempList}>
        <Header />
        <List />
      </ListContext.Provider>
    </div>
  );
}

export default App;
