const h1 = document.querySelector("h1");
const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("#form");
const mass = document.querySelector("#mass");
const planet = document.querySelector("#planet");
const button = document.querySelector("button");
const content = document.querySelector("#content");
const contentDesc = document.querySelector("#content-desc");

wrapper.style.cssText =
  "position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: url(https://gifdb.com/images/high/night-sky-twinkling-stars-r1e0ty5782llkk0c.webp) no-repeat; background-size: cover";

h1.style.cssText =
  "text-align: center; color: white; margin-top: 50px; font-family: Arial";

form.style.cssText = "margin: 80px auto 50px; width: 450px";

mass.style.cssText = "width: 150px; height: 25px; font-size: 16px";

planet.style.cssText = "width: 120px; height: 30px; font-size: 16px";

button.style.cssText =
  "width: 150px; height: 30px; font-size: 16px; background:rgba(157, 161, 161, 0.7); color: #ffffff";

content.style.cssText =
  "width: 80%; height: auto; padding: 50px; background: rgba(54, 56, 56, 0.4); margin: 0 auto";

contentDesc.style.cssText =
  "margin: 15px auto; padding: 20px; background: rgba(54, 56, 56, 0.4); text-align: center; color: #ffffff; font-family: Arial; font-size: 20px";

const freeFallAcceleration = {
  mercury: 3.7,
  venus: 8.9,
  earth: 9.8,
  mars: 3.7,
  jupiter: 25,
  saturn: 10.4,
  uranus: 8.9,
  neptune: 11,
  pluto: 0.7,
};

function getWeight(m, g) {
  return Math.round(m * g);
}

button.addEventListener("click", () => {
  let massOfObject = Number(mass.value);
  let objectWeight;
  if (planet.value === "mercury") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.mercury);
  }
  if (planet.value === "venus") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.venus);
  }
  if (planet.value === "earth") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.earth);
  }
  if (planet.value === "mars") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.mars);
  }
  if (planet.value === "jupiter") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.jupiter);
  }
  if (planet.value === "saturn") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.saturn);
  }
  if (planet.value === "uranus") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.uranus);
  }
  if (planet.value === "neptune") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.neptune);
  }
  if (planet.value === "pluto") {
    objectWeight = getWeight(massOfObject, freeFallAcceleration.pluto);
  }
  contentDesc.innerHTML = `<p>The weight of the object on <span class="bold">${planet.value
    .slice(0, 1)
    .toUpperCase()}${planet.value.slice(1)}</span> ${objectWeight}.00 N</p>`;
});
