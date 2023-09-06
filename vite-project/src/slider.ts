import App from "./app";

class Sliders {
    constructor(){
        const sliders = document.querySelectorAll("mySlides");

        const interval = 2800;

        const animDuration = 600;

        for (let i = 0; i < sliders.length; ++i){
            const slider = sliders[i];
            const dots = slider.querySelector("dots");
            const sliderImgs = slider.querySelectorAll("imgElements");

            let currImg = 0;
            let prevImg = sliderImgs.length -1;
            let intrvl;
            let timeout;

            for (let i = 0; i < sliderImgs.length; ++i){
                const dot = document.createElement("div");
                dot.classList.add("dot");
                document.body.appendChild(dot);
                dot.addEventListener("click", dotClick.bind(null, i), false);
            }

            const allDots = dots
        }

    }
}

export default Sliders