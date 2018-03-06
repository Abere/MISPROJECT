var app = angular.module('MISPROJECTApp',['lbServices', 'ngRoute']);

app.controller('milestoneController',function($scope,$http,Milestone){
    $scope.milestones = Milestone.find({});
    $scope.milestone = {milestoneName:null};
    $scope.loading=false;
});

app.controller('cityController',function ($scope, $http,City) {
  $scope.cities= City.find({});
  $scope.city={cityName:null};
  $scope.loading=false;

  $scope.add = function () {
    $scope.loading=true;
    City.create({cityName: $scope.city.cityName}).$promise
      .then(function (city) {
        $scope.cities.push(city);
        $scope.city.cityName='';
        $scope.loading=false;

      });;
  };
  $scope.delete = function($index){

    $scope.loading=true;
    var city = $scope.cities[$index];

    City.deleteById({ id: city.id}).$promise
      .then(function() {
        $scope.cities.splice($index,1);
        $scope.loading=false;
      });
  };

  $scope.update = function(city){
    city.$save();
  };


})
app.controller('activityController',function ($scope, $http,Activity){
  $scope.activities = Activity.find({});
  $scope.activity={activityTitle:null};
  $scope.loading=false;
  
})
app.controller('strategyController',function($scope,$http,Strategy){
    $scope.strategies = Strategy.find({});
    $scope.strategy = {strategyName:null};
    $scope.week = ['01','02','03','04','05'];
    $scope.idSelectedDayActive = null;
    $scope.selectedCells = [];
    $scope.setSelected = function (day) {
       for(let selectedCell in $scope.selectedCells){
           if($scope.selectedCells[selectedCell].day == day){ 
               $scope.selectedCells.splice(selectedCell,1);
               return ;
           }
        }
        $scope.selectedCells.push({'day':day});
   };    
    $scope.check = function(day){
        for(let selectedCell of $scope.selectedCells){
        if(selectedCell.day == day)
            return true
        }
            return false
    }  
    
    
    $scope.collapseAll = function(Strategy) {
    for(var i in $scope.Strategy) {
       if($scope.strategies[i] != strategy) {
           $scope.strategies[i].expanded = false;   
       }
   }
   Strategy.expanded = !Strategy.expanded;
};
})
app.controller('universityController',function($scope,$http,University){
    $scope.Universities = University.find({});
    $scope.university ={shortName:null};
    $scope.loading=false;
})
app.controller('colorController',function($scope,$http,ActivityStatusUpdate,Activity){
    $scope.data = {
        availableOptions:[
            {id:'0',name:'White',value:'0'},
            {id:'1',name:'Green',value:'1'},
            {id:'2',name:'Amber Green',value:'0.75'},
            {id:'3',name:'Amber Red',value:'-0.25'},
            {id:'4',name:'Red',value:'-0.5'}
        ],
        selectedOption: {id:'0',name:'White',value:'0'}
    };
    
    
    $scope.color = 'white';
    $scope.count = 0;
    
    $scope.onColorChange = function(){
        $scope.count  = $scope.count + 1;
        if($scope.count === 0){
            $scope.color = 'white';
        }
        else if($scope.count === 1){
            $scope.color = 'green';
        }else if($scope.count === 2){
            $scope.color = 'yellow';
        }else if($scope.count === 3){
            $scope.color = 'black';
        }else if($scope.count === 4){
            $scope.color = 'red';
            $scope.count = 0; 
        }
        
    }
    
  $scope.active = Activity.find({});    
  $scope.onSelectColorChange = function(index){
       console.log($scope.active[index].id);
       $scope.activ = Activity.findById({id:$scope.active[index].id}).$promise
       .then(function (data) {
        $scope.activityStatusUpdate = ActivityStatusUpdate.find({
            filter: {
            where: {
                activityId: $scope.data.id
            }
            }});
            console.log($scope.activ[0]);
            console.log($scope.activityStatusUpdate);
      });
  }
  
});

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/report',{
        templateUrl: '../views/universitytrafficlight.html'
        
    })
    .when('/u-comipled',{
        templateUrl: '../views/MOEtrafficlight.html'
    })
   
}]);


