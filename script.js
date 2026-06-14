const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

window.addEventListener("DOMContentLoaded", () => {
  const first = panels[0];
  const img = first.dataset.bg;

  // ★ 最初の背景をセット（キャッシュバスター付き）
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
  }, 100);

  fadeIn(first);
});

let activeIndex = 0;
let lastY = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const down = y > lastY;
  lastY = y;

  panels.forEach((panel, index) => {
    const rect = panel.getBoundingClientRect();

    if (down) {
      const prev = panels[index - 1];
      if (!prev) return;

      const prevRect = prev.getBoundingClientRect();

      if (prevRect.bottom <= 0 && index > activeIndex) {
        changeBackground(panel);
        activeIndex = index;
      }

      if (rect.top < window.innerHeight * 0.8 && index === activeIndex) {
        fadeIn(panel);
      }
    }

    else {
      const next = panels[index + 1];
      if (!next) return;

      const nextRect = next.getBoundingClientRect();

      if (rect.top >= 0 && index < activeIndex) {
        changeBackground(panel);
        activeIndex = index;
      }

      if (rect.top < window.innerHeight * 0.8 && index === activeIndex) {
        fadeIn(panel);
      }
    }
  });
});

function changeBackground(panel) {
  const img = panel.dataset.bg;
  bg.style.opacity = 0;
  setTimeout(() => {
    // ★ 背景切替にもキャッシュバスターを付ける
    bg.style.backgroundImage = `url(picture/${img}?v=1)`;
    bg.style.opacity = 1;
  }, 300);
}

function fadeIn(panel) {
  panel.classList.add("visible");

  const items = panel.querySelectorAll(".fade-item");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add("show");
    }, i * 200);
  });
}
