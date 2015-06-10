/* MAP View Controller */
/* Author: Jorge R Ovalle Z*/
angular.module('Distritoapp').controller('artitleInstrumentCtrl',function($scope,$http,items,$sce){
  $scope.tit   = items[0];
  $scope.image = items[1];
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $http.get('http://distritosonico.herokuapp.com/article-long/?idnode='+items[2]).
  success(function (data) {
    $scope.dataarticle = data[0];
  }).
  error(function (data, status) {
    console.log(data);
  });
});
