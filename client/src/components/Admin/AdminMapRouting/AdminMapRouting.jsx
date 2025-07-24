import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet.locatecontrol';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import DriverMark from '../../../../public/images/DriverMark.svg';
import styles from './AdminMapRouting.module.css'; // Import the CSS Module for this component

const MapComponent = () => {
  const [searchedCoordinates, setSearchedCoordinates] = useState(null);

  useEffect(() => {
    // Map initialization
    const map = L.map('map').setView([29.9537564, 31.5370003], 13);
    map.zoomControl.setPosition('topright');

    // OSM layer
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);

    // Streets layer
    const googleStreets = L.tileLayer('https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleStreets.addTo(map);

    // Initialize routing control with custom line options
    const routingControl = L.Routing.control({
      waypoints: [],
      routeWhileDragging: true,
      addWaypoints: false, // Disable adding waypoints by clicking/dragging the route line
      lineOptions: {
        addWaypoints: false // Disable adding waypoints by clicking/dragging the route line
      },
      show: false, // Disable the route instructions panel
      createMarker: function() {
        return null; // No markers created
      }
    }).addTo(map);

    // Leaflet search
    const geocoder = L.Control.geocoder().addTo(map);

    // Add an event listener for the markGeocode event
    geocoder.on('markGeocode', function(e) {
      const latlng = e.geocode.center;

      // Create marker at the searched location
      const searchMarker = L.marker(latlng, {
        icon: L.icon({
          iconUrl: DriverMark,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }).addTo(map);

      // Optionally, pan the map to the searched location
      map.setView(latlng, 17); // Adjust zoom level as needed

      // Store the coordinates in state
      setSearchedCoordinates(latlng);

      // Log the coordinates or handle them as needed
      console.log('Searched location coordinates:', latlng);
    });

    // Map scale
    const scale = L.control.scale();
    scale.addTo(map);

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this runs only once

  // Function to handle the add button click
  const handleAddButtonClick = () => {
    if (searchedCoordinates) {
      console.log('Added location coordinates:', searchedCoordinates);
    }
  };

  return (
        <div id="map" className={styles.mapContainer}>      
          <button onClick={handleAddButtonClick} className={styles.addButton}>Add</button>
        </div>

  );
};

export default MapComponent;