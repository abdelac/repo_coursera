(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/components/categories.template.html',
      bindings: {
        items: '<'
      }
    });
})();
