    angular.module('ionicApp')

    .controller('AddWindowsCtrl',
    function($scope, $state, $ionicHistory,$rootScope ) {

        $scope.goBack = function() {
        $ionicHistory.goBack();
        };

        $scope.addFurniture = function() {
            var elements = document.querySelectorAll('.draggw');
            for ( var i=0, len = elements.length; i < len; i++ ) {
            var element = elements[i];
            var xl = element.offsetLeft;
            var yt = element.offsetTop;
            var w = element.clientWidth;
            var h = element.clientHeight;
            $rootScope.box.push({type:"window", x:xl, y:yt, width:w, height:h});
        }
        console.log('AddFurniture',$rootScope.box);
        $state.go('AddFurniture');
        };

        var winds;
        $rootScope.window = [];
        var room,door;

        $scope.$on("$ionicView.loaded",function(){
            room = document.querySelector("#roomholderwindow");

            for(var i=0, len =$rootScope.box.length; i < len; i++){
            door = document.createElement("div");
            console.log($rootScope.box[i].width,$rootScope.box[i].height,
                        $rootScope.box[i].x,$rootScope.box[i].y);
            door.style.width = $rootScope.box[i].width+"px";
            door.style.height = $rootScope.box[i].height+"px";
            door.style.backgroundColor = "blue";
            door.style.position = "absolute";
            door.style.left = $rootScope.box[i].x+"px";
            door.style.top = $rootScope.box[i].y+"px";
            var zval = 100*i;
            door.style.zIndex = zval;
            door.style.float = "left";
            room.appendChild(door);
        }});

        $scope.addWindow = function()
        {
        console.log("Inside");
        var window = document.createElement("canvas");
        window.style.width = ($rootScope.window.width *10* $rootScope.scale)+"px";
        window.classList.add('draggw');
        window.style.height = $rootScope.gridh/2+"px";
        window.style.backgroundColor = "red";
        window.style.position = "absolute";
        room.appendChild(window);

            // get all draggie elements
        var draggableElems = document.querySelectorAll('.draggw');
            // array of Draggabillies
        var draggies = []
            // init Draggabillies
        for ( var i=0, len = draggableElems.length; i < len; i++ ) {
        var draggableElem = draggableElems[i];
        var draggie = new Draggabilly( draggableElem, {
            containment: true,
            grid: [$rootScope.gridw/2,$rootScope.gridh/2]
        });
        draggies.push( draggie );
        }
    }



})
