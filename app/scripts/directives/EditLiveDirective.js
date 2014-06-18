/**
 * Created by ylemin on 10/06/14.
 */

'use strict';

angular.module('editliveangularApp')
  .directive('editlive', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/editlive.html',
      scope: {
        section: '='
      },
      link: function(scope) {
        scope.$emit('editLiveReady', scope.section.id);
      }
    };
  });
