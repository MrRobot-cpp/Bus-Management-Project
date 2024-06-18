// RouteRow.js
import React, { useState, useEffect } from 'react';

function RouteRow({ route, onUpdate, onDelete, isEditing, isSelected, onSelect }) {
    const [isEditable, setIsEditable] = useState(isEditing && isSelected);
    const [routeData, setRouteData] = useState({ ...route });

    useEffect(() => {
        setIsEditable(isEditing && isSelected);
    }, [isEditing, isSelected]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRouteData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        onUpdate(route.id, routeData);
        setIsEditable(false);
    };

    return (
        <tr>
            <td>
                {isEditing && (
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
                    />
                ) : (
                    route.leavingTime
                )}
            </td>
            <td>
                {isEditable && (
                    <button onClick={handleSave}>Save</button>
                )}
            </td>
        </tr>
    );
}

export default RouteRow;
