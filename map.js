var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

//This function creates a box with 10 random points via in it.
//Then the Voroni algorithm is used to created polygons around the points.
function createVoroniPolygons() {
  //Creates a bounding box named borderBox that will be used as a boundary for
  //the points to be generated in and for the voroni polygons to be made in.
  const borderBox = {
    bbox: [-97.930957, 29.885643, -97.857865, 29.920151],
  };
  //Creates 10 random points in borderBox.
  const points = turf.randomPoint(10, borderBox);
  //Creates voroni polygons around each point inside borderBox.
  const voronoiPolygons = turf.voronoi(points, borderBox);

  // Display the polygon on the map
  L.geoJSON(voronoiPolygons, {
    style: {
      color: "#ed168b",     // border color
      weight: 3,            // border thickness
      fillColor: "#f9b9dc", // fill color
      fillOpacity: 0.5      // fill transparency
    }
  }).addTo(map);
}
