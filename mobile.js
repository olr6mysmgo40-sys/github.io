// ★ 背景プリキャッシュ
const bgImages = [
  "姫楓菜.png","IMG_0031-2.jpeg","IMG_0078-2.jpeg","IMG_0141-2.jpeg","IMG_0236-2.jpeg",
  "IMG_0246-2.jpeg","IMG_3864-2.jpeg","IMG_4268-2.jpeg","IMG_4491-2.jpeg","IMG_4758-2.jpeg",
  "IMG_4920-2.jpeg","IMG_4984-2.jpeg","IMG_5706-2.jpeg","IMG_5157-2.jpeg","IMG_5226-2.jpeg"
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
    // ▼ 下方向：上から順
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
    // ▼ 上方向：下から順（forEach の外）
    for (let index = panels.length - 1; index >= 0; index--) {
      const panel = panels[index];
      const rect = panel.getBoundingClientRect();
      const next = panels[index + 1];
      if (!next) continue;

      const nextRect = next.getBoundingClientRect();

      if (nextRect.top >= window.innerHeight - 10 && index < activeIndex) {
        changeBackground(panel);
        activeIndex = index;
        break;
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

document.querySelectorAll('.slider-container').forEach(container => {
  const images = container.querySelectorAll('.image-container img');
  const navContainer = container.querySelector('.nav-container');
  const totalImages = images.length;
  let imageIndex = 0;
  let interval;

  // ボタン生成
  for (let i = 0; i < totalImages; i++) {
    const button = document.createElement('button');
    button.classList.add('nav-btn');
    navContainer.appendChild(button);
  }

  const buttons = navContainer.querySelectorAll('.nav-btn');

  // ボタンクリック
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      imageIndex = index;
      updateSlider();
      resetInterval();
    });
  });

  function updateSlider() {
    images.forEach(img => img.classList.remove('image-active'));
    buttons.forEach(btn => btn.classList.remove('btn-active'));

    images[imageIndex].classList.add('image-active');
    buttons[imageIndex].classList.add('btn-active');
  }

  function nextImage() {
    imageIndex++;
    if (imageIndex >= totalImages) imageIndex = 0;
    updateSlider();
  }

  function autoPlay() {
    interval = setInterval(nextImage, 3000);
  }

  function resetInterval() {
    clearInterval(interval);
    autoPlay();
  }

  // 初期化
  updateSlider();
  autoPlay();
});
