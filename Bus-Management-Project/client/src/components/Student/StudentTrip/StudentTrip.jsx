// StudentTrip.js
import { useState } from 'react';
import RouteRow from './RouteRow/RouteRow';
import styles from './StudentTrip.module.css';

function StudentTrip() {
    const [routes, setRoutes] = useState([
        { id: 1, day: "Saturday", startFrom: 'A', endAt: 'B', tripType: 'Going to', goingTime: '10:00 AM', leavingTime: '3:00 PM' },
        { id: 2, day: "Saturday", startFrom: 'B', endAt: 'A', tripType: 'Leaving from', goingTime: '3:00 PM', leavingTime: '4:00 PM' }
    ]);

    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [selectedRouteId, setSelectedRouteId] = useState(null);

    const handleAddRoute = () => {
        const newRoute = {
            id: Date.now(),
            day: '',
            startFrom: '',
            endAt: '',
            tripType: '',
            goingTime: '',
            leavingTime: ''
        };
        setRoutes([...routes, newRoute]);
        setEditMode(true);
        setSelectedRouteId(newRoute.id);
    };

    const handleUpdateRoute = (id, updatedRoute) => {
        setRoutes(routes.map(route => (route.id === id ? { ...updatedRoute, id } : route)));
    };

    const handleDeleteRoute = (id) => {
        setRoutes(routes.filter(route => route.id !== id));
        setDeleteMode(false);
        setSelectedRouteId(null);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
        setDeleteMode(false);
        setSelectedRouteId(null);
    };

    const toggleDeleteMode = () => {
        setDeleteMode(!deleteMode);
        setEditMode(false);
        setSelectedRouteId(null);
    };

    return (
        <>
            <div className={styles['RouteManagement-container']}>
                <div className={styles['trip-functions']}>
                    <div className={styles["trip-func-btn"]} onClick={handleAddRoute}>
                        <p className={styles["trip-func-text"]}>Add Trip</p>
                    </div>
                    <div className={styles["trip-func-btn"]} onClick={toggleEditMode}>
                        <p className={styles["trip-func-text"]}>{editMode ? 'Done' : 'Edit Trip'}</p>
                    </div>
                    <div className={styles["trip-func-btn"]} onClick={toggleDeleteMode}>
                        <p className={styles["trip-func-text"]}>{deleteMode ? 'Done' : 'Delete Trip'}</p>
                    </div>
                </div>

                <div className={styles['routes-management-right-container']}>
                    <div className={styles['routes-container']}>
                        <div className={styles['routes-header-container']}>
                            <div className={styles['details-num-div']}>
                                <h4 className={styles['routes-header']}>Days</h4>
                                <h4 className={styles['numberOfRoutes']}>{routes.length}</h4>
                            </div>
                        </div>
                        <hr />
                        <table className={styles["routes-tableI"]}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Date</th>
                                    <th>Departure</th>
                                    <th>Destination</th>
                                    <th>Trip Type</th>
                                    <th>Departure Time</th>
                                    <th>Arrival Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routes.map((route) => (
                                    <RouteRow
                                        key={route.id}
                                        route={route}
                                        onUpdate={handleUpdateRoute}
                                        onDelete={handleDeleteRoute}
                                        isEditing={editMode || deleteMode}
                                        onSelect={setSelectedRouteId}
                                        isSelected={selectedRouteId === route.id}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentTrip;
