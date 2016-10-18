// var adminurl = "http://localhost:1337/";
var adminurl = "http://192.168.100.105:1337/";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      anchor: "home"
    }]
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    submitForm: function(mydata, callback) {
      $http({
        url: 'http://thebachelortrip.com/mail.php?name='+mydata.name+'&email='+mydata.email+'&mobile='+mydata.mobile+'&message='+mydata.message,
        method: 'GET',
        withCredentials: true,
        data: mydata
      }).success(callback);
    },

    HomeSlider: function(callback) {
      $http({
        url:adminurl + 'RestApi/getHomeContent',
        method: 'POST',
        withCredentials: true
      }).success(callback);
    },
  

  };
});
