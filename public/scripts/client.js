var app = angular.module('giphyApp', []);

app.controller('GiphyController', function(GiphyService) {
console.log('GiphyController loaded');

var ctrl = this;

ctrl.getRandomGif = function() {
  // console.log("randomGif", gif);
  GiphyService.getRandomGif().then(function(gifUrl) {
    ctrl.randomGifUrl = gifUrl.image_url;
    ctrl.imageAlt = gifUrl.url;
    console.log(gifUrl);
  });
};


ctrl.searchGif = function(searchTerm) {
  // GiphyService.params.q = searchTerm;
  // GiphyService.params.limit = 100;
  GiphyService.searchGif(searchTerm).then(function(gifUrl) {
    ctrl.randomGifUrl = gifUrl.image_url;
    ctrl.imageAlt = gifUrl.url;

  });

//   var randomNumberIndex = randomNumber();
// }
// function randomNumber() {
//   return Math.floor(Math.random() * (100));
// }
}; //end.controller

});
