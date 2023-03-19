import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola" />
      <h1>My App</h1>
    </div>
  );
}

export default App;
