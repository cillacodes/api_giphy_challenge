var app = angular.module('giphyApp', []);

app.controller('GiphyController', function($http) {
console.log('GiphyController loaded');

var API = 'http://api.giphy.com/v1/gifs/'
var ctrl = this;

var giphyGetparams = {params: {api_key: 'dc6zaTOxFJmzC'}};

ctrl.getRandomGif = function() {
  console.log('Inside button click');
  $http.get(API + 'random', giphyGetparams).then(function(response) {
    console.log('Got a reponse from the API', response);
    console.log(response.data.data.image_url);

    ctrl.imageUrl = response.data.data.image_url;
    ctrl.imageAlt = response.data.data.url;

  }).catch(function(err) {
    console.log('Error getting info from API', err);
  });
} //end.getRandomGif

ctrl.searchGif = function(searchTerm) {
  giphyGetparams.params.q = searchTerm;
  giphyGetparams.params.limit = 100;

  function randomNumber() {
    return Math.floor(Math.random() * (100));
  }

  var randomNumberIndex = randomNumber();

  console.log('Inside button click');
  $http.get(API + 'search', giphyGetparams).then(function(response) {
    console.log('Got a search reponse from the API', response);
    console.log(response.data.data[randomNumberIndex].images.original.url);

    ctrl.imageUrl = response.data.data[randomNumberIndex].images.original.url;
    ctrl.imageAlt = response.data.data[randomNumberIndex].url;

  }).catch(function(err) {
    console.log('Error getting search info from API', err);
  });
}

}); //end.controller
