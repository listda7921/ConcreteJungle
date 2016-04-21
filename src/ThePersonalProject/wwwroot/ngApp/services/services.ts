namespace ThePersonalProject.Services {
//This service is for adding markers and deleting markers
    export class AddMarkerService {

        public positions = [];

        
        addMarker(ll) {
            this.positions = [];
                this.positions.push(ll);
         
        }

        deleteMarker() {
            this.positions = [];
        }
    }
    angular.module('MarkerModule', []).service('addMarkerService', AddMarkerService);
}
