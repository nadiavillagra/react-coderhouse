import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar icono="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png" />
      <h1>My App</h1>
      {/* <ItemListContainer greeting="Hola" /> */}
      <Button texto="Home" />
      <Button texto="About" />
      <Button texto="Contact" />
    </div>
  );
}

export default App;
