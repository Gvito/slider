// stock the var picture 0 in the index
var pictureIndex = 0;
// actived function
showCarousel();
// Carousel
function showCarousel() {
  // variable of all img
  var picture = document.getElementsByClassName("pictureDiv");
  // hide all img
  for (var i = 0; i < picture.length; i++) {
    picture[i].style.display = "none";
  }
  pictureIndex++;
  // if the pictureIndex > the picture 1 so +1 on pictureIndex
  if (pictureIndex > picture.length) {
    pictureIndex = 1;
  }
  // view picture of the boucle and delete the precedent pictureIndex view
  picture[pictureIndex-1].style.display = "block";
  // reload the showCarousel function all the 3s
  setTimeout(showCarousel, 3000);
}
