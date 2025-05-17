// Using XMLHttpRequest
function reqListener() {
  console.log(this.responseText);
}

// 1. Create XMLHttpRequest:
const req = new XMLHttpRequest();
// 2. Initialize XMLHttpRequest:
req.open("GET", "http://www.example.org/example.txt");
// 3. Send request:
req.send();
// 4. Listen to an event to get the response:

req.onload = function () {
  console.log(`Loaded: ${req.status} ${req.response}`);
};
req.onerror = function () {
  console.log("Connection error");
};

req.onprogress = function (event) {
  console.log(`Loaded ${event.loaded} of ${event.total}`);
};
