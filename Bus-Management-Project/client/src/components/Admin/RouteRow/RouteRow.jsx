import React, { useState, useEffect } from 'react';
import './RouteRow.css';
import styles from '../tripsManagement/TripsManagement.module.css';

function RouteRow({ route, onSave, onDelete, isEditing, showLocationButton }) {
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
console.log('Location button clicked for route:', routeData);
// Implement location-specific functionality here
};

return (
<tr>
{Object.keys(routeData).map((key) => (
<td key={key}>
{isEditable ? (
<input
type={key === 'date' ? 'date' : key === 'maxNoStudents' || key === 'speedLimit' ? 'number' : 'text'}
name={key}
value={routeData[key]}
onChange={handleInputChange}
disabled={key === 'id'} // Disable editing for the 'id' field
/>
) : (
key === 'id' ? routeData[key].slice(0, 8) : routeData[key]
)}
</td>
))}
<td>
{isEditable ? (
<button className={styles['saveRoute-btn']} onClick={handleSave}>Save</button>
) : (
<button className={styles['editRoute-btn']} onClick={handleEditToggle}>Edit</button>
)}
<button className={styles['deleteRoute-btn']} onClick={() => onDelete(routeData.id)}>Delete</button>
{showLocationButton && (
<button className={styles['location-btn']} onClick={handleLocationClick}>Location</button>
)}
</td>
</tr>
);
}

export default RouteRow;