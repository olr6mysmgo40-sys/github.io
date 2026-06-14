const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

// ★ スマホ判定
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// ★ 背景プリキャッシュ
const bgImages = [
  "姫楓菜.png","IMG_0031.jpeg","IMG_0078.jpeg","IMG_0141.jpeg",
  "IMG_0236.jpeg","IMG_0246.jpeg","IMG_3864.jpeg","IMG_4268.jpeg",
  "IMG_4491.jpeg","IMG_4758.jpeg","IMG_4920.jpeg","IMG_4984.jpeg",
  "IMG_5157.jpeg","IMG_5226.jpeg"
];

bgImages.forEach(src => {
  const img = new Image();
  img.src = `picture/${src}?v=1`;
});

// ★ 最初の背景
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

// ★ スマホとPCでObserverを完全に分ける
let observer;

if (isMobile) {
  // ▼ スマホ：画面が小さいので threshold は小さめ
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        changeBackground(entry.target);
        fadeIn(entry.target);
      }
    });
  }, {
    threshold: 0.05  // ← 5%見えたら切替（スマホ最適）
  });

} else {
  // ▼ PC：画面が大きいので自然な切替
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        changeBackground(entry.target);
        fadeIn(entry.target);
      }
    });
  }, {
    threshold: 0.4  // ← 40%見えたら切替（PC最適）
  });
}

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

// フェードイン（1回だけ）
function fadeIn(panel) {
  if (panel.classList.contains("visible")) return;

  panel.classList.add("visible");

  const items = panel.querySelectorAll(".fade-item");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 200);
  });
}
