import style from "./listView.module.css";

const ListView = ({ data }) => {
  return (
    <div id={style.main_container}>
      {data.map((elem) => (
        <div className={style.container} key={elem.id}>
          <img
            className={style.image}
            src={elem.image}
            alt={`${elem.volume} image`}
          />
          <h1 className={style.volume}>{elem.volume}</h1>
          <h2 className={style.name}>
            {elem.name ? `Nombre: ${elem.name}` : null}
          </h2>
          <h3 className={style.date}>{`Fecha de salida: ${elem.date}`}</h3>
          <h3
            className={style.comic_number}
          >{`Comic numero: ${elem.issue_number}`}</h3>
        </div>
      ))}
    </div>
  );
};

export default ListView;
