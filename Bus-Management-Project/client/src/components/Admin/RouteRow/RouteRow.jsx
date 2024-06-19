// RouteRow.js

import React, { useState, useEffect } from 'react';
import './RouteRow.css';
import styles from '../tripsManagement/TripsManagement.module.css'


function RouteRow({ route, onSave, onDelete, isEditing }) {
  const [isEditable, setIsEditable] = useState(isEditing);
  const [routeData, setRouteData] = useState({ ...route });

  useEffect(() => {
    setIsEditable(isEditing);
  }, [isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRouteData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Validation check for empty fields
    if (
      !routeData.startTime ||
      !routeData.endTime ||
      !routeData.maxNoStudents ||
      !routeData.speedLimit ||
      !routeData.date
    ) {
      alert('All fields must be filled in before saving.');
      return;
    }
    onSave(routeData);
    setIsEditable(false);
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  return (
    <tr>
      <td>
        {isEditable ? (
          <input
            type="text"
            name="startTime"
            value={routeData.startTime}
            onChange={handleInputChange}
          />
        ) : (
          routeData.startTime
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="text"
            name="endTime"
            value={routeData.endTime}
            onChange={handleInputChange}
          />
        ) : (
          routeData.endTime
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="number"
            name="maxNoStudents"
            value={routeData.maxNoStudents}
            onChange={handleInputChange}
          />
        ) : (
          routeData.maxNoStudents
        )}
      </td>
      <td>{routeData.id.slice(0, 8)}</td>
      <td>
        {isEditable ? (
          <input
            type="number"
            name="speedLimit"
            value={routeData.speedLimit}
            onChange={handleInputChange}
          />
        ) : (
          routeData.speedLimit
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="date"
            name="date"
            value={routeData.date}
            onChange={handleInputChange}
          />
        ) : (
          routeData.date
        )}
      </td>
      <td>
        {isEditable ? (
          <button className={styles['saveRoute-btn']} onClick={handleSave}>Save</button>
        ) : (
          <button className={styles['editRoute-btn']} onClick={handleEditToggle}>Edit</button>
        )}
        <button className={styles['deleteRoute-btn']} onClick={() => onDelete(routeData.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default RouteRow;
