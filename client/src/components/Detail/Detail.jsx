import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loading_gif from "../../assets/loading.gif";
import style from "./detail.module.css";
import BackButton from "../BackButton/BackButton.jsx";

const Detail = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { VITE_SERVER_URL } = import.meta.env;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petition = await axios.get(`${VITE_SERVER_URL}/${id}`);

        setDetails(petition.data);
        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo datos: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div id={style.container_gif}>
          <img id={style.loading_gif} src={loading_gif} alt="loading_gif" />
        </div>
      ) : (
        <div id={style.main_container}>
          <BackButton />

          <div id={style.image_container}>
            <h1 id={style.title}>{details.volume}</h1>

            <img
              id={style.image}
              src={details.image ? details.image : null}
              alt={`${details.volume} image`}
            />
          </div>

          <div id={style.data_container}>
            <h2 id={style.subtitle}>{details.name}</h2>
            <h3 className={style.label}>{details.date}</h3>
            <p
              className={style.data}
            >{`Numero de comic: ${details.issue_number}`}</p>

            <div>
              {details.characters.length > 0 ? (
                <div className={style.groupDiv}>
                  <h3 className={style.label}>Personajes: </h3>
                  {details.characters.map((elem, index) => (
                    <li className={style.info} key={index}>
                      {elem}
                    </li>
                  ))}
                </div>
              ) : null}

              {details.authors.length > 0 ? (
                <div className={style.groupDiv}>
                  <h3 className={style.label}>Autores: </h3>
                  {details.authors.map((elem, index) => (
                    <li className={style.info} key={index}>
                      {elem}
                    </li>
                  ))}
                </div>
              ) : null}

              {details.locations.length > 0 ? (
                <div className={style.groupDiv}>
                  <h3 className={style.label}>Ubicaciones: </h3>
                  {details.locations.map((elem, index) => (
                    <li className={style.info} key={index}>
                      {elem}
                    </li>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
