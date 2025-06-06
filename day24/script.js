const h1 = document.querySelector("h1");
const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
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
  "margin: 15px auto; width: 30%; padding: 20px; background: rgba(54, 56, 56, 0.4); text-align: center; color: #ffffff; font-family: Arial; font-size: 20px";
