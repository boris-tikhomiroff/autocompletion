const bodyTag = document.querySelector(".page-wrapper");
const body = document.querySelector("body");

const wiper = document.createElement("div");
wiper.classList.add("wiper");

// const wiperImage = document.createElement("img");
// wiperImage.setAttribute("src", "logo.svg");

const wiperHolder = document.createElement("div");
const wiperText = document.createElement("h2");
wiperText.innerHTML = "Gilbert Garcin";

// Si le pannel recherche est actif changer couleur
// if (body.getAttribute("data-theme") == "" || "light") {
//   wiper.style.backgroundColor = "black";
//   wiperText.style.color = "white";
// } else {
//   wiper.style.backgroundColor = "white";
//   wiperText.style.color = "black";
// }

wiperHolder.appendChild(wiperText);

// wiper.appendChild(wiperImage);
wiper.appendChild(wiperHolder);

bodyTag.appendChild(wiper);

barba.init({
  debug: true,
  transitions: [
    {
      name: "next",
      leave({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          timeline
            .set(wiper, { x: "-100%" })
            .set(wiperText, { y: "100%" })
            .to(wiper, { x: 0 }, 0);
        });
      },
      beforeEnter({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            defaults: {
              duration: 1,
            },
            onComplete() {
              resolve();
            },
          });
          const searchPanel = document.querySelector(".search");
          let menuToggle = document.querySelector(".menu-tog");

          searchPanel.classList.remove("search--view");
          menuToggle.classList.remove("ready");

          timeline.to(wiperText, { y: 0 }, 0).to(wiperText, { y: "100%" }, 2);
        });
      },
      enter({ current, next, trigger }) {
        //
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            },
          });

          timeline.to(wiper, { x: "100%" }, 0);
        });
      },
    },
  ],
  wiews: [],
});
