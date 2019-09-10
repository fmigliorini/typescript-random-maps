export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(private dibId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(dibId), {
      zoom: 5,
      center: { lat: 0, lng: 0 }
    });
  }
}
