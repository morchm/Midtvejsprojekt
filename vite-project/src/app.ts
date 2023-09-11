import { content } from "../assets/json/data.json";

class App {
  currIndex: number = 0;
  prevIndex: number = 1;
  constructor() {
    //Main container
    const containerCard = document.createElement("div");
    containerCard.className = "div";
    document.body.appendChild(containerCard);

    //Slider-div
    const slider = document.createElement("div");
    slider.className = "slider";
    containerCard.appendChild(slider);

    const imgContainer = document.createElement("div");
    imgContainer.className = "img_container";
    slider.appendChild(imgContainer);

    //knapper
    const dotContainer = document.createElement("div");
    dotContainer.className = "dotContainer";
    slider.appendChild(dotContainer);

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

    const imgElements = content.map((value, index) => {
      //Img-element
      const img = document.createElement("img");
      img.classList.add("image-slider");
      // img.style.backgroundImage = `url(${value.img})`;
      img.src = value.img;
      imgContainer.appendChild(img);

      const dot = document.createElement("span");
      dot.className = "dots";
      dot.setAttribute("data-index", `${index}`);
      dotContainer.appendChild(dot);
      dot.addEventListener("click", () => {
        // would have prefered to used custom event however type script is extremely hard to comprehend right now
        if (
          dot.dataset.index == undefined ||
          +dot.dataset.index == this.currIndex
        )
          return;

        var nextFrom, prevTo;

        if (+dot.dataset.index > this.currIndex) {
          prevTo = -100;
          nextFrom = 100;
        } else {
          prevTo = 100;
          nextFrom = -100;
        }

        imgElements[this.prevIndex].removeAttribute("style");
        this.prevIndex = this.currIndex;
        // add animation
        // tweak animation params
        imgElements[this.prevIndex].style.setProperty("--to", prevTo + "%");
        imgElements[this.prevIndex].style.animationName = "prev";
        this.currIndex = +dot.dataset.index;
        // add animation
        // tweak animation params
        imgElements[this.currIndex].style.setProperty("--from", nextFrom + "%");
        imgElements[this.currIndex].style.animationName = "next";

        titleCard.innerHTML = content[this.currIndex].title;
        textCard.innerHTML = content[this.currIndex].text;
      });

      return img;
    });

    //Så vi starter med at have et billede på hjemmesiden.
    imgElements[this.currIndex].style.left = 0 + "%";
    titleCard.innerHTML = content[this.currIndex].title;
    textCard.innerHTML = content[this.currIndex].text;
  } //END constructor
} //END class
export default App;
