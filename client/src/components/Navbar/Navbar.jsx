import style from "./navbar.module.css";

const NavBar = ({ view, setView, setSearchTerm }) => {
  return (
    <nav className={style.container}>
      <div id={style.container_options}>
        <label id={style.label}>Vista:</label>
        <select
          id={style.select}
          value={view}
          onChange={(event) => setView(event.target.value)}
        >
          <option className={style.options} value="list">
            Lista
          </option>
          <option className={style.options} value="grid">
            Grilla
          </option>
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
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
