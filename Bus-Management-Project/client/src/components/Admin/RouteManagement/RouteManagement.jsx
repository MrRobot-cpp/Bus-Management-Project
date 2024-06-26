// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './RouteManagement.module.css';

function RouteManagement() {
  const [routes, setRoutes] = useState([
    { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
    { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
    { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
  ]);

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 5000, y: 0 });

  const [editRoute, setEditRoute] = useState({
    id: '',
    startFrom: '',
    endAt: '',
    tripType: '',
    numberOfStops: '',
    startTime: '',
    endTime: ''
  });

  const validateInputs = () => {
    // Validation logic for startFrom and endAt (start with letters)
    const startFromRegex = /^[a-zA-Z]+$/;
    const endAtRegex = /^[a-zA-Z]+$/;

    // Validation logic for tripType (either 'Going to' or 'Returning from')
    const validTripTypes = ['Going to', 'Returning from'];

    // Validation logic for numberOfStops (must be a number from 1 to 40)
    const numberOfStops = parseInt(editRoute.numberOfStops);
    const isNumberOfStopsValid = !isNaN(numberOfStops) && numberOfStops >= 1 && numberOfStops <= 40;

    // Validation logic for startTime and endTime (valid date and time)
    const startTimeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
    const endTimeRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;

    const isStartTimeValid = startTimeRegex.test(editRoute.startTime);
    const isEndTimeValid = endTimeRegex.test(editRoute.endTime);

    return (
      startFromRegex.test(editRoute.startFrom) &&
      endAtRegex.test(editRoute.endAt) &&
      validTripTypes.includes(editRoute.tripType) &&
      isNumberOfStopsValid &&
      isStartTimeValid &&
      isEndTimeValid
    );
  };

  const positionModal = (event) => {
    const modal = document.querySelector('.modal');
    const rect = event.target.getBoundingClientRect();
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;
    const clickX = rect.left + window.scrollX + rect.width / 2;
    const clickY = rect.top + window.scrollY + rect.height / 2;
    const newX = clickX - modalWidth / 2;
    const newY = clickY - modalHeight / 2;
    modal.style.left = `${newX}px`;
    modal.style.top = `${newY}px`;
  };

  const addRoute = () => {
    const newRoute = {
      id: uuidv4(),
      startFrom: '',
      endAt: '',
      tripType: '',
      numberOfStops: 0,
      startTime: '',
      endTime: ''
    };
    setRoutes([...routes, newRoute]);
  };

  const handleEditRoute = (id, event) => {
    const routeToEdit = routes.find(route => route.id === id);
    setEditRoute(routeToEdit);
    setSelectedRoute(id);
    setIsModalOpen(true);
    positionModal(event);
  };

  const handleConfirmEdit = () => {
    if (validateInputs()) {
      const updatedRoutes = routes.map(route => {
        if (route.id === selectedRoute) {
          return editRoute;
        }
        return route;
      });
      setRoutes(updatedRoutes);
      setIsModalOpen(false);
    } else {
      alert('Please fill all fields correctly.');
    }
  };

  const handleDeleteRoute = (id) => {
    const updatedRoutes = routes.filter(route => route.id !== id);
    setRoutes(updatedRoutes);
    setIsModalOpen(false);
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
              <button onClick={addRoute}>Add Route</button>
            </div>
          </div>
          <hr />
          <table className={styles["routes-tableI"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Start from</th>
                <th>End at</th>
                <th>Trip type</th>
                <th>No. of stops</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>{route.id.slice(0, 8)}</td>
                  <td>{route.startFrom}</td>
                  <td>{route.endAt}</td>
                  <td>{route.tripType}</td>
                  <td>{route.numberOfStops}</td>
                  <td>{route.startTime}</td>
                  <td>{route.endTime}</td>
                  <td>
                    <button className={styles['editRoute-btn']} onClick={(event) => handleEditRoute(route.id, event)}>Edit</button>
                    <button className={styles['editRoute-btn']} onClick={() => handleDeleteRoute(route.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className={styles[`modal`]} style={{ top: setModalPosition.y + 'px', left: modalPosition.x + 'px' }}>
              <div className={styles["modal-content"]}>
                <p>Edit route:</p>
                <input type="text" value={editRoute.startFrom} onChange={(e) => setEditRoute({ ...editRoute, startFrom: e.target.value })} placeholder="Start from" />
                <input type="text" value={editRoute.endAt} onChange={(e) => setEditRoute({ ...editRoute, endAt: e.target.value })} placeholder="End at" />
                <input type="text" value={editRoute.tripType} onChange={(e) => setEditRoute({ ...editRoute, tripType: e.target.value })} placeholder="Trip type" />
                <input type="number" value={editRoute.numberOfStops} onChange={(e) => setEditRoute({ ...editRoute, numberOfStops: e.target.value })} placeholder="No. of stops" />
                <input type="text" value={editRoute.startTime} onChange={(e) => setEditRoute({ ...editRoute, startTime: e.target.value })} placeholder="Start time" />
                <input type="text" value={editRoute.endTime} onChange={(e) => setEditRoute({ ...editRoute, endTime: e.target.value })} placeholder="End time" />
                <button onClick={handleConfirmEdit}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RouteManagement;
