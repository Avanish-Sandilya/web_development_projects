import img1 from "../img/A-10_Thunderbolt.jpg";
import img2 from "../img/Dassult_Rafale.jpg";
import img3 from "../img/Dassult-Mirage_2000.jpg";
import img4 from "../img/Eurofighter_Typhoon.jpg";
import img5 from "../img/F-14_Tomcat.jpg";
import img6 from "../img/F-22_Raptor.jpg";
import img7 from "../img/F-35A.jpg";
import img8 from "../img/FA-18C.jpg";
import img9 from "../img/HAL_Tejas.jpg";
import img10 from "../img/Sepacat_Jaguar.jpg";
import img11 from "../img/Su-57.jpg";
import img12 from "../img/Sukhoi_Su-30.jpg";
import { useState } from "react";

export default function Body({ score, setScore, highScore, setHighScore }) {
  const [clicked, setClicked] = useState([]);
  const [images, setImages] = useState([
    { src: img1, name: "A-10 Thunderbolt" },
    { src: img2, name: "Dassault Rafale" },
    { src: img3, name: "Dassault Mirage 2000" },
    { src: img4, name: "Eurofighter Typhoon" },
    { src: img5, name: "F-14 Tomcat" },
    { src: img6, name: "F-22 Raptor" },
    { src: img7, name: "F-35A" },
    { src: img8, name: "FA-18C" },
    { src: img9, name: "HAL Tejas" },
    { src: img10, name: "SEPECAT Jaguar" },
    { src: img11, name: "Sukhoi Su-57" },
    { src: img12, name: "Sukhoi Su-30" },
  ]);

  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleClick = (clickValue) => {
    const shuffled = shuffleArray(images);
    setImages(shuffled);

    if (clicked.includes(clickValue)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClicked([]);
    } else {
      setClicked((prev) => [...prev, clickValue]);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} style={{ textAlign: "center", margin: "10px" }} class="image">
          <img
            src={img.src}
            alt={img.name}
            onClick={() => handleClick(img.src)}
            style={{
              width: "150px",
              cursor: "pointer",
              display: "block",
              margin: "0 auto",
            }}
          />
          <p style={{ marginTop: "5px", fontWeight: "500" }}>{img.name}</p>
        </div>
      ))}
    </div>
  );
}
