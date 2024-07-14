import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./listView.module.css";

const ListView = ({ data }) => {
  const containersRef = useRef([]);

  const getLastUrlParam = (url) => {
    const regex = /-(\d+)\/$/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.fade_in_visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    containersRef.current
      .filter((container) => container !== null)
      .forEach((container) => {
        observer.observe(container);
      });

    return () => observer.disconnect();
  }, [data]);

  useEffect(() => {
    containersRef.current = [];
  }, [data]);

  return (
    <div id={style.main_container}>
      {data.map((elem, index) => (
        <div
          ref={(el) => (containersRef.current[index] = el)}
          className={`${style.container} ${style.fade_in}`}
          key={elem.id}
        >
          <Link
            to={{
              pathname: `/detail/${getLastUrlParam(elem.detail_url)}`,
            }}
          >
            <img
              className={style.image}
              src={elem.image}
              alt={`${elem.volume} image`}
            />
          </Link>

          <Link
            to={{
              pathname: `/detail/${getLastUrlParam(elem.detail_url)}`,
            }}
            className={style.image_overlay}
          >
            <div>Ver detalles</div>
          </Link>
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
