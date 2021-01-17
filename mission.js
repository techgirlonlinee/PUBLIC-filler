const missions = [
  "PUBLIC– produces knowledge",
  "PUBLIC– promotes productive dialogue",
  "PUBLIC– illuminates systematic problems",
  "PUBLIC– exists to expose injustice",
  "PUBLIC– exists for ordinary people",
  "PUBLIC– encourages productive dialogue",
  "PUBLIC– exists for communal good",
];

const stampSection = document.querySelector(".stamps");

// function getRandomPosition(element) {
//   var x = stampSection.offsetHeight - 10;
//   var y = stampSection.offsetWidth - 10;
//   var randomX = Math.floor(Math.random() * x);
//   var randomY = Math.floor(Math.random() * y);
//   return [randomX, randomY];
// }

const addStamp = function (x, y) {
  const word = document.createElement("div");
  word.innerText = "history";
  var x = stampSection.offsetHeight - 10;
  var y = stampSection.offsetWidth - 10;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);

  word.style.left = randomX + "px";
  word.style.top = randomY + "px";

  //   const angle = Math.floor(Math.random() * (5 - 1) + 1) + "deg";
  const angle = Math.floor(Math.random() * (5 - 1) + 1) + "deg";
  word.style.transform = "rotate(" + angle + ")";
  stampSection.appendChild(word);
};

stampSection.addEventListener("click", function (event) {
  addStamp(event.randomX, event.pageY);
});
