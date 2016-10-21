angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'wu.masonry'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


        NavigationService.HomeSlider(function(data) {
            $scope.mySlidestop = data.data.HomeSlider;

            $scope.popularDestination = data.data.popularDestination;

            $scope.popularAttraction = data.data.popularAttraction;
            $scope.dropDown = data.data.DestinationDropdown;

            $scope.mySlidesss = data.data.whatsHotBanner;
            console.log("$scope.mySlides", $scope.mySlidesss);
        });

        $scope.formData = {};
        $scope.formComplete = false;
        $scope.formSubmit = function(formData) {
            console.log("formData", formData);
            NavigationService.subscribe(formData, function(data) {
                console.log("data", data.value);
                if (data.value === true) {
                    $scope.formComplete = true;
                }
                $timeout(function() {
                    $scope.formComplete = false;
                    $scope.formData = {};
                }, 2000);

            })
        }

        //top slider
        //   $scope.mySlidestop = [
        //
        //   //   {
        //   //     img: "img/Group-35.jpg",
        //   // }, {
        //   //     img: "img/Group-35.jpg",
        //   // }, {
        //   //     img: "img/Group-35.jpg",
        //   // }, {
        //   //     img: "img/Group-35.jpg"
        //   // }
        // ];

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
        $scope.changeDestination = function(id) {
            console.log(id);
            NavigationService.getChangeDestination(id, function(data) {
                $scope.changeDestData = data.data.Images;
                console.log($scope.changeDestData.length);
                var images = _.groupBy($scope.changeDestData, function(n) {
                    if (_.isEmpty(n.image1)) {
                        return "bigImage";
                    } else {
                        return "smallImage";
                    }
                });
                if (images.smallImage) {
                    images.smallImage = _.chunk(images.smallImage, 3);
                }
                $scope.activityLand = images;
                if (images.bigImage.length >= images.smallImage.length) {
                    $scope.activityLoop = _.times(images.bigImage.length, Number);
                } else {
                    $scope.activityLoop = _.times(images.smallImage.length, Number);
                }
                console.log($scope.activityLoop);
            });
        }
        NavigationService.ActivityLand(function(data) {
            console.log(data);
            $scope.myDropdown = data.data.DestinationDropdown;
            var images = _.groupBy(data.data.Images, function(n) {
                if (_.isEmpty(n.image1)) {
                    return "bigImage";
                } else {
                    return "smallImage";
                }
            });
            if (images.smallImage) {
                images.smallImage = _.chunk(images.smallImage, 3);
            }
            $scope.activityLand = images;
            if (images.bigImage.length >= images.smallImage.length) {
                $scope.activityLoop = _.times(images.bigImage.length, Number);
            } else {
                $scope.activityLoop = _.times(images.smallImage.length, Number);
            }
            console.log($scope.activityLoop);



        });
        NavigationService.ActivityLand(function(data) {
            $scope.Banner = data.data.Banner;
        });


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

        $scope.show = {};
        $scope.show = false;

        NavigationService.DestinationLand(function(data) {

            $scope.DestinationLand = data.data;
            console.log("$scope.DestinationLand", $scope.DestinationLand);
            $scope.allDestination = _.take($scope.DestinationLand.allDestination, 6);
            $scope.viewMoreDest = function() {
                $scope.show = true;
                $scope.allDestination = $scope.DestinationLand.allDestination;
            };
            $scope.viewLessDest = function() {
                $scope.show = false;
                $scope.allDestination = _.take($scope.DestinationLand.allDestination, 6);
            }
        })

    })
    .controller('PattayaCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $uibModal) {

        $scope.template = TemplateService.changecontent("pattaya");
        $scope.menutitle = NavigationService.makeactive("Pattaya");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';

        $scope.oneAtATime = true;

        TemplateService.menu = "";
        $scope.selectedAll = {};
        $scope.selectedAll.type = true;
        $scope.checkAllLocation = function() {
            // if ($scope.selectedAllLocation) {
            //     $scope.selectedAllLocation = false;
            // } else {
            //     $scope.selectedAllLocation = true;
            // }
            var toggleStatusLocation = $scope.selectedAll.type;
            _.forEach($scope.typeArr, function(location) {
                location.model = toggleStatusLocation;
            });
            // $scope.searchExpert();

        };

        $scope.open4 = function() {
            $scope.modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thankYou.html",
                scope: $scope
            });
        };
        $scope.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        }, {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }];
        $scope.formComplete = false;
        $scope.enquiryData = {};
        $scope.enquirySubmit = function(input) {
            console.log('input', input);
            NavigationService.enquiryForm($scope.enquiryData, function(data) {
                console.log("data", data.value);
                if (data.value === true) {
                    //   $timeout(function() {
                    //     $scope.open4();
                    //   },1000);
                    //   // $scope.open4();
                    //   $timeout(function() {
                    //     $scope.modalInstance.close();
                    //       // $scope.formComplete = false;
                    //       // $scope.enquiryData = {};
                    //   },6000);
                    //     // $scope.formComplete = true;
                }

                // console.log('input',input);
                // console.log('data',data);
            });
        }
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

        $scope.goToFunction = function(id) {
            NavigationService.DestinationContent(id, function(data) {
                $scope.DestinationTitle = data.data.getTitle;
                console.log("$scope.DestinationTitle", $scope.DestinationTitle);
            });
        };
        $scope.cart = false;
        $scope.addPackageToCart = function(id) {
            console.log("id", id);
            $scope.cart = true;

        }
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
        $scope.viewLess = false;
        $scope.viewMore = false;
        $scope.more = false;
        $scope.checkIt = {};

        $scope.loadLessPackage = function() {
            var myarr = [];
            NavigationService.cityDetails($stateParams.id, function(data) {
                $scope.getTitle = data.data.getTitle;
                $scope.getDestination = data.data.getDestination;
                $scope.getPackage = data.data.getPackage;
                $scope.getActivity = data.data.getActivity;
                $scope.getActivityArr = _.cloneDeep($scope.getActivity);
                $scope.getPackageArr = _.cloneDeep($scope.getPackage);
                $scope.viewMore = true;
                $scope.getPackage = _.take($scope.getPackage, 8);
                $scope.getActivity = _.take($scope.getActivity, 4);
            });


        };

        $scope.loadLessPackage();
        $scope.loadMorePackage = function() {
            console.log('inside loadmore fun');
            $scope.more = true;
            $scope.viewMore = false;
            $scope.viewLess = true;
            $scope.getPackage = $scope.getPackageArr;
            $scope.getActivity = $scope.getActivityArr;
        };

        //         NavigationService.cityDetails($stateParams.id, function(data) {
        //             console.log("data", data.data);
        //             $scope.getTitle = data.data.getTitle;
        //             console.log('$scope.getTitle', $scope.getTitle);
        //             $scope.getActivity = data.data.getActivity;
        //             $scope.getActivity = _.take($scope.getActivity, 8);
        // $scope.viewLess = false;
        //             //  _.forEach($scope.getActivity,function(key){
        //             //    $scope.getActivity.type=="all"
        //             //
        //             //
        //             //  })
        //             $scope.getDestination = data.data.getDestination;
        //             $scope.getPackage = data.data.getPackage;
        //             $scope.getPackage = _.take($scope.getPackage, 8);
        //             console.log('$scope.getPackage', $scope.getPackage);
        //             $scope.loadMorePackage = function() {
        //                 $scope.getPackage = data.data.getPackage;
        //                 $scope.getPackage.tabName = 'View More';
        //
        //                 $scope.viewMore = false;
        //                 $scope.viewLess = true;
        //
        //             };
        //             $scope.loadLessPackage = function() {
        //                 $scope.getPackage = _.take($scope.getPackage, 8);
        //
        //
        //
        //             };
        //
        //             $scope.loadMoreActivity = function() {
        //                 $scope.more = true;
        //                 $scope.getActivity = data.data.getActivity;
        //                 $scope.getPackage.tabName = 'View Lesss';
        //             };
        //             $scope.loadLessActivity = function() {
        //                 $scope.more = false;
        //                 $scope.getActivity = _.take($scope.getActivity, 8);
        //             };
        //
        //
        //
        //         });



        // NavigationService.DestinationTitle(function(data) {
        //     console.log(data.data);
        //     $scope.getTitle=data.data.getTitle;
        //     console.log("$scope.getTitle",$scope.getTitle);
        // })
        // $scope.searchFun=function(){
        //   switch (expression) {
        //     case expression:
        //
        //       break;
        //     default:
        //
        //   }
        // }

    })
    .controller('Pattaya2Ctrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {

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

        NavigationService.RestApiPattaya2($stateParams.id, function(data) {
            console.log(data.data);
            $scope.getPattaya2 = data.data.packageDetails;
            console.log("$scope.getPattaya2", $scope.getPattaya2);
        })

    })
    .controller('Whats-hot-moreCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {

        $scope.template = TemplateService.changecontent("whats-hot-more");
        $scope.menutitle = NavigationService.makeactive("Whats-hot-more");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.tabs = 'az';
        $scope.classp = 'active-tab';
        $scope.classv = '';

        $scope.oneAtATime = true;
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
        NavigationService.whatsHotMore($stateParams.id,function(data) {
            $scope.getOneWhatsHot = data.data.Details[0];
            console.log(  $scope.getOneWhatsHot);
        });

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
        NavigationService.HomeSlider(function(data) {
            $scope.mySlidesss = data.data.whatsHotBanner;
        });
        NavigationService.whatsHot(function(data) {
            $scope.myEvents = data.data.Events;
            console.log(  $scope.myEvents);
        });
        // $scope.mySlides = [{
        //     img: "img/qwe.jpg",
        //     events: "TOMMOROWLAND",
        //     date: "27th Agust,2016"
        //
        //
        // }, {
        //     img: "img/qwe.jpg",
        //     events: "TOMMOROWLAND",
        //     date: "27th Agust,2016"
        //
        //
        // }, {
        //     img: "img/qwe.jpg",
        //     events: "TOMMOROWLAND",
        //     date: "27th Agust,2016"
        //
        //
        // }, {
        //     img: "img/qwe.jpg",
        //     events: "TOMMOROWLAND",
        //     date: "27th Agust,2016"
        //
        //
        // }];

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
        // console.log("Language CLicked");

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
