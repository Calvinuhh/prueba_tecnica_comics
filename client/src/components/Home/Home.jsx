import { useEffect, useState } from "react";
import NavBar from "../Navbar/Navbar";
import axios from "axios";
import ListView from "../Cards/ListView";
import GridView from "../Cards/GridView";
import style from "./home.module.css";
import loading_gif from "../../assets/loading.gif";

const { VITE_SERVER_URL } = import.meta.env;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [view, setView] = useState("list");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(VITE_SERVER_URL);

        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar view={view} setView={setView} />

      {loading ? (
        <div id={style.container_gif}>
          <img id={style.loading_gif} src={loading_gif} alt="loading_gif" />
        </div>
      ) : view === "list" ? (
        <ListView data={data} />
      ) : (
        <GridView data={data} />
      )}
    </div>
  );
};

export default Home;
