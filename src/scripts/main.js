AOS.init();

const eventDate = new Date("May 10, 2024 12:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function () {
  const now = new Date();
  const nowTimeStamp = now.getTime();

  const distanceEvent = eventTimeStamp - nowTimeStamp;

  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minuteMs = 1000 * 60;

  const daysToTheEvent = Math.floor(distanceEvent / dayMs);
  const hoursToTheEvent = Math.floor((distanceEvent % dayMs) / hourMs);
  const minutesToTheEvent = Math.floor((distanceEvent % hourMs) / minuteMs);
  const secondsToTheEvent = Math.floor((distanceEvent % minuteMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${daysToTheEvent}d ${hoursToTheEvent}h ${minutesToTheEvent}m ${secondsToTheEvent}s`;

  if (distanceEvent < 0) {
    clearInterval(countHours);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
