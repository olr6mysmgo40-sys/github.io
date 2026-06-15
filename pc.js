// ▼ PC用ロジック（そのまま）
const bg = document.getElementById("bg");
const panels = document.querySelectorAll(".panel");

// ★ 背景プリキャッシュ
const bgImages = [
  "姫楓菜.heic","IMG_0031_E83E4BF3.heic","IMG_0078_2FD58F24.heic","IMG_0141_F6BC0A7F.heic","IMG_0236_8B73E1EF.heic",
  "IMG_0246_0C60E47C.heic","IMG_3864_A37F02AC.heic","IMG_4268_02FCC5FE.heic","IMG_4491_689B42A0.heic","IMG_4758_3A37B092.heic",
  "IMG_4920_CA21100B.heic","IMG_4984_16B269B6.heic","IMG_5706_BC02A030.heic","IMG_5157_CF4077C7.heic","IMG_5226_3BBD8F68.heic"
];

bgImages.forEach(src => {
  const img = new Image();
  img.src = `picture/${src}?v=1`;
});

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

  panels.forEach((panel, index) => {
    const rect = panel.getBoundingClientRect();

    if (down) {
      const prev = panels[index - 1];
      if (!prev) return;

      const prevRect = prev.getBoundingClientRect();

      if (prevRect.bottom <= window.innerHeight + 100 && index > activeIndex) {
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

      if (rect.bottom >= window.innerHeight + 100 && index < activeIndex) {
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
  //bg.style.opacity = 0;
  setTimeout(() => {
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

const images = document.querySelectorAll('.slider-container .image-container img');
const navContainer = document.querySelector('.slider-container .nav-container');
const totalImages = images.length;
let imageIndex = 0;
let interval;

// 画像と同じ数のボタンを作成
for (let i = 0; i < totalImages; i++) {
  const button = document.createElement('button');
  button.classList.add('nav-btn');
  navContainer.appendChild(button);
}

// 作成したボタンを操作できるようにすべてのボタンをまとめて取得
const buttons = document.querySelectorAll('.nav-btn');

// すべてのボタンにクリックイベントを追加
buttons.forEach((button,index) => {
  button.addEventListener('click',() => {
    imageIndex = index;
    updateSlider();
    resetInterval();
  });
});

// 画像とボタンを更新
function updateSlider() {
  images.forEach(image => {
    image.classList.remove('image-active');
  });
  buttons.forEach(button => {
    button.classList.remove('btn-active');
  });
  images[imageIndex].classList.add('image-active');
  buttons[imageIndex].classList.add('btn-active');
}

// 次の画像を指定して表示
function nextImage() {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  updateSlider();
}

// 次の画像へ自動再生
function autoPlay() {
  interval = setInterval(nextImage, 3000);
}

// 自動再生を一旦停止してから再び再生
function resetInterval() {
  clearInterval(interval);
  autoPlay();
}

// スライドショーを開始
updateSlider();
autoPlay();
