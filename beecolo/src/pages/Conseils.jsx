import React, { useState } from 'react';
import'./Conseils.css';
import background from '../components/assets/flowersBee.jpg';

export default function Conseils() {
  const items = [
    { name: "Ordinateur", value: false, message: "Il vaut mieux choisir le mode veille plutôt que l'économiseur d'écran qui prend soin de votre écran mais ne réduit pas la consommation électrique." },
    { name: "TV", value: false, message: "La consommation électrique d'une TV est proportionnelle à la taille de son écran, pensez-y au moment de vous équiper !" },
    { name: "Veilles", value: false, message: "Si vous branchez vos appareils électriques sur des multiprises avec interrupteur ,cela permet de débrancher en un seul geste tous les appareils pour la nuit ou lorsque vous quittez la maison." },
    { name: "Éclairages", value: false, message: "Les ampoules LED permettent de faire jusque 80% d'économie. De plus aujourd'hui elles sont moins chères, de bonne qualité et répondent à quasiment tous les besoins d'éclairage." },
    { name: "Réfrigérateur", value: false, message: "Un réfrigérateur de classe A+++ consomme moitié moins d'énergie qu'un appareil de classe A+. Bien que cela soit paradoxal, avec l'évolution des modèles la classe A+ est la moins efficace sur le marché concernant les appareil de froid comme les lave-linge et lave-vaisselle." },
    { name: "Four", value: false, message: "Oublions le préchauffage, ce n'est indispensable que pour les cuissons dites « saisies ». Profitons également de la chaleur résiduelle pour finir la cuisson en éteignant le four une dizaine de minutes avant la fin." },
    { name: "Lave-Linge", value: false, message: "Un lavage quotidien du linge à 30° ou 20° est suffisant , selon les études, pour l'hygiène et la qualité de lavage, ainsi vous préservez votre linge et faites de belles économies !" },
    { name: "Essorage", value: false, message: "Vous gagnerez du temps et de l'argent en choisissant une bonne classe d'essorage pour votre machine à laver. L'essorage dans le tambour du lave-linge et 100 fois plus économe en énergie que le séchage dans le sèche-linge!" },
    { name: "Sèche-linge", value: false, message: "C'est un des appareils les plus gourmands en électricité, si vous devez vous équipez, privilégiez un sèche-linge A+++ qui vous fera faire 70% d'économie par rapport à un appareil de classe B. En essayant dès que possible de privilégier le séchage à l'air libre." },
    { name: "Lavage", value: false, message: "Attention aux cycles courts, que ce soit pour les lave-linge ou lave-vaisselle ! On les croit plus économes alors qu’ils consomment bien plus que les cycles « éco ». Explication? Pour mieux éliminer les saletés, on peut jouer sur la qualité du détergent, la température, l’action mécanique de frottement et/ou rallonger le temps de trempage. C’est cette dernière action qui permet aux cycles longs d’être plus économes en énergie." }
  ];

  const [showItems, setShowItems] = useState(items);

  const handleShow = (item) => {
    setShowItems(
      showItems.map((obj) => {
        if (obj.name === item.name) {
          return { ...obj, value: !item.value };
        } else return obj;
      })
    );
  };

  return (
    <div className="conseilsBoxes"
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1 className="conseilsTitle">Nos conseils pour consommer moins au quotidien</h1>
      <div className="conseilsHover">
        {showItems.map((item) => {
          return (
            <div key={item.name}>
              <h2 className="conseilsItems" onClick={() => handleShow(item)}>{item.name}</h2>
              <p className={`${item.value ? "show" : "hide"}`}>{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
