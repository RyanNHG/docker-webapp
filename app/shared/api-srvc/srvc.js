module.exports = ['$http', function($http){

  var srvc = this;

  var keystoneUrl = 'http://localhost:3000';

  srvc.get = function(path){
    return $http.get(keystoneUrl + path);
  };

}];