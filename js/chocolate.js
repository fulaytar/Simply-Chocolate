//тут створили слайдер
const persons = new Splide("#review", {
  type: "loop",
  perPage: 2,
  perMove: 1,
  updateOnMove: true,
  speed: 600,
  easing: "ease-in",
  pagination: true,
  //властивості до 767
  breakpoints: {
    767: {
      perPage: 1,
    },
  },
});
//тут шукаємо всі елементи
const personBox = document.getElementById("review");
const thumbnails = personBox.getElementsByClassName("thumbnail");
let current;
//ініціалізація
for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}
//по індексу шукаємо
function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    persons.go(index);
  });
}

persons.on("mounted move", function () {
  var thumbnail = thumbnails[persons.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

persons.mount();
