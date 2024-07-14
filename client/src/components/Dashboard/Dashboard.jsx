import style from "./dashboard.module.css";
import comics_image from "../../assets/a31277f463eee52e717e84ac59b0f00b.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={style.container}>
      <img id={style.image} src={comics_image} alt="comics_image" />

      <h1 id={style.title}>Consulta los detalles de los comics!</h1>

      <Link to="/home">
        <button id={style.next_button}>Siguiente ➤</button>
      </Link>
    </div>
  );
};

export default Dashboard;
