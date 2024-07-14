import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import loading_gif from "../../assets/loading.gif";
import style from "./detail.module.css";

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

  console.log(details);

  return (
    <div id={style.main_container}>
      {loading ? (
        <div id={style.container_gif}>
          <img id={style.loading_gif} src={loading_gif} alt="loading_gif" />
        </div>
      ) : (
        <div id={style.main_container}>
          <div id={style.image_container}>
            <img
              src={details.image ? details.image : null}
              alt={`${details.volume} image`}
            />
          </div>

          <div></div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Detail;
