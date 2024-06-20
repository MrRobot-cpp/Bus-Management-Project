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
    return (
        <div className="overlay">
            <div className="trip-info-container">
                <p>working</p>
            </div>
        </div>
    );
  };

//   const handleClosePopup = () => {
//     setIsPopupVisible(false);
//   };

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
      {/* {isPopupVisible && (
        <div className={styles["overlay"]}>
          <div className={styles["trip-info-container"]}>
            <div className={styles["trip-info"]}>
              <h2>Trip Details</h2>
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default RouteRow;
