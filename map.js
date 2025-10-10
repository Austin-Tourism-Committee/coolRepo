var map = L.map('map').setView([29.8884, -97.9384], 14);

var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' + mapLink + ' Contributors',
  maxZoom: 18,
}).addTo(map);

function addPolygon() {
  // Define coordinates (longitude, latitude)
  var polygon = turf.polygon([[
    [-97.9530, 29.8890],
    [-97.9380, 29.8890],
    [-97.9380, 29.8780],
    [-97.9530, 29.8780],
    [-97.9530, 29.8890] // close the loop
  ]], {
    name: "San Marcos Polygon"
  });

  // Display the polygon on the map
  L.geoJSON(polygon, {
    style: {
      color: "#0077ff",     // border color
      weight: 3,            // border thickness
      fillColor: "#66ccff", // fill color
      fillOpacity: 0.5      // fill transparency
    }
  }).addTo(map);
}

// Call the function
addPolygon();
