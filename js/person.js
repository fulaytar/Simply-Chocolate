//тут створили слайдер
const splide = new Splide("#products", {
  type: "loop",
  updateOnMove: true,
  speed: 600,
  easing: "ease-in",
  pagination: true,
  //властивості до 767
  breakpoints: {
    767: {
      fixedWidth: "335px",
      fixedHeight: "450px",
    },
    1200: {
      fixedWidth: "270x",
      fixedHeight: "580px",
    },
    1920: {
      fixedWidth: "270x",
      fixedHeight: "590px",
    },
  },
});
//тут шукаємо всі елементи

const thumbnails = document.getElementsByClassName("thumbnail");
let current;
//ініціалізація
for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}
//по індексу шукаємо
function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
