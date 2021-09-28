export default class MapFromGoogle {
  constructor(options = {}) {
    this.options = options;
    this.radius = options.radius || 100;
  }

  async getPanoID(address, radius = this.radius) {
    const geocoder = new window.google.maps.Geocoder();
    const streetViewService = new window.google.maps.StreetViewService();
    const location = await geocoder.geocode({
      address
    });
    return streetViewService.getPanorama({
      location,
      radius
    }).then(res => res.data);
  }
}
