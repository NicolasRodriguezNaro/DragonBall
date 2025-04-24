import React from "react";
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <h4 id="footerTitle">DragonBall Api</h4>
      <ul id="containerTextFooter">
        <p class="textList">Characters:58</p>
        <p class="textList">Transformations:49</p>
        <p class="textList">Planets:20</p>
      </ul>
      <div class="logosFooter">
        <img
          id="logoFooter"
          src="https://www.uniamazonia.edu.co/inicio/images/banners/2020/UA-01.png"
          alt="Universidad de la amazonia"
        />
        <img
          id="logoFooter"
          src="https://vectorseek.com/wp-content/uploads/2023/09/Republica-De-Colombia-Logo-Vector.svg-.png"
          alt="Republica de Colombia"
        />
      </div>
      <a id="linkIcon" href="https://github.com/NicolasRodriguezNaro/DragonBall"><GitHubIcon id="iconFooter"></GitHubIcon></a>

      <a id="linkAuthors" href="https://github.com/NicolasRodriguezNaro"><p id="authors">by Nicolas Alejandro Rodriguez Ortiz</p></a>
      <p>AND</p>
      <a id="linkAuthors" href="https://github.com/cesarGH3"><p id="authors">Cesar Clavijo Claros</p></a>
    </footer>
  );
};

export default Footer;