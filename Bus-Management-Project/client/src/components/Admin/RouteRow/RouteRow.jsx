import React, { useState, useEffect } from 'react';
import styles from '../tripsManagement/TripsManagement.module.css';
import './RouteRow.css';
import ReactDOM from 'react-dom';

function RouteRow({ route, onSave, onDelete, isEditing, busTypeOptions, showLocationButton }) {
  const [isEditable, setIsEditable] = useState(isEditing);
  const [routeData, setRouteData] = useState({ ...route });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    setIsEditable(isEditing);
  }, [isEditing]);

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

  return (
    <>
      <tr>
        {Object.keys(routeData).map((key) => (
          key !== 'stop Name' && key !== 'stop Location' && key !== 'seats' && (
            <td key={key} className={key === 'bus type' ? 'bus-type-cell' : ''}>
              {isEditable ? (
                key === 'bus type' ? (
                  <select
                    className='routeRow-input'
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
                    className='routeRow-input'
                    type={key === 'date' ? 'date' : 'text'}
                    name={key}
                    value={routeData[key]}
                    onChange={handleInputChange}
                    disabled={key === 'id'}
                  />
                )
              ) : (
                key === 'bus type' ? `${routeData[key]} (${routeData.seats} seats)` : (
                  key === 'id' ? routeData[key].slice(0, 8) : routeData[key]
                )
              )}
            </td>
          )
        ))}
        <td>
          {isEditable ? (
            <button className={styles['saveRoute-btn']} onClick={handleSave}>Save</button>
          ) : (
            <button className={styles['editRoute-btn']} onClick={handleEditToggle}>Edit</button>
          )}
          <button className={styles['deleteRoute-btn']} onClick={() => onDelete(routeData.id)}>Delete</button>
          {showLocationButton && (
            <button className={styles['location-btn']} onClick={handleLocationClick}>Route</button>
          )}
        </td>
      </tr>
      {isPopupVisible && (
        <div className="overlay">
          <div className="route-info-container">
            <div className="route-info">
              <h2>Route Details</h2>
              <div className="route-top-container">
                <div className="navigation-map">
                  <p>working</p>
                </div>
                <div className="route-details"></div>
              </div>
              <div className="route-bottom-container">
                <div className={styles["route-choice-container"]}>
                  <div className={styles["route-choice"]}>
                      <p className={styles['route-choice-title']}>Trip Choice:</p>
                      <hr />
                      <div className={styles["route-choice-content"]}>
                          <div className={styles["start-end-route"]}>
                              <input type="text"className={styles['start-input']} />
                              <i className="fa-solid fa-arrow-right-arrow-left"></i>
                              <input type="text" className={styles['end-input']} />
                          </div>
                          <button className={styles["show-trips-btn"]}>Show Trips</button>
                      </div>
                  </div>
              </div>
            </div>
              <button onClick={handleClosePopup}>Exit</button>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default RouteRow;
