import {images} from "../assets/json/data.json";

class App {
  constructor() {
    //Container 
    const containerCard = document.createElement("div");
    containerCard.className = "div";
    document.body.appendChild(containerCard);

    //Slider-div
    const slider = document.createElement("div");
    slider.className = "slider"
    containerCard.appendChild(slider)

    images.forEach((value, index)=>{
      //Img-element
      const img = document.createElement("img");
      img.setAttribute ("src", `${value.img}`)
      slider.appendChild(img);
    })

    //Text-element
    const textCard = document.createElement("div");
    textCard.id = "card__text";
    containerCard.appendChild(textCard);

    const titleCard = document.createElement("h1");
    titleCard.id = "card__title";
    titleCard.innerHTML = images.title;
    textCard.appendChild(titleCard);


    //Buttons
    const buttonBackCard = document.createElement("button");
    buttonBackCard.id = "card__button--back";
    textCard.appendChild(buttonBackCard)

    const buttonForwardCard = document.createElement("button");
    buttonForwardCard.id = "card__button--forward";
    textCard.appendChild(buttonForwardCard)
    
    
    
  }
}
export default App;
