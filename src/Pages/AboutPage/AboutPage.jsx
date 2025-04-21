import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div id="backGroundAbout">
      <div id="bodyAbout">
        <div id="containerAbout">
          <h1 id="titleAboutPage">Acerca de</h1>
          <h2 class="subtitleAboutPage">¿Qué es esto?</h2>
          <p class="paragraph">
            Este proyecto web ha sido desarrollado por estudiantes de Ingeniería
            de Sistemas como parte de la asignatura Programación web. El
            principal objetivo del trabajo es aplicar los conocimientos
            adquiridos en clase sobre consumo de APIs, manejo de datos y diseño
            web.
          </p>
          <h2 class="subtitleAboutPage">¿Quienes somos?</h2>
          <p class="paragraph">
            Somos Nicolas Alejandro Rodriguez Ortiz y Cesar Clavijo Claros
            estudiantes de la facultad de ingeniería de sistemas en la
            universidad de la Amazonia. Este poyecto nace como parte de nuestro
            proceso formativo, con el propósito de poner en practica los
            conocimientos adquiridos.
          </p>
          <h2 class="subtitleAboutPage">Cosas técnicas</h2>
          <p class="paragraph">
            Esta aplicación fue desarrollada utilizando React con componentes
            funcionales. Se usaron tecnologías como HTML5 y CSS, junto con
            Material MUI para lograr crear algunos componentes de la interfaz.
            La información de los personajes se obtiene desde la API pública de
            Dragon Ball usando fetch. Para filtrar los personajes por género, se
            aplicaron funciones de orden superior como filter. También se
            implementaron los hooks useState y useEffect para gestionar el
            estado de la aplicación y la carga de datos.{" "}
          </p>
          <h2 class="subtitleAboutPage">Derechos de autor</h2>
          <p class="paragraph">
            Los datos e imágenes de los personajes pertenecen a sus respectivos
            creadores y son proporcionados por la API pública
            https://dragonball-api.com. Esta aplicación fue desarrollada
            exclusivamente con fines educativos como parte del curso de
            Programación Web Ingeniería de Sistemas 2025-I, sin intención
            comercial ni de distribución.
          </p>
          <div id="animationAboutPage">
            <img
              id="animationAbout1"
              src="https://media.tenor.com/flOZZayrrSYAAAAi/kakarot.gif"
              alt="gokuAnimation1"
            />
            <img id="animationAbout2"
              src="https://i.imgur.com/4mcKOLg.gif"
              alt="gokuAnimation2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
