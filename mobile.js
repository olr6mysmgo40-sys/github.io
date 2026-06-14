// ▼ スマホ用ロジック（中央付近で切り替え）
const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

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

const observerMobile = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const rect = entry.target.getBoundingClientRect();
    const center = window.innerHeight / 2;

    // セクション中央が画面中央付近に来たら切替
    const panelCenter = rect.top + rect.height / 2;

    if (Math.abs(panelCenter - center) < rect.height * 0.35) {
      changeBackground(entry.target);
      fadeIn(entry.target);
    }
  });
}, {
  threshold: 0.1
});

panels.forEach(panel => observerMobile.observe(panel));

function changeBackground(panel) {
  const img = panel.dataset.bg;
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
  }, 300);
}

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
