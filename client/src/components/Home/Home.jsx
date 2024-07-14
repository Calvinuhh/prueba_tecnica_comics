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
  const [filteredData, setFilteredData] = useState([]);
  const [view, setView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedView = localStorage.getItem("view");
    if (savedView) {
      setView(savedView);
    }

    const fetchData = async () => {
      try {
        const { data } = await axios.get(VITE_SERVER_URL);

        setData(data);
        setFilteredData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = data.filter((item) =>
      item.volume.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSetView = (newView) => {
    setView(newView);
    localStorage.setItem("view", newView);
  };

  return (
    <div>
      <NavBar
        view={view}
        setView={handleSetView}
        setSearchTerm={setSearchTerm}
      />

      {loading ? (
        <div id={style.container_gif}>
          <img id={style.loading_gif} src={loading_gif} alt="loading_gif" />
        </div>
      ) : view === "list" ? (
        <ListView data={filteredData} />
      ) : (
        <GridView data={filteredData} />
      )}
    </div>
  );
};

export default Home;
