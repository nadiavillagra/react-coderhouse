import styles from "./navbar.module.scss";

const Navbar = ({ icono }) => {
  return (
    <div className={styles.container}>
      <p>Mujer</p>
      <p>Hombre</p>
      <p>Niños</p>
      <img src={icono} alt="" width="40" height="40" />
      <p>6</p>
    </div>
  );
};

export default Navbar;
