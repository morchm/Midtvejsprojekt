import { images } from "../assets/json/data.json";

class App {
  currIndex: number;
  prevIndex: number;
  constructor() {
    //Container
    const containerCard = document.createElement("div");
    containerCard.className = "div";
    document.body.appendChild(containerCard);

    //Slider-div
    const slider = document.createElement("div");
    slider.className = "slider";
    containerCard.appendChild(slider);

    const imgElements = images.map((value) => {
      //Img-element
      const img = document.createElement("img");
      img.src = value.img;
      slider.appendChild(img);
      return img;
    });

    // const textContainer = document.createElement("div");
    // textCard.id = "card__text";
    // containerCard.appendChild(textCard);

    //Text-element
    const textContainer = document.createElement("div");
    textContainer.id = "card__text_container";
    containerCard.appendChild(textContainer);

    const titleCard = document.createElement("h1");
    titleCard.id = "card__title";
    textContainer.appendChild(titleCard);

    const textCard = document.createElement("p");
    textCard.id = "card__text";
    textContainer.appendChild(textCard);

    this.currIndex = 0;
    this.prevIndex = 1;

    containerCard.addEventListener("click", () => {
      this.prevIndex = this.currIndex;
      this.currIndex++;

      this.currIndex = this.currIndex % imgElements.length;

      imgElements[this.currIndex].style.left = 0 + "%";
      changeText(this.currIndex);
      imgElements[this.prevIndex].style.left = 100 + "%";

      console.log(this);
    });
    document.addEventListener("keyup", () => {
      this.prevIndex = this.currIndex;
      this.currIndex--;

      if (this.currIndex < 0) this.currIndex = imgElements.length - 1;

      imgElements[this.currIndex].style.left = 0 + "%";
      changeText(this.currIndex);
      imgElements[this.prevIndex].style.left = 100 + "%";

      console.log(this);
    });

    function changeText(i: number) {
      titleCard.innerHTML = images[i].title;
      textCard.innerHTML = images[i].text;
    }
  }
}
export default App;
