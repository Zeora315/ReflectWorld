const grid = document.getElementById("videoGrid");

// 读取已观看
const watched = JSON.parse(localStorage.getItem("watched")) || [];

videos.forEach(video => {

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${video.cover}">
    <div class="card-title">${video.title}</div>
    <div class="card-desc">${video.desc}</div>
  `;

  // 已观看标记
  if (watched.includes(video.id)) {
    const badge = document.createElement("div");
    badge.className = "watched";
    badge.innerText = "已观看";
    card.appendChild(badge);
  }

  card.onclick = () => {
    window.location.href = `watch.html?id=${video.id}`;
  };

  grid.appendChild(card);
});