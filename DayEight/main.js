const minutes = document.querySelector(`.minutes`);
const hour = document.querySelector(`.hour`);
const sec = document.querySelector(`.seconds`);

setInterval(() => {
  let today = new Date();
  hour.innerHTML = today.getHours();
  minutes.innerHTML = today.getMinutes();
  sec.innerHTML = today.getSeconds();
}, 1000);
