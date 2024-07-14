import style from "./navbar.module.css";

const NavBar = ({ view, setView }) => {
  return (
    <nav className={style.container}>
      <label>
        Vista:
        <select value={view} onChange={(event) => setView(event.target.value)}>
          <option value="list">Lista</option>
          <option value="grid">Grilla</option>
        </select>
      </label>
    </nav>
  );
};

export default NavBar;
