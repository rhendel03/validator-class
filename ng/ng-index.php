<!DOCTYPE html>
<html lang="en-US">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="/dummy/ng/bower_components/tether/dist/js/tether.min.js" ></script>
    <script src="/dummy/ng/bower_components/bootstrap/dist/js/bootstrap.min.js"> </script>
    <script src="/dummy/ng/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/dummy/ng/bower_components/angular/angular.min.js"></script>
    <script src="/dummy/ng/bower_components/ng-lodash/build/ng-lodash.min.js"></script>
    <script src="/dummy/ng/bower_components/angular-timer/dist/assets/js/angular-timer-bower.js"></script>
    <script src="/dummy/ng/bower_components/angular-timer/dist/assets/js/angular-timer-all.min.js"></script>
</head>

<body>
<div ng-app="myList" ng-controller="listController">
    <div>
    <h3><timer ng-class="" countdown="timeRemaining" max-time-unit="'minute'" interval="1000" timer-stopped="console.log('cheating')">{{mminutes}} minute{{minutesS}}, {{sseconds}} second{{secondsS}}</timer></h3>
        timer :{{ timeRemaining }}

    </div>
    <div ng-repeat="card in cards" class="card">
        <div class="card-block">
            <h4 class="card-title">Card #{{card}}</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" ng-class="isRegistered(card) ? 'btn-danger' : 'btn-primary'" class="btn">Go somewhere</a>
        </div>
    </div>
</div>


<script> 
	var app = angular.module("myList", ['ngLodash', 'timer']);
	app.controller("listController", function($scope){
		$scope.name = "Rhen";
        $scope.cards=[1,2,3,4,5,6,7,8,9,10];
		$scope.SelectedCard = [1,3,4,6,7];
		$scope.timeRemaining = 29800;

        $scope.$on('timer-stopped', function (){
            console.log('Stop Cheating');
        });
		$scope.isRegistered = function (id){
		    return _.includes($scope.SelectedCard , id);
        }
	});
</script>

</body>
</html>