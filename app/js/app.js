var app = angular.module('sound-panel', []);
app.controller('soundsController', ['$scope', function ($scope) {
    $scope.sounds = [
        { "title": "Buenardo", "author": "Coscu", "audioPath": "02-coscu-buenardo.mp3" },
        { "title": "Pedazo de tocate sola", "author": "Nadia La Kachorra", "audioPath": "nadia-la-kchora-pedazo-de-tocate-sola.mp3" },
        { "title": "Leche 01", "author": "Martín Garabal", "audioPath": "01-leche.mp3" },
        { "title": "Tocate sola", "author": "Nadia La Kachorra", "audioPath": "nadia-la-kchora-tocate-sola.mp3" },
        { "title": "Leche 02", "author": "Martín Garabal", "audioPath": "02-leche.mp3" },
        { "title": "Arrancá con fuerza", "author": "Nadia La Kachorra", "audioPath": "nadia-la-kchora-arranca-con-fuerza.mp3" },
        { "title": "Leche 03", "author": "Martín Garabal", "audioPath": "03-leche.mp3" },
        { "title": "Buenardo (Grito)", "author": "Coscu", "audioPath": "01-coscu-buenardo.mp3" },
        { "title": "Leche 04", "author": "Martín Garabal", "audioPath": "04-leche.mp3" }
    ];
}]);