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
      img.classList.add("image-slider", "fade");
      img.src = value.img;
      slider.appendChild(img);
      return img;
    });

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

    //Skift af billeder
    this.currIndex = 0;
    this.prevIndex = 1;

    // containerCard.addEventListener("click", () => {
    // //Siger at prevIndex er hvad currIndex er lige nu.
    // this.prevIndex = this.currIndex;
    // //Siger at currIndex nu er +1
    // this.currIndex++;

    // //Får fat på det resterende af currIndex / 5
    // //Dette gør at billeder looper igennem
    // this.currIndex = this.currIndex % imgElements.length;

    // //Giver det loop, hvor alle bileder bliver lavet, en ny style når der trykkes
    // imgElements[this.currIndex].style.left = 0 + "%";
    // changeText(this.currIndex);
    // imgElements[this.prevIndex].style.left = 100 + "%";

    //   console.log(this);
    // });

    //Skiftning af billeder med tastaturknapper
    // document.addEventListener("keyup", () => {
    //   this.prevIndex = this.currIndex;
    //   this.currIndex--;

    //   if (this.currIndex < 0) this.currIndex = imgElements.length - 1;

    //   imgElements[this.currIndex].style.left = 0 + "%";
    //   imgElements[this.prevIndex].style.left = 100 + "%";
    // });
    
    //Skiftning af tekst
    changeText(this.currIndex);
    function changeText(i: number) {
      titleCard.innerHTML = images[i].title;
      textCard.innerHTML = images[i].text;
    }

    //knapper
    const dotContainer = document.createElement("div");
    dotContainer.id = "dotContainer";
    containerCard.appendChild(dotContainer);

    imgElements.forEach(() => {
      const dot = document.createElement("span");
      dot.className = "dots";

      dotContainer.appendChild(dot);

      dot.addEventListener("click", () => {
        this.prevIndex = this.currIndex;
        this.currIndex++;
        this.currIndex = this.currIndex % imgElements.length;
        imgElements[this.currIndex].style.left = 0 + "%";
        imgElements[this.prevIndex].style.left = 100 + "%";
      });
    });
  } //END constructor
} //END class
export default App;
