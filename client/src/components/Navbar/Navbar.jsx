import style from "./navbar.module.css";

const NavBar = ({ view, setView }) => {
  return (
    <nav className={style.container}>
      <div>
        <label id={style.label}>Vista:</label>
        <select
          id={style.select}
          value={view}
          onChange={(event) => setView(event.target.value)}
        >
          <option value="list">Lista</option>
          <option value="grid">Grilla</option>
        </select>
      </div>

      <div>
        <label id={style.label_search} htmlFor="input">
          Buscar:
        </label>

        <input
          type="text"
          name="volume"
          placeholder="volumen..."
          id={style.input}
        />
      </div>
    </nav>
  );
};

export default NavBar;
