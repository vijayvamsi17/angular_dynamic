myApp.controller('homeCtrl', function($scope) {
 
});


myApp.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {  
  	  $http.get('json/contact.json').then(function(response){
  	  	$scope.contacts = response.data;
  	  	
  	  });
  }])
