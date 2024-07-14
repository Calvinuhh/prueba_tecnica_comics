import style from "./gridView.module.css";
import { Link } from "react-router-dom";

const GridView = ({ data }) => {
  
  const getLastUrlParam = (url) => {
    const regex = /-(\d+)\/$/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  };

  return (
    <div id={style.main_container}>
      <table id={style.table}>
        <thead id={style.head}>
          <tr id={style.table_row}>
            <th className={style.table_head}>Volumen</th>
            <th className={style.table_head}>Nombre</th>
            <th className={style.table_head}>Fecha de salida</th>
            <th className={style.table_head}>Numero de Comic</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem.id}>
              <td className={`${style.table_data} ${style.volume}`}>
                <Link
                  to={{
                    pathname: `/detail/${getLastUrlParam(elem.detail_url)}`,
                  }}
                >
                  {elem.volume}
                </Link>
              </td>
              <td className={style.table_data}>{elem.name}</td>
              <td className={style.table_data}>{elem.date}</td>
              <td className={style.table_data}>{elem.issue_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridView;
