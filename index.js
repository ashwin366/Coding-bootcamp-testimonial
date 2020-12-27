var slides = document.querySelectorAll(".l-container__item1");
var buttonLeft = document.querySelectorAll(".btn--left");
var buttonRight = document.querySelectorAll(".btn--right");

buttonLeft.forEach(function(btnleft){
  btnleft.addEventListener("click", function(){
    slides.forEach(function(slide){
        if (slide.classList.contains("item1--active")){
          slide.classList.toggle("item1--active");
          slide.classList.toggle("item1--slideleft");
        }
        else if (slide.classList.contains("item1--slideleft")){
          slide.classList.toggle("item1--slideleft");
          slide.classList.toggle("item1--active");
        }
        else if (slide.classList.contains("item1--slideright")){
          slide.classList.toggle("item1--slideright");
          slide.classList.toggle("item1--active");
        }
        else{
          slide.classList.toggle("item1--active");
        }
    });
  });
});

buttonRight.forEach(function(btnright){
  btnright.addEventListener("click", function(){
    slides.forEach(function(slide){
        if (slide.classList.contains("item1--active")){
          slide.classList.toggle("item1--active");
          slide.classList.toggle("item1--slideright");
        }
        else if (slide.classList.contains("item1--slideleft")){
          slide.classList.toggle("item1--slideleft");
          slide.classList.toggle("item1--active");
        }
        else if (slide.classList.contains("item1--slideright")){
          slide.classList.toggle("item1--slideright");
          slide.classList.toggle("item1--active");
        }
        else{
          slide.classList.toggle("item1--active");
        }
    });
  });
})
