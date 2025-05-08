(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = '';
    $scope.message = '';
    $scope.messageClass = '';
    $scope.borderClass = '';

    $scope.checkLunch = function () {
      if (!$scope.lunchItems || $scope.lunchItems.trim() === '') {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'message-red';
        $scope.borderClass = 'input-red';
        return;
      }

      const itemsArray = $scope.lunchItems
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0); // removes empty items

      if (itemsArray.length === 0) {
        $scope.message = 'Please enter data first';
        $scope.messageClass = 'message-red';
        $scope.borderClass = 'input-red';
      } else if (itemsArray.length <= 3) {
        $scope.message = 'Enjoy!';
        $scope.messageClass = 'message-green';
        $scope.borderClass = 'input-green';
      } else {
        $scope.message = 'Too much!';
        $scope.messageClass = 'message-green';
        $scope.borderClass = 'input-green';
      }
    };
  }
})();
