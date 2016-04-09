angular.module('ionicApp')

.controller('AddFurnitureCtrl', function($scope, $state, $ionicHistory, $rootScope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/AddFurniture-modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
  }).then(function(modal) {
  $scope.modal = modal;
  });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
    $scope.modal.hide();
    //$scope.modal = null;
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
    $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });

    $scope.goBack = function() {
    $ionicHistory.goBack();
    };

    $scope.layout = function() {
    console.log('Layout',$rootScope.value);
    $state.go('Layout');
    };
    $scope.f = [];
    $scope.furniture = [];
    $scope.typeChange = function(){
        $scope.f.name="";
        $scope.furtype = document.getElementById("furnituretypelist").value;
        console.log($scope.furtype);
    }

    $scope.addFurniture = function(){
        console.log(($scope.f.name || $scope.furtype),
                    $scope.f.width,
                    $scope.f.len);
        if($scope.furtype == "Wardrobe" || $scope.furtype == "Other")
        {
        $scope.furniture.push({name:$scope.f.name || $scope.furtype,
          width:$scope.f.width,
          length:$scope.f.len,
          door:document.getElementById("war-door-type").value});
        }
        else {
          $scope.furniture.push({name:$scope.f.name || $scope.furtype,
            width:$scope.f.width,
            length:$scope.f.len});
        }
        $scope.closeModal();
    }
  })
