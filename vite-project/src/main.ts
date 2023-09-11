import "./styles/style.scss";
import Slider from "./slider";
import {content}  from "../assets/json/data.json"

(function () {
  
  document.body.appendChild(new Slider(content).HTMLElement);

})();
