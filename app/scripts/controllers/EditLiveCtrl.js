/**
 * Created by ylemin on 10/06/14.
 */

'use strict';

angular.module('editliveangularApp')
  .controller('EditLiveCtrl', function($scope, $timeout) {
    function init() {
      $scope.editLiveSections = [ ];
      $scope.sectionCount = 0;

      $scope.editLive = new EditLiveJava('editLive', '100%', '100%');
      $scope.editLive.setConfigurationFile('/editlivejava/cullen_eljconfig.xml');
      $scope.editLive.setAutoSubmit(true);
      $scope.editLive.setResizableSections(true);
      $scope.editLive.setCloseOnFocusLost(true);

      $scope.addSection();
    }

    $scope.$on('editLiveReady', function(event, index) {

      for (var i=0; i<$scope.editLiveSections.length; i++) {
        var value = $scope.editLiveSections[i];
        if (value.id === index) {
          // The timeout purpose here is to force the addEditableSection to be done after the dom is fully generated.
          // The editSectionReady event is emitted from the link function of the directive, and the $timeout handler
          // will be called as the next event in the javascript queue, ensuring the DOM to be fully binded.
          $timeout(function() {
            $scope.editLive.addEditableSection('editLive' + value.id);
          }, 0);

          break;
        }
      }
    });

    $scope.addSection = function() {
      $scope.editLiveSections.push({ id: $scope.sectionCount, content: 'content ' + $scope.sectionCount });
      $scope.sectionCount++;
    };

    $scope.onPurge = function() {
      for (var i=0; i<$scope.editLiveSections.length; i++) {
        var section = $scope.editLiveSections[i];
        section.content = $scope.editLive.getContentForEditableSection('editLive' + section.id);
      }
    };

    init();
  });