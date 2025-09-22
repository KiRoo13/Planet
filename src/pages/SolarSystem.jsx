import { planetData } from "../utils/Constans/planetData";
import BasicButton from "../components/UI/BasicButton";
import { useState } from "react";

function SolarSystem() {
  const [namePlanet, setNamePlanet] = useState("Солнце");
  const selectedPlanet = planetData.find(
    (planet) => planet.name === namePlanet
  );

  const togglePlanet = (name) => {
    setNamePlanet(name);
  };

  return (
    <section className="section-solar">
      <div className="conteiner">
        <div className="solar-content">
          <div className="solar-content-head">
            <h3>{selectedPlanet.name}</h3>
            <img
              className="solar-content-head__img"
              src={selectedPlanet.img}
              alt={selectedPlanet.name}
            />
          </div>
          <div className="solar-content-body">
            <div className="solar-content-body-row">
              <div className="solar-content-body-col">Название:</div>
              <div className="solar-content-body-col">
                {selectedPlanet.name}
              </div>
            </div>
            <div className="solar-content-body-row">
              <div className="solar-content-body-col">Цвет:</div>
              <div
                className="solar-content-body-col"
                style={{
                  backgroundColor: selectedPlanet.color,
                  height: "15px",
                }}
              ></div>
            </div>
            {selectedPlanet.info.type && (
              <div className="solar-content-body-row">
                <div className="solar-content-body-col">Тип:</div>
                <div className="solar-content-body-col">
                  {selectedPlanet.info.type}
                </div>
              </div>
            )}
            {selectedPlanet.info.distance && (
              <div className="solar-content-body-row">
                <div className="solar-content-body-col">Дистанция:</div>
                <div className="solar-content-body-col">
                  {selectedPlanet.info.distance}
                </div>
              </div>
            )}
            <div className="solar-content-body-row">
              <div className="solar-content-body-col">Диаметор:</div>
              <div className="solar-content-body-col">
                {selectedPlanet.info.diameter}
              </div>
            </div>
            {selectedPlanet.info.mass && (
              <div className="solar-content-body-row">
                <div className="solar-content-body-col">Масса:</div>
                <div className="solar-content-body-col">
                  {selectedPlanet.info.mass}
                </div>
              </div>
            )}
            {selectedPlanet.info.orbitPeriod && (
              <div className="solar-content-body-row">
                <div className="solar-content-body-col">
                  Оборот вокруг солнца (1 год):
                </div>
                <div className="solar-content-body-col">
                  {selectedPlanet.info.orbitPeriod}
                </div>
              </div>
            )}
            <div className="solar-content-body-row">
              <div className="solar-content-body-col">Темпиратура:</div>
              <div className="solar-content-body-col">
                {selectedPlanet.info.temperature}
              </div>
            </div>
            <div className="solar-content-body-row">
              <div className="solar-content-body-col">Интересный факт:</div>
              <div className="solar-content-body-col">
                {selectedPlanet.info.fact}
              </div>
            </div>
          </div>
          <div className="solar-content-footer">
            {planetData.map((planet) => (
              <BasicButton
                key={planet.name}
                text={planet.name}
                handleClick={() => togglePlanet(planet.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarSystem;
