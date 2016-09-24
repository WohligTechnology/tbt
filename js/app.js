// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
<<<<<<< HEAD
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
=======
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'StaticCtrl'
    })
>>>>>>> 31e5fdc78608247daed5995c19a5a2207672c6dc
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
    $stateProvider
        .state('tbtstatic', {
            url: "/tbtstatic",
            templateUrl: "views/template.html",
            controller: 'StaticCtrl'
        })
        .state('customisation', {
            url: "/customisation",
            templateUrl: "views/template.html",
            controller: 'CustomisationCtrl'
        })

    .state('destination', {
            url: "/destination",
            templateUrl: "views/template.html",
            controller: 'DestinationCtrl'
        })
        .state('upcomingEvents', {
            url: "/upcomingEvents",
            templateUrl: "views/template.html",
            controller: 'UpcomingEventsCtrl'
        })
        .state('pattaya', {
            url: "/pattaya",
            templateUrl: "views/template.html",
            controller: 'PattayaCtrl'
        })
        .state('pattaya2', {
            url: "/pattaya2",
            templateUrl: "views/template.html",
            controller: 'Pattaya2Ctrl'
        })
        .state('whats-hot', {
            url: "/whats-hot",
            templateUrl: "views/template.html",
            controller: 'WhatsHotCtrl'
        })
        .state('activity', {
            url: "/activity",
            templateUrl: "views/template.html",
            controller: 'ActivityCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
