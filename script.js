if (window.matchMedia("(max-width: 768px)").matches) {
  const script = document.createElement("script");
  script.src = "mobile.js";
  document.body.appendChild(script);
} else {
  const script = document.createElement("script");
  script.src = "pc.js";
  document.body.appendChild(script);
}
