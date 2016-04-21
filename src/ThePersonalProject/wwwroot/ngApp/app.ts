namespace ThePersonalProject {

    let app = angular.module('ThePersonalProject', ['ui.router', 'ngResource', 'ui.bootstrap', 'ngMap', 'MarkerModule'])

    app.config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: ThePersonalProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: ThePersonalProject.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('comments', {
                url: '/:skateParkId/comments',
                templateUrl: '/ngApp/views/comments.html',
                controller: ThePersonalProject.Controllers.CommentsController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });





}
