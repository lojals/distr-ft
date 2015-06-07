/* MAP View Controller */
/* Author: Jorge R Ovalle Z*/
angular.module('Distritoapp').controller('artitleInstrumentCtrl',function($scope,$http,items){
  $scope.tit   = items[0];
  $scope.image = items[1];
});
