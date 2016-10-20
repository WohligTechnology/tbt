// var adminurl = "http://localhost:1337/";
var adminurl = "http://192.168.100.102:1337/";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
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
                url: 'http://thebachelortrip.com/mail.php?name=' + mydata.name + '&email=' + mydata.email + '&mobile=' + mydata.mobile + '&message=' + mydata.message,
                method: 'GET',
                withCredentials: true,
                data: mydata
            }).success(callback);
        },

        HomeSlider: function(callback) {
            $http({
                url: adminurl + 'RestApi/getHomeContent',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        DestinationTitle: function(callback) {
            $http({
                url: adminurl + 'RestApi/DestinationTitle',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        DestinationLand: function(callback) {
            $http({
                url: adminurl + 'RestApi/DestinationLand',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        ActivityLand: function(callback) {
            $http({
                url: adminurl + 'RestApi/ActivitiesLand',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        subscribe: function(formData, callback) {

            $http({
                url: adminurl + 'subscribe/save',
                method: 'POST',

                data: formData

            }).success(callback);
        },

        cityDetails: function(id, callback) {
            var data = {
                id: id,
            };
            $http({
                url: adminurl + 'RestApi/DestinationPage',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        ActivitiesImages: function(id, callback) {
            var data = {
                destination: id,
            };
            $http({
                url: adminurl + 'RestApi/ActivitiesImages',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        DestinationContent: function(id, callback) {
            var data = {
                id: id,
            };
            $http({
                url: adminurl + 'RestApi/DestinationContent',
                method: 'POST',
                withCredentials: true,
                data: data
            }).success(callback);
        },
        // addToCart: function(id, callback) {
        //     var data = {
        //         id: id,
        //         name:""
        //     };
        //     $http({
        //         url: adminurl + 'RestApi/addToCart',
        //         method: 'POST',
        //         withCredentials: true,
        //         data: data
        //     }).success(callback);
        // },

    };
});
