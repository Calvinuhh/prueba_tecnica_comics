import { useRef, useEffect } from "react";

import style from "./listView.module.css";

const ListView = ({ data }) => {
  const containersRef = useRef([]);

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

    containersRef.current.forEach((container) => {
      observer.observe(container);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id={style.main_container}>
      {data.map((elem, index) => (
        <div
          ref={(el) => (containersRef.current[index] = el)}
          className={`${style.container} ${style.fade_in}`}
          key={elem.id}
        >
          <img
            className={style.image}
            src={elem.image}
            alt={`${elem.volume} image`}
          />
          <div className={style.image_overlay}>Ver detalles</div>
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
