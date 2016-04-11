namespace ThePersonalProject.Controllers {


    export class HomeController {

        public skatePark;
        public message: any = {};
        public name; 

        get positions() {
            return this.addMarkerService.positions;
        }

        constructor(private $http: ng.IHttpService, private $scope: ng.IScope, private addMarkerService: ThePersonalProject.Services.AddMarkerService) {

            $http.get('/api/SkatePark')
                .then((response) => {
                    this.skatePark = response.data;
                });
        }

        //$scope.Apply includes the variable assignments in angular, since the on-click method executed outside of angular
        getInfo(idx) {
            this.$scope.$apply(() => {
                this.message.name = this.skatePark[idx].name;
                this.message.location = this.skatePark[idx].location;
            });
        }
        // `THIS` IS THE MARKER
        //problems with using "this". "this" is defined inside the Google maps API instead of the controllers scope.
        // angular.element(#'map') grabs the parent scope of the element, accesses the controller from within the object, and fires the 'getinfo()' method passing in the object as idx.
        //'id' returns as "marker-'id'". using substring at the 7th index removes "marker-"
        public getInfoCallback() {

            angular.element('#map').scope()['controller']
                .getInfo(parseInt(this['id'].substring(7)));
        }
        //$scope.Apply includes the variable assignments in angular, since the on-click method executed outside of angular
        public addMarker(ll) {
            this.$scope.$apply(() => {
                this.addMarkerService.addMarker(ll);
            });
        }
        //when map is clicked, this method grabs the scope of the map and calls addMarker() passing in lat and long 
        public addMarkerCallback(event) {
            angular.element('#map').scope()['controller']
                .addMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        }
        //deletes the marker
        public deleteMarker() {
            this.addMarkerService.deleteMarker();
        }

        public saveMarker() {
            let skateSpot = {
                location: `${this.addMarkerService.positions[0].lat.toString()}, ${this.addMarkerService.positions[0].lng.toString()}`,
                name: this.name
            };
            console.log(skateSpot.location);
            console.log(skateSpot.name);
            this.$http.post('/api/SkatePark', skateSpot)
                .then((response) => {
                    return this.message = "Your skate spot has been saved.";
                });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
