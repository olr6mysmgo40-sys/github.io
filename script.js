const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

window.addEventListener("DOMContentLoaded", () => {
  const first = panels[0];
  const img = first.dataset.bg;

  // ★ 最初の背景をセット
  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = `url(picture/${img})`;
    bg.style.opacity = 1;
  }, 100);

  // ★ 最初の文字もフェードイン
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

    // ▼▼▼ 下方向 ▼▼▼
    if (down) {
      const prev = panels[index - 1];
      if (!prev) return;

      const prevRect = prev.getBoundingClientRect();

      // ★ 前のセクションの bottom が画面外に出た瞬間
      if (prevRect.bottom <= 0 && index > activeIndex) {
        changeBackground(panel);
        activeIndex = index;
      }

      // セクションが画面に入ったらフェードイン
      if (rect.top < window.innerHeight * 0.8 && index === activeIndex) {
        fadeIn(panel);
      }
    }

    // ▼▼▼ 上方向 ▼▼▼
    else {
      const next = panels[index + 1];
      if (!next) return;

      const nextRect = next.getBoundingClientRect();

      // ★ 上方向では「次のセクションの top が画面に入る直前」を使う
      if (rect.top >= 0 && index < activeIndex) {
        changeBackground(panel);
        activeIndex = index;
      }

      // セクションが画面に入ったらフェードイン
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
    bg.style.backgroundImage = `url(picture/${img})`;
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
