import style from "./gridView.module.css";

const GridView = ({ data }) => {
  return (
    <div id={style.main_container}>
      <table>
        <thead>
          <tr>
            <th>hola</th>
            <th>hola</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default GridView;
