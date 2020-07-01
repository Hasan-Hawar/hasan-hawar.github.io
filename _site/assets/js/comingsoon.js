function comingsoon() {
  let now = new Date();
  let eventDate = new Date(2020, 12, 31);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remainTime = eventTime - currentTime;

  let s = Math.floor(remainTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("days").textContent = d;
  // document.getElementById('days').innerText = d;

  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;

  setTimeout(comingsoon, 1000);
}

comingsoon();
