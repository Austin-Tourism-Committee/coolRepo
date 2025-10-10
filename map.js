var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="https://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);


    var line = turf.lineString([
      [-98.0000, 30.0000],
      [-97.9384, 29.8884],
      [-97.9000, 29.8000],
    ]);
    var length = turf.length(line, { units: "miles" })

    L.geoJSON(line, {
      style: {
        color: 'red',
        weight: 3
      }
    }).addTo(map);
