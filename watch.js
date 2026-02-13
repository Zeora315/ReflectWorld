// 获取 URL 参数
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 页面元素
const player = document.getElementById("player");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const recommend = document.getElementById("recommend");

// 找到当前视频
const current = videos.find(v => v.id === id) || videos[0];

// 设置视频信息
player.src = "video/" + current.file;
title.textContent = current.title;
desc.textContent = current.desc;

// ======================
// 沉浸式状态栏
// ======================

function enterFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// 双击视频进入/退出全屏
player.addEventListener("dblclick", () => {
  if (document.fullscreenElement) {
    exitFullscreen();
  } else {
    enterFullscreen();
  }
});

// ======================
// 已观看记录
// ======================

let watched = JSON.parse(localStorage.getItem("watched")) || [];

if (!watched.includes(current.id)) {
  watched.push(current.id);
  localStorage.setItem("watched", JSON.stringify(watched));
}

// ======================
// 播放进度保存
// ======================

const progressKey = "progress_" + current.id;

// 恢复进度
player.addEventListener("loadedmetadata", () => {
  const savedTime = localStorage.getItem(progressKey);
  if (savedTime) {
    player.currentTime = parseFloat(savedTime);
  }
});

// 实时保存进度
player.addEventListener("timeupdate", () => {
  localStorage.setItem(progressKey, player.currentTime);
});

// ======================
// 生成推荐视频
// ======================

videos.forEach(video => {
  if (video.id !== current.id) {
    const item = document.createElement("div");
    item.className = "recommend-item";

    item.innerHTML = `
      <img src="${video.cover}">
      <div>${video.title}</div>
    `;

    item.onclick = () => {
      window.location.href = `watch.html?id=${video.id}`;
    };

    recommend.appendChild(item);
  }
});