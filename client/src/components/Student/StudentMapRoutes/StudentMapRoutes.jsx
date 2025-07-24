import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet.locatecontrol';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import DriverMark from '../../../assets/images/DriverMark.svg';
import styles from './StudentMapRoutes.module.css'; // Import the CSS Module for this component

const MapComponent = () => {
  const [routeInfo, setRouteInfo] = useState({ distance: 0, time: 0 });
  const [routingControl, setRoutingControl] = useState(null);
  const currentLocationMarkerRef = useRef(null); // Use ref for the current location marker

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

    // Intermediate point
    const StopPoint = L.latLng(30.1068, 31.3671);

    // Add intermediate marker
    const redIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.marker(StopPoint, { icon: redIcon }).addTo(map);

    // Initialize routing control with custom line options
    const newRoutingControl = L.Routing.control({
      waypoints: [L.latLng(29.9537564, 31.5370003), StopPoint],
      routeWhileDragging: true,
      addWaypoints: false, // Disable adding waypoints by clicking/dragging the route line
      createMarker: function (i, wp, n) {
        if (i === n - 1) {
          return L.marker(wp.latLng, { icon: redIcon }); // Destination marker
        }
      },
      show: false, // Hide the itinerary panel
      altLineOptions: {
        styles: [{ color: 'black', opacity: 0.15, weight: 9 }]
      }
    }).addTo(map);

    // Hide the routing control container
    if (newRoutingControl._container) {
      newRoutingControl._container.style.display = 'none';
    }

    // Listen for route found events to update distance and time
    newRoutingControl.on('routesfound', (e) => {
      const routes = e.routes;
      if (routes && routes.length > 0) {
        const route = routes[0];
        setRouteInfo({
          distance: (route.summary.totalDistance / 1000).toFixed(2), // convert to km and format
          time: (route.summary.totalTime / 60).toFixed(2) // convert to minutes and format
        });
      }
    });

    setRoutingControl(newRoutingControl);

    // Function to handle location found event
    const onLocationFound = (e) => {
      const currentLocation = e.latlng;

      // Remove the previous current location marker if it exists
      if (currentLocationMarkerRef.current) {
        map.removeLayer(currentLocationMarkerRef.current);
      }

      // Add the new current location marker
      const newMarker = L.marker(currentLocation, {
        icon: L.icon({
          iconUrl: DriverMark,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }).addTo(map);

      // Update the current location marker ref
      currentLocationMarkerRef.current = newMarker;

      // Update routing waypoints with the current location and the stop point
      const waypoints = [currentLocation, StopPoint];
      newRoutingControl.setWaypoints(waypoints);
    };

    // Function to handle location error event
    const onLocationError = (e) => {
      alert(e.message);
    };

    // Request user's location and track it
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
    map.locate({ watch: true, setView: true, maxZoom: 16 });

    // Current location control
    L.control.locate({
      position: 'topleft', // Change position to top left
      setView: 'untilPan',
      keepCurrentZoomLevel: true,
      flyTo: true,
      onLocationFound: function (e) {
        map.setView(e.latlng, 17); // Adjust zoom level for 200m scale
      },
      strings: {
        title: "Relocate"
      },
      locateOptions: {
        enableHighAccuracy: true
      }
    }).addTo(map);

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

  return (
    <div className={styles.StudentMapContainer}>
      <div id="map" className={styles.mapContainer}>
        <div className={styles.routeInfo}>
          <p>Estimated Distance: {routeInfo.distance} km</p>
          <p>Estimated Time: {routeInfo.time} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;