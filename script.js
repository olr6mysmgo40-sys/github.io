const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

// ★ 背景画像を事前に読み込む（プリキャッシュ）
const bgImages = [
  "姫楓菜.png",
  "IMG_0031.jpeg",
  "IMG_0078.jpeg",
  "IMG_0141.jpeg",
  "IMG_0236.jpeg",
  "IMG_0246.jpeg",
  "IMG_3864.jpeg",
  "IMG_4268.jpeg",
  "IMG_4491.jpeg",
  "IMG_4758.jpeg",
  "IMG_4920.jpeg",
  "IMG_4984.jpeg",
  "IMG_5157.jpeg",
  "IMG_5226.jpeg"
];

bgImages.forEach(src => {
  const img = new Image();
  img.src = `picture/${src}?v=1`;
});

// ★ 最初の背景セット
window.addEventListener("DOMContentLoaded", () => {
  const first = panels[0];
  const img = first.dataset.bg;

  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
  }, 100);

  fadeIn(first);
});

// ★ IntersectionObserver（セクションが100%見えたら切替）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      changeBackground(entry.target);
      fadeIn(entry.target);
    }
  });
}, {
  threshold: 0.5  // ← セクションが100%画面内に入ったら発火
});

// 全セクションを監視
panels.forEach(panel => observer.observe(panel));


// 背景切替
function changeBackground(panel) {
  const img = panel.dataset.bg;
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
  }, 300);
}

// フェードイン
function fadeIn(panel) {
  panel.classList.add("visible");

  const items = panel.querySelectorAll(".fade-item");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 200);
  });
}
