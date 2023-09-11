export default class Slider {
  HTMLElement: HTMLElement = document.createElement("div");
  currIndex: number = 0;
  prevIndex: number = 1;
  constructor(data: Array<{img: string, title:string, text:string}>) {
    //Main container
    this.HTMLElement.className = "div";

    //Slider-div
    const slider = document.createElement("div");
    slider.className = "slider";
    this.HTMLElement.appendChild(slider);

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
    this.HTMLElement.appendChild(textContainer);

    const titleCard = document.createElement("h1");
    titleCard.id = "card__title";
    textContainer.appendChild(titleCard);

    const textCard = document.createElement("p");
    textCard.id = "card__text";
    textContainer.appendChild(textCard);

    const imgElements = data.map((value, index) => {
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

        titleCard.innerHTML = data[this.currIndex].title;
        textCard.innerHTML = data[this.currIndex].text;
      });

      return img;
    });

    //Så vi starter med at have et billede på hjemmesiden.
    imgElements[this.currIndex].style.left = 0 + "%";
    titleCard.innerHTML = data[this.currIndex].title;
    textCard.innerHTML = data[this.currIndex].text;

  } //END constructor
} //END class

