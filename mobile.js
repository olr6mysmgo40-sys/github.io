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

const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

window.addEventListener("load", () => {
  const first = panels[0];
  const img = first.dataset.bg;

  const preload = new Image();
  preload.src = `picture/${img}?v=1`;

  preload.onload = () => {
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
    fadeIn(first);
  };

  // 保険
  setTimeout(() => {
    if (!bg.style.backgroundImage) {
      bg.style.backgroundImage = `url(picture/${img}?v=1)`;
      bg.style.opacity = 1;
      fadeIn(first);
    }
  }, 800);
});


let activeIndex = 0;
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const down = y > lastY;
  lastY = y;

  if (down) {
    // ▼ 下方向：上から順にチェック
    panels.forEach((panel, index) => {
      const rect = panel.getBoundingClientRect();
      const prev = panels[index - 1];
      if (!prev) return;

      const prevRect = prev.getBoundingClientRect();

      if (prevRect.bottom <= window.innerHeight + 200 && index > activeIndex) {
        changeBackground(panel);
        activeIndex = index;
      }

      if (rect.top < window.innerHeight * 0.8 && index === activeIndex) {
        fadeIn(panel);
      }
    });
  }

  else {
    // ▼ 上方向：下から順にチェック（ここが最重要）
    for (let index = panels.length - 1; index >= 0; index--) {
      const panel = panels[index];
      const rect = panel.getBoundingClientRect();
      const next = panels[index + 1];
      if (!next) continue;

      const nextRect = next.getBoundingClientRect();

      // 次のパネルの top が画面下に戻ったら切り替え
      if (nextRect.top >= window.innerHeight - 10 && index < activeIndex) {
        changeBackground(panel);
        activeIndex = index;
        break; // ← これが超重要（複数回発火防止）
      }

      if (rect.top < window.innerHeight * 0.8 && index === activeIndex) {
        fadeIn(panel);
      }
    }
  }
});


function changeBackground(panel) {
  const img = panel.dataset.bg;
  //bg.style.opacity = 0;
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
