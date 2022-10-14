/// <reference types="@types/google.maps" />

//Instructs other classes on requirements to be an argument to "addMarker"
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        //getElementById will return "null" if the element is not found
        const mapElement: HTMLElement | null = document.getElementById(divId);
        //when we check for "null", TS knows that inside the if block, mapElement will be of type "HTMLElement"
        if (mapElement != null) {
            this.googleMap = new google.maps.Map(mapElement, {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            });    
        }
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}