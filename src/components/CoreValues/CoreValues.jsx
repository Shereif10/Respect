import { useEffect, useState } from "react";
import coreValue1 from "../../assets/flower-green.png";
import coreValue2 from "../../assets/heart-green.png";
import coreValue3 from "../../assets/horse-green.png";
import coreValue4 from "../../assets/men-green.png";
import coreValue5 from "../../assets/pharoh-green.png";

const initialCards = [
  { img: coreValue1, title: "Humility" },
  { img: coreValue2, title: "Love" },
  { img: coreValue3, title: "Strength" },
  { img: coreValue4, title: "Unity" },
  { img: coreValue5, title: "Heritage" },
];
export default function CoreValues() {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const first = newArr.shift(); // نشيل أول كارت
        newArr.push(first); // نحطه في الآخر
        return newArr;
      });
    }, 2500); // كل 2.5 ثانية

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="core-values">
      <div className="cards-row">
        {cards.map((card, index) => (
          <div key={index} className={`card ${index === 2 ? "active" : ""}`}>
            <img src={card.img} alt={card.title} />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
