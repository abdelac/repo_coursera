(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/components/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
