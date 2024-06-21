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
          key !== 'stop Name' && key !== 'stop Location' && key !== 'seats' && key !== 'Driver Assigned' && (
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
          {routeData['Driver Assigned']}
        </td>
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
              <div className="route-popup-header">
                <div className="exit-title">
                  <h2 className='popup-title'>Route Details</h2>
                  <button className='exit-btn' onClick={handleClosePopup}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <hr />
              </div>
              <div className="route-popup-contents">
                <div className="route-top-contents">
                  <div className="navigation-map">
                    <p>working</p>
                  </div>
                  <div className="route-details">
                    <span className='info-span'>
                      <p>Start Point: </p>
                      <p className='route-data'>x,y</p>
                    </span>
                    <span className='info-span'>
                      <p>Stop 1: </p>
                      <span className='stop-info'>
                        <p className='route-data'>stopName</p>
                        <p className='route-data'>x,y</p>
                      </span>
                    </span>
                    <span className='info-span'>
                      <p>End Point: </p>
                      <p className='route-data'>x,y</p>
                    </span>
                  </div>
                </div>
                <div className="route-bottom-contents">
                  <div className="route-choice">
                    <div className="route-choice-content">
                      <div className="start-end-route">
                        <div className="start-end-text">
                          <p>Start Point: </p>
                          <p>End Point: </p>
                        </div>
                        <div className="start-end-inputs">
                        </div>
                          <input type="text"className='start-input' />
                          <i className="fa-solid fa-arrow-right-arrow-left"></i>
                          <input type="text" className='end-input'/>
                      </div>
                      <div className="stop-name-loc">
                        <div className="stop-name-loc-text">
                          <p>Stop Name: </p>
                          <p>Stop Location: </p>
                        </div>
                        <div className="stop-name-loc-inputs">
                            <input type="text"className='start-input' />
                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                            <input type="text" className='end-input'/>
                        </div>
                      </div>
                      <button className={styles["add-trips-btn"]}>Add Trip</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RouteRow;
