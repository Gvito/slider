// stock the var picture 0 in the index
var pictureIndex = 0;
// actived function
showCarousel();
// button prev and next controls
// the "n" mean a number who add or subtracts pictureIndex
function plusPicture(n) {
  showCarousel(pictureIndex += n);
}
// Carousel
function showCarousel(n) {
  // variable of all img
  var picture = document.getElementsByClassName("pictureDiv");
  // hide all img
  for (var i = 0; i < picture.length; i++) {
    picture[i].style.display = "none";
  }
  // start reload index img
  pictureIndex++;
  // if the pictureIndex > the picture 1 so +1 on pictureIndex
  if (pictureIndex > picture.length) {
    pictureIndex = 1;
  }
  // access of the seconde img
  if (n < 1) {
    pictureIndex = picture.length;
  }
  // view picture of the boucle and delete the precedent pictureIndex view
  picture[pictureIndex-1].style.display = "block";
  // reload the showCarousel function all the 3s
  setTimeout(showCarousel, 3000);
}
