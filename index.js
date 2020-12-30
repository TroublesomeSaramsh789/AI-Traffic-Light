let car = document.querySelector(".car");
let traffic = document.querySelector(".traffic");
let button = document.querySelector(".start");

traffic.innerHTML = `<img src="./assets/traffic-light.png" alt="" />`;

const move = () => {
  car.style.cssText = "animation: moveCar 4s linear;";
};

const moveBeyond = () => {
  traffic.innerHTML = `<img src="./assets/traffic-light-green.png" alt="" />`;
  car.style.cssText = "animation: moveCarBeyond 3s ; animation-delay: 2s;";
};

button.addEventListener("click", () => {
  traffic.innerHTML = `<img src="./assets/traffic-light-red.png" alt="" />`;
  move();
  setTimeout(() => {
    moveBeyond();
  }, 6000);
  setTimeout(() => {
    traffic.innerHTML = `<img src="./assets/traffic-light.png" alt="" />`;
  }, 10000);
});
