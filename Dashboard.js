// filepath: /c:/Users/user/OneDrive/Documents/logfleet app/Dashboard.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const vehicles = [
    { id: 1, name: 'Vehicle 1', lat: 51.505, lon: -0.09 },
    { id: 2, name: 'Vehicle 2', lat: 51.515, lon: -0.1 },
    // Add more vehicles as needed
];

function Dashboard() {
    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {vehicles.map(vehicle => (
                    <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lon]}>
                        <Popup>
                            {vehicle.name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Dashboard;