import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

function Dashboard({ token }) {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('YOUR_API_URL/fleet', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setVehicles(response.data);
            } catch (error) {
                console.error('Error fetching vehicles', error);
            }
        };
        fetchVehicles();
    }, [token]);

    return (
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
    );
}

export default Dashboard;