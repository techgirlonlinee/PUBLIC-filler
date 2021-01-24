window.addEventListener("DOMContentLoaded", (event) => {
  const markerColors = document.querySelectorAll(".color");

  markerColors.forEach((color) => {
    color.addEventListener("click", (e) => {
      const selected = document.querySelector(".color.selected");
      selected.classList.remove("selected");
      e.target.classList.add("selected");
      //   console.log(e.target.dataset.color);
    });
  });

  const missions = [
    "PUBLIC– produces knowledge",
    "PUBLIC– promotes productive dialogue",
    "PUBLIC– illuminates systematic problems",
    "PUBLIC– exists to expose injustice",
    "PUBLIC– exists for ordinary people",
    "PUBLIC– encourages productive dialogue",
    "PUBLIC– exists for communal good",
  ];

  const stamps = document.querySelector(".stamps");

  stamps.addEventListener("click", function () {
    addMission();
  });

  const addMission = function () {
    const stampsBound = stamps.getBoundingClientRect();

    const mission = document.createElement("span");
    mission.innerText = missions[getRandomInt(0, 6)];
    mission.classList.add("mission");

    const angle = getRandomInt(-45, 45) + "deg";

    mission.style.transform = "rotate(" + angle + ")";
    stamps.appendChild(mission);

    const missionBound = mission.getBoundingClientRect();

    mission.style.left =
      getRandomInt(0, stampsBound.width - missionBound.width) + "px";

    mission.style.top =
      getRandomInt(
        missionBound.height,
        stampsBound.height - missionBound.height
      ) + "px";
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
