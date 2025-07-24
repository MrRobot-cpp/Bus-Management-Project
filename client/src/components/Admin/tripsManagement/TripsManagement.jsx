import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './TripsManagement.module.css';
import AdminMapRouting from '../AdminMapRouting/AdminMapRouting';

const busTypeOptions = [
  { type: "Mini Bus", seats: 15 },
  { type: "Double Decker", seats: 60 },
  { type: "Coach", seats: 30 }
];

function TripsManagement() {
  const [routes, setRoutes] = useState([
    {
      id: parseInt(uuidv4(), 16), 
      'opening Time': new Date("2024-05-11").toISOString().split('T')[0],
      'start Time': '10:00 AM',
      "end Time": '11:00 AM',
      'bus type': 'Mini Bus',
      seats: 15,
      'Driver Assigned': ''
    },
    // Additional initial routes...
  ]);

  const [isAdding, setIsAdding] = useState(false);

  const handleAddRoute = () => {
    if (!isAdding) {
      const newRoute = {
        id: uuidv4(),
        'opening Time': new Date().toISOString().split('T')[0],
        'start Time': '',
        'end Time': '',
        'bus type': '',
        seats: 0,
        'Driver Assigned': ''
      };
      setRoutes((prevRoutes) => [...prevRoutes, newRoute]);
      setIsAdding(true);
    }
  };

  const handleSaveNewRoute = (newRouteData) => {
    const busTypeOption = busTypeOptions.find(option => option.type === newRouteData['bus type']);
    if (busTypeOption) {
      newRouteData.seats = busTypeOption.seats;
    }

    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === newRouteData.id ? newRouteData : route
      )
    );
    setIsAdding(false);
  };

  const handleDeleteRoute = (id) => {
    setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
  };

  const handleUpdateRoute = (updatedRoute) => {
    const busTypeOption = busTypeOptions.find(option => option.type === updatedRoute['bus type']);
    if (busTypeOption) {
      updatedRoute.seats = busTypeOption.seats;
    }

    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === updatedRoute.id ? updatedRoute : route
      )
    );
  };

  const shouldShowLocationButton = (route) => {
    return true;
  };

  return (
    <div className={styles['RouteManagement-container']}>
      <div className={styles['routes-management-right-container']}>
        <div className={styles['routes-container']}>
          <div className={styles['routes-header-container']}>
            <div className={styles['details-num-div']}>
              <h4 className={styles['routes-header']}>Details</h4>
              <h4 className={styles['numberOfRoutes']}>{routes.length}</h4>
            </div>
            <div className={styles['add-routes-btn']}>
              <button onClick={handleAddRoute}>Add Trip</button>
            </div>
          </div>
          <hr />
          <table className={styles["routes-table"]}>
            <thead>
              <tr>
                {routes.length > 0 && Object.keys(routes[0]).map((key) => (
                  key !== 'seats' && key !== 'stops' && key !== 'Driver Assigned' && (
                    <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  )
                ))}
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <RouteRow
                  key={route.id}
                  route={route}
                  onSave={isAdding && route.id === routes[routes.length - 1].id ? handleSaveNewRoute : handleUpdateRoute}
                  onDelete={handleDeleteRoute}
                  busTypeOptions={busTypeOptions}
                  showLocationButton={shouldShowLocationButton(route)}
                />
              ))}
            </tbody>
          </table>
          {routes.length === 0 && <div>No Trips Available</div>}
        </div>
      </div>
    </div>
  );
}

function RouteRow({ route, onSave, onDelete, busTypeOptions, showLocationButton }) {
  const [isEditable, setIsEditable] = useState(false);
  const [routeData, setRouteData] = useState({ ...route });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');

  useEffect(() => {
    setIsEditable(false);
    setRouteData({ ...route }); // Reset routeData when route prop changes
  }, [route]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRouteData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const isEmptyField = Object.values(routeData).some(value => value === '');
    if (isEmptyField) {
      alert('All fields must be filled in before saving.');
      return;
    }
    onSave(routeData);
    setIsEditable(false);
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const handleLocationClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleAddTrip = () => {
    if (startPoint.trim() === '' || endPoint.trim() === '') {
      alert('Please enter both start and end points.');
      return;
    }
    setRouteData(prevData => ({
      ...prevData,
      'route-start-data': startPoint.trim(),
      'route-end-data': endPoint.trim(),
    }));
    setIsPopupVisible(false); // Close the popup after adding trip
  };

  return (
    <>
      <tr>
        {Object.keys(routeData).map((key) => (
          key !== 'seats' && key !== 'stops' && key !== 'Driver Assigned' && (
            <td key={key} className={key === 'bus type' ? styles['bus-type-cell'] : ''}>
              {isEditable ? (
                key === 'bus type' ? (
                  <select
                    className={styles['routeRow-input']}
                    name={key}
                    value={routeData[key]}
                    onChange={handleInputChange}
                  >
                    {busTypeOptions.map((option) => (
                      <option key={option.type} value={option.type}>
                        {option.type} ({option.seats} seats)
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className={`${styles['routeRow-input']} ${styles[key.replace(/\s+/g, '-').toLowerCase() + '-input']}`}
                    type={key === 'date' ? 'date' : 'text'}
                    name={key}
                    value={routeData[key]}
                    onChange={handleInputChange}
                    disabled={key === 'id'}
                  />
                )
              ) : (
                key === 'bus type' ? `${routeData[key]} (${routeData.seats} seats)` : routeData[key]
              )}
            </td>
          )
        ))}
        <td>
          {isEditable ? (
            <button className={styles['saveRoute-btn']} onClick={handleSave}>Save</button>
          ) : (
            <>
              <button className={styles['editRoute-btn']} onClick={handleEditToggle}>Edit</button>
              <button className={styles['deleteRoute-btn']} onClick={() => onDelete(routeData.id)}>Delete</button>
              {showLocationButton && (
                <button className={styles['location-btn']} onClick={handleLocationClick}>Route</button>
              )}
            </>
          )}
        </td>
      </tr>
      {isPopupVisible && (
        <div className={styles["overlay"]}>
          <div className={styles["route-info-container"]}>
            <div className={styles["route-info"]}>
              <div className={styles["route-popup-header"]}>
                <div className={styles["exit-title"]}>
                  <h4 className={styles['popup-title']}>Route Details</h4>
                  <button className={styles['exit-btn']} onClick={handleClosePopup}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <hr />
              </div>
              <div className={styles["route-popup-contents"]}>
                <div className={styles["route-top-contents"]}>
                  <div className={styles["navigation-map"]}>
                    <AdminMapRouting />
                  </div>
                  <div className={styles["route-details"]}>
                    <span className={styles['info-span']}>
                      <p>Start Point: </p>
                      <input
                        type="text"
                        className={styles['route-start-input']}
                        value={startPoint}
                        onChange={(e) => setStartPoint(e.target.value)}
                      />
                    </span>
                    <span className={styles['info-span']}>
                      <p>End Point: </p>
                      <input
                        type="text"
                        className={styles['route-end-input']}
                        value={endPoint}
                        onChange={(e) => setEndPoint(e.target.value)}
                      />
                    </span>
                  </div>
                </div>
                <div className={styles["route-bottom-contents"]}>
                  <button className={styles["add-trips-btn"]} onClick={handleAddTrip}>Add Trip</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

RouteRow.propTypes = {
  route: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  busTypeOptions: PropTypes.array.isRequired,
  showLocationButton: PropTypes.bool.isRequired,
};

export default TripsManagement;
