import { User } from "./User";
import { Company } from "./Company";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(private dibId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(dibId), {
      zoom: 2,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hello here!"
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
