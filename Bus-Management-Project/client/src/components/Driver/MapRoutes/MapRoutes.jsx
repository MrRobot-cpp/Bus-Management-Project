// MapComponent.jsx
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet.locatecontrol';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import styles from './MapRoutes.module.css'; // Import the CSS Module for this component

const MapComponent = () => {
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null);

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
    const googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    googleStreets.addTo(map);

    // Intermediate and destination points
    const intermediatePoint = L.latLng(30.1068, 31.3671);
    const destinationPoint = L.latLng(30.1711, 31.4917);

    // Add intermediate marker
    const blueIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.marker(intermediatePoint, { icon: blueIcon }).addTo(map);

    // Add destination marker
    const redIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.marker(destinationPoint, { icon: redIcon }).addTo(map);

    // Function to create a blue arrow icon
    const createBlueArrowIcon = () => {
      return L.divIcon({
        className: styles['custom-div-icon'],
        html: '<div class="' + styles.arrow + '"></div>',
        iconSize: [25, 25],
        iconAnchor: [12, 12]
      });
    };

    // Initialize routing control with custom line options
    const routingControl = L.Routing.control({
      waypoints: [L.latLng(29.9537564, 31.5370003), intermediatePoint, destinationPoint],
      routeWhileDragging: true,
      addWaypoints: false, // Disable adding waypoints by clicking/dragging the route line
      lineOptions: {
        addWaypoints: false // Disable adding waypoints by clicking/dragging the route line
      },
      createMarker: function(i, wp, n) {
        if (i === 0) {
          return L.marker(wp.latLng, { icon: blueIcon }); // Start marker
        }
        if (i === n - 1) {
          return L.marker(wp.latLng, { icon: redIcon }); // Destination marker
        } else {
          return L.marker(wp.latLng, { icon: blueIcon }); // Intermediate marker
        }
      }
    }).addTo(map);

    // Update route dynamically as the user's location changes
    const onLocationFound = (e) => {
      const currentLocation = e.latlng;

      // Remove previous marker if exists
      if (currentLocationMarker) {
        map.removeLayer(currentLocationMarker);
      }

      // Create marker with blue arrow icon
      const marker = L.marker(currentLocation, {
        icon: createBlueArrowIcon()
      }).addTo(map);

      // Update routing waypoints with current location
      const waypoints = [currentLocation, intermediatePoint, destinationPoint];
      routingControl.setWaypoints(waypoints);

      // Update state to track current location marker
      setCurrentLocationMarker(marker);
    };

    // Handle location errors
    const onLocationError = (e) => {
      alert(e.message);
    };

    // Request user's location and track it
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
    map.locate({ watch: true, setView: true, maxZoom: 16 });

    // Current location control
    L.control.locate().addTo(map);

    // Leaflet search
    L.Control.geocoder().addTo(map);

    // Map scale
    const scale = L.control.scale();
    scale.addTo(map);

    // Cleanup function
    return () => {
      map.off('locationfound', onLocationFound);
      map.off('locationerror', onLocationError);
      map.remove();
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div id="map" className={styles.mapContainer}></div>;
};

export default MapComponent;
