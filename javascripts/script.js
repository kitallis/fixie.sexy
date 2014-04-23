var numberOfImages = 3

function randomFixieImagePath() {
  return ["images/fixie", Math.floor((Math.random() * numberOfImages) + 1).toString()].join("");
}

function setBackgroundFixie() {
  var body = document.getElementsByTagName('body')[0];
  var imageUrl = ["url", "('", randomFixieImagePath(), "')"];
  body.style.backgroundImage = imageUrl.join("");
}

document.addEventListener('DOMContentLoaded', function() {
   window.setInterval(setBackgroundFixie, 2000);
});