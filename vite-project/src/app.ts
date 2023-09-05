class App {
  constructor() {
    //Container 
    const containerCard = document.createElement("div");
    containerCard.className = "div";
    document.body.appendChild(containerCard);

    //Img-element
    const img = document.createElement("img");
    containerCard.appendChild(img);

    //Text-element
    const textCard = document.createElement("figcaption");
    textCard.id = "card__text";
    containerCard.appendChild(textCard);

    
  }
}
export default App;
