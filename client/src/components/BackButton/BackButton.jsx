import { Link } from "react-router-dom";
import style from "./backButton.module.css";

const BackButton = () => {
  return (
    <Link id={style.button_container} to="/home">
      <button id={style.back_btn}>⬅ Volver</button>
    </Link>
  );
};

export default BackButton;
