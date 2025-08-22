import React, { useState, useEffect } from 'react';


import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function PropertyMap() {
  // State for markers and boundaries
  const [properties, setProperties] = useState({ markers: [], boundaries: [] });

  // Fetch property data from JSON or API
  useEffect(() => {
    // Replace with API endpoint if needed
    fetch('/data/properties.json')
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch(() => {
        // Fallback sample data
        setProperties({
          markers: [
            { id: 1, position: [51.505, -0.09], address: '123 Main St', price: '£450,000' },
            { id: 2, position: [51.51, -0.1], address: '456 Park Ave', price: '£620,000' },
          ],
          boundaries: [
            {
              id: 101,
              type: 'Polygon',
              coordinates: [
                [51.505, -0.09],
                [51.505, -0.08],
                [51.51, -0.08],
                [51.51, -0.09],
              ],
              address: 'Main St Property Lot',
              area: '1200 sq ft',
            },
          ],
        });
      });
  }, []);

  const styles = { boundary: { color: '#3388ff', weight: 3, fillOpacity: 0.2 } };

  return (
    <div className="h-[70vh] md:h-[90vh] w-full overflow-hidden shadow-md">
      <MapContainer center={[51.507, -0.095]} zoom={14} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Property Boundaries */}
        {properties.boundaries.map((boundary) => (
          <GeoJSON
            key={`boundary-${boundary.id}`}
            data={{
              type: boundary.type,
              coordinates: [boundary.coordinates],
            }}
            style={styles.boundary}
            onEachFeature={(_, layer) => {
              layer.bindPopup(`
                <div class="p-2">
                  <h3 class="font-bold">Property Boundary</h3>
                  <p>${boundary.address}</p>
                  <p>Area: ${boundary.area}</p>
                </div>
              `);
            }}
          />
        ))}

        {/* Property Markers */}
        {properties.markers.map((marker) => (
          <Marker key={`marker-${marker.id}`} position={marker.position}>
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">Property #{marker.id}</h3>
                <p>{marker.address}</p>
                <p className="text-green-600 font-medium">{marker.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
