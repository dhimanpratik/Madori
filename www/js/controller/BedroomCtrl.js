angular.module('ionicApp')

.controller('BedroomSizeCtrl', function($scope, $state,$rootScope) {
    $rootScope.value = 80;
    $rootScope.room = [{width:0,
                        height:0}];
    $rootScope.step = 0;
    var width,height,scale;
    var canvasw,canvash;

    $scope.drawRoom = function(){
    var container = document.getElementById("room_canvas_holder");
    var remover = document.getElementById("roomcanvas");
    if(remover)
    {
      container.removeChild(remover);
     }
      scale = 0;    
      width = $rootScope.room.width;
      height = $rootScope.room.height;

      if(!$rootScope.room.width)
      { width = 0; }

      if(!$rootScope.room.height)
        {height = 0;}
    
      acwidth = container.clientWidth-40;
      if(width!=0){
      if((width*10) < acwidth)
          {
              scale = acwidth/(width*10);
          }
      }
        console.log(scale,acwidth);
    var room = document.createElement("canvas");
    //room.width = width;
    //room.height = height;
    
    canvasw = (width*10*scale)+"px";
    canvash = (height*10*scale)+"px";
    $rootScope.gridw = (width*10*scale)/width;    
    $rootScope.gridh = (height*10*scale)/height;  
    console.log("grid",$rootScope.gridw,$rootScope.gridh);
    room.style.width = canvasw;
    room.style.height = canvash;
    room.style.border = "5px solid black";
    room.id = "roomcanvas";
    room.classList.add('rhold');
        
    if(width!=0){
    container.appendChild(room);
    }
    $rootScope.scale = scale;
    };

    $scope.addDoors = function() {
    $rootScope.cwidth = canvasw;
    $rootScope.cheight = canvash;
    
    $state.go('AddDoors');
    };
  })
