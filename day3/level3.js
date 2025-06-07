// Create a human readable time format using the Date time object
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let mins = now.getMinutes();

function getDateTime() {
  return `${year}-${month >= 9 ? month : "0" + month}-${
    day >= 9 ? day : "0" + day
  } ${hours >= 9 ? hours : "0" + hours}:${mins >= 9 ? mins : "0" + "mins"}`;
}
console.log(getDateTime());
