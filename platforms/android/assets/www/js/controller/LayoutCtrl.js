angular.module('ionicApp')

.controller('LayoutCtrl', function($scope, $ionicHistory, $ionicSlideBoxDelegate,$rootScope) {
  $scope.goBack = function() {
  $ionicHistory.goBack();
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.slides = [
  {src:'http://www.house-interior-design.xyz/wp-content/uploads/2015/10/small-bedroom-interior-design-ideas-image-iGpl.jpg', name:"1"},
  {src:'http://www.housing.uvic.ca/assets/images/Double_DTAC.jpg', name:"2"},
  {src:'http://www.houseplanshelper.com/images/small_bedroom_design_queen_3.jpg', name:"3"},
  {src:'https://s-media-cache-ak0.pinimg.com/236x/d9/cd/60/d9cd60c5a7687ff39fb226b55f1dbb1f.jpg', name:"4"}
  ];

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
  $scope.slideIndex = index;
};
})
