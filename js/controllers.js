angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'wu.masonry'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        //top slider
        $scope.mySlidestop = [{
            img: "img/Group-35.jpg",
        }, {
            img: "img/Group-35.jpg",
        }, {
            img: "img/Group-35.jpg",
        }, {
            img: "img/Group-35.jpg"
        }];

        // whats hot slide
        $scope.mySlides = [{
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }];

        // $scope.mySlides = [
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        // ];
    })
    .controller('ActivityCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("activity");
        $scope.menutitle = NavigationService.makeactive("Activity");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })

.controller('StaticCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {

    $scope.template = TemplateService.changecontent("tbtstatic");
    $scope.menutitle = NavigationService.makeactive("The Bachelor Trip");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/static_header.html";
    TemplateService.footermenu = "views/static_footermenu.html";
    TemplateService.footer = "views/static_footer.html";
    $scope.flags = {};
    $scope.flags.thankyou = false;
    $scope.details = function() {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/details.html",
            scope: $scope,
            windowClass: "width80"
        });
    };
    $scope.formData = {};
    $scope.submitForm = function() {
        $scope.flags.thankyou = false;
        console.log("ffff", $scope.formData);
        NavigationService.submitForm($scope.formData, function(res) {
            if (res.value) {
                $scope.flags.thankyou = true;
                $scope.flags.mailform = true;
                $scope.formData = {};
            } else {

            }
        });
    };

})

.controller('DestinationCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("destination");
        $scope.menutitle = NavigationService.makeactive("Destination");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('PattayaCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("pattaya");
        $scope.menutitle = NavigationService.makeactive("Pattaya");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';

        $scope.oneAtATime = true;

        $scope.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        }, {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
        $scope.tabchanges = function(tabs, a) {

            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-tab";
                $scope.classv = '';

            } else {

                $scope.classp = '';
                $scope.classv = "active-tab";
            }
        };

    })
    .controller('Pattaya2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("pattaya2");
        $scope.menutitle = NavigationService.makeactive("Pattaya2");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.data = [{
            img: "img/p1.jpg",
            day: "Day 1",
            li: "Welcome by our guide at the airport",
            li: "Hotel Transfer (Minivan)",
            li: "Breakfast along the way",
            li: "Pool Party",
            li: "Lunch",
            li: "VIP night club",

        }, {
            img: "img/p2.jpg",
            day: "Day 2",
            li: "Welcome by our guide at the airport",
            li: "Hotel Transfer (Minivan)",
            li: "Breakfast along the way",
            li: "Pool Party",
            li: "Lunch",

        }, {
            img: "img/p3.jpg",
            day: "Day 3",
            li: "Welcome by our guide at the airport",
            li: "Hotel Transfer (Minivan)",
            li: "Breakfast along the way",
            li: "Pool Party",

        }, {
            img: "img/p4.jpg",
            day: "Day 4",
            li: "Welcome by our guide at the airport",
            li: "Hotel Transfer (Minivan)",
            li: "Breakfast along the way",
            li: "Pool Party",
            li: "Lunch",
            li: "VIP night club",

        }, {
            img: "img/p1.jpg",
            day: "Day 5",
            li: "Welcome by our guide at the airport",
            li: "Hotel Transfer (Minivan)",
            li: "Breakfast along the way",
            li: "Pool Party",
            li: "Lunch",
            li: "VIP night club",

        }]


    })
    .controller('Whats-hot-moreCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("whats-hot-more");
        $scope.menutitle = NavigationService.makeactive("Whats-hot-more");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('WhatsHotCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {

        $scope.template = TemplateService.changecontent("whats-hot");
        $scope.menutitle = NavigationService.makeactive("Whats Hot");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.flags = {};
        $scope.flags.thankyou = false;
        $scope.details2 = function() {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/slider.html",
                scope: $scope,
                windowClass: "width80"
            });
        };
        $scope.mySlides = [{
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }, {
            img: "img/qwe.jpg",
            events: "TOMMOROWLAND",
            date: "27th Agust,2016"


        }];

    })
    .controller('CustomisationCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("customisation");
        $scope.menutitle = NavigationService.makeactive("Customisation");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.footermenu = "views/custom_footermenu.html";
        TemplateService.footer = "views/custom_footer.html";


    })

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
