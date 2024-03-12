

//тут створили слайдер
const splide = new Splide('#products', {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  updateOnMove: true,
  speed: 600,
  easing: 'ease-in',
  pagination: true,
  //властивості до 767
  breakpoints: {
	767: {
      perPage: 1,
      padding: '10%',
	},
    
  }

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
      



