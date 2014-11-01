Application = Application || {};


Application.facebook = angular.module('facebook', [])
Application.maps = angular.module('maps', [])
app = angular.module('DD', ['ui.router', 'maps'])
Application.core = app

Application.core.service('UserDefaults', ()->
    _pin = '';
    _isLoggedIn = false;

    isLoggedIn : ()->
        return _isLoggedIn;

    setIsLoggedIn : (status)->
        _isLoggedIn = status;

    hasPin : ()->
        return _pin != '';

    setPin : (pin)->
        _pin = pin;
)

Application.core.config(['$stateProvider', ($stateProvider) ->
     $stateProvider.state('app', {
         url: '',
         views: {
             'navbar': { controller:'NavbarCtrl', templateUrl: 'templates/navbar.html' },
             'content': { templateUrl: 'templates/login.html' }
         }
     })

]);
#
Application.core.controller('NavbarCtrl', ['$scope', ($scope)->
    $scope.model =
        name : 'test';#$stateProvider.state.name;

#        isActive : (route) ->
#            route == $location.path()
#
#        isAdmin = () ->
#            return is_admin;

])
#
Application.core.controller('HomepageCtrl', ['$scope', ($scope)->
    $scope.model=
        name: "Login"
        isLoggedIn : ()->
            return true;
        hasPin : ()->
            return true;
])