/**
 * Created by ylemin on 10/06/14.
 */

'use strict';

angular.module('editliveangularApp')
  .directive('tinymce', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/tinymce.html',
      scope: {
        id: '='
      },
      link: function(scope) {
        scope.$watch('text', function(newValue) {
          scope.$parent['text' + scope.id] = newValue;
        });
      }
    };
  });
