(function () {
  'use strict';

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', '$http'];
  function SignUpController(UserService, $http) {
    var signUpCtrl = this;
    signUpCtrl.user = {};
    signUpCtrl.invalidMenuItem = false;
    signUpCtrl.saved = false;

    signUpCtrl.submit = function () {
      var itemCode = signUpCtrl.user.favoriteDish || "";
      var category = itemCode.charAt(0).toUpperCase();
      var index = parseInt(itemCode.slice(1)) || 0;
      var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category}/menu_items/${index}.json`;

      $http.get(url).then(function (response) {
        if (response.data) {
          signUpCtrl.invalidMenuItem = false;
          signUpCtrl.saved = true;
          signUpCtrl.user.menuItem = response.data;
          signUpCtrl.user.menuItem.imageUrl = "images/menu-tile.jpg"; // demo purpose
          UserService.saveUser(signUpCtrl.user);
        } else {
          signUpCtrl.invalidMenuItem = true;
          signUpCtrl.saved = false;
        }
      });
    };
  }
})();