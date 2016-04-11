namespace ThePersonalProject.Services {
//This service is for adding markers and deleting markers
    export class AddMarkerService {

        public positions = [];

        
        addMarker(ll) {
            if (this.positions.length < 1) {
                this.positions.push(ll);
            }
            else {
                alert("Only one skate spot can be added at a time");
            }
        }

        deleteMarker() {
            this.positions = [];
        }
    }
    angular.module('MarkerModule', []).service('addMarkerService', AddMarkerService);
}
