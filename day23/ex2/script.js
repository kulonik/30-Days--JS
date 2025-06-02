const pressedKey = document.querySelector("#pressed-key");
const key = document.querySelector("#key-code");

pressedKey.style.cssText =
  "width: 350px; height: 40px; border: 1px solid rgb(238, 235, 235); box-shadow: 4px 4px 8px rgba(197, 189, 189, 0.3); margin: 150px auto 50px; text-align: center; padding-top: 15px; color: rgb(75, 63, 63); font-size: 24px; font-weight: bold; font-family: sans-serif; text-shadow: 4px 4px 2px rgba(197, 189, 189, 0.3)";

document.body.addEventListener("keypress", (e) => {
  key.textContent = e.keyCode;
  key.style.cssText =
    "width: 110px; height: 120px; margin: 0 auto; border: 1px solid rgb(238, 235, 235); box-shadow: 4px 4px 8px rgba(197, 189, 189, 0.3); color: rgb(38, 201, 16); font-weight: bold; font-size: 60px; text-shadow: 4px 4px 2px rgb(197, 189, 189, 0.3); text-align: center; padding-top: 30px";
  let char = String.fromCharCode(e.keyCode);
  pressedKey.innerHTML = `You pressed ${char}`;
});
