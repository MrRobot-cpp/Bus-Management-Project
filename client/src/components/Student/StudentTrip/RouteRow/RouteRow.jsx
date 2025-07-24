import React, { useState, useEffect } from 'react';
import './RouteRow.css';

function RouteRow({ route, onUpdate, onDelete, isEditing, isDeleting, isSelected, onSelect }) {
    const [isEditable, setIsEditable] = useState(isEditing && isSelected);
    const [routeData, setRouteData] = useState({ ...route });

    useEffect(() => {
        setIsEditable(isEditing && isSelected);
    }, [isEditing, isSelected]);

    useEffect(() => {
        if (isDeleting) {
            setIsEditable(false);
        }
    }, [isDeleting]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRouteData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        const { day, startFrom, endAt, tripType, goingTime, leavingTime } = routeData;

        if (!day || !startFrom || !endAt || !tripType || !goingTime || !leavingTime) {
            alert('Please fill out all fields before saving.');
            return;
        }

        onUpdate(route.id, routeData);
        setIsEditable(false);
    };

    const handleDelete = () => {
        onDelete(route.id);
    };

    return (
        <tr>
            <td>
                {(isEditing || isDeleting) && (
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onSelect(route.id)}
                    />
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="day"
                        value={routeData.day}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.day
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="startFrom"
                        value={routeData.startFrom}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.startFrom
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="endAt"
                        value={routeData.endAt}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.endAt
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="tripType"
                        value={routeData.tripType}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.tripType
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="goingTime"
                        value={routeData.goingTime}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.goingTime
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        type="text"
                        name="leavingTime"
                        value={routeData.leavingTime}
                        onChange={handleInputChange}
                        required
                    />
                ) : (
                    route.leavingTime
                )}
            </td>
            <td>
                {isEditable ? (
                    <button className='save-btn' onClick={handleSave}>Save</button>
                ) : (
                    isDeleting && isSelected && (
                        <button className='delete-btn' onClick={handleDelete}>Delete</button>
                    )
                )}
            </td>
        </tr>
    );
}

export default RouteRow;
