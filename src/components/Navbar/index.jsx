import ItemListContainer from "../ItemListContainer";
import styles from "./navbar.module.scss";
import CardWidget from "../CardWidget";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ItemListContainer greeting="Hola" />
      <p>Mujer</p>
      <p>Hombre</p>
      <p>Niños</p>
      <CardWidget icono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
    </div>
  );
};

export default Navbar;
