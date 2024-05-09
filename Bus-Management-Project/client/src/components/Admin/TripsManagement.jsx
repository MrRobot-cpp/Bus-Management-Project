// RouteManagement.js

import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TripsManagement.module.css';

function TripsManagement() {
  const [routes, setRoutes] = useState([
    { id: uuidv4(), startTime: '10:00 AM', endTime: '11:00 AM', speedLimit: 60, maxNoStudents: 10, date: new Date("2024-05-11").toISOString().split('T')[0] },
    { id: uuidv4(), startTime: '10:00 AM', endTime: '11:00 AM', speedLimit: 60, maxNoStudents: 10, date: new Date("2024-05-11").toISOString().split('T')[0] },
    { id: uuidv4(), startTime: '10:00 AM', endTime: '11:00 AM', speedLimit: 60, maxNoStudents: 10, date: new Date("2024-05-11").toISOString().split('T')[0] },
  ]);

  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editToggle,setEditToggle] = useState(false)

  const [editRoute, setEditRoute] = useState({
    id: '',
    maxNoStudents: 0,
    startTime: '',
    endTime: '',
    speedLimit: 0,
    date: ''
  });

  // const positionModal = (event) => {
  //   const modal = document.querySelector('.modal');
  //   const rect = event.target.getBoundingClientRect();
  //   const modalWidth = modal.offsetWidth;
  //   const modalHeight = modal.offsetHeight;
  //   const clickX = rect.left + window.scrollX + rect.width / 2;
  //   const clickY = rect.top + window.scrollY + rect.height / 2;
  //   const newX = clickX - modalWidth / 2;
  //   const newY = clickY - modalHeight / 2;
  //   modal.style.left = `${newX}px`;
  //   modal.style.top = `${newY}px`;
  // };

  const addRoute = () => {
    const newRoute = {
      id: uuidv4(),
      maxNoStudents: 0,
      startTime: '',
      endTime: '',
      speedLimit: 0,
      date: ''
    };
    setRoutes([...routes, newRoute]);
  };

  const handleEditRoute = (id, event) => {
    const routeToEdit = routes.find(route => route.id === id);
    setEditRoute(routeToEdit);
    setSelectedRoute(id);
    setIsModalOpen(true);
    positionModal(event);
    setEditToggle(!edit);
  };

  const handleConfirmEdit = () => {
    const updatedRoutes = routes.map(route => {
      if (route.id === selectedRoute) {
        return editRoute;
      }
      return route;
    });
    setRoutes(updatedRoutes);
    setIsModalOpen(false);
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
          <table className={styles["routes-table"]}>
            <thead>
              <tr>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Maximum Enrollment</th>
                <th>Route ID</th>
                <th>Speed Limit</th>
                <th>Date</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>{route.startTime}</td>
                  <td>{route.endTime}</td>
                  <td>{route.maxNoStudents}</td>
                  <td>{route.id.slice(0, 8)}</td>
                  <td>{route.speedLimit}</td>
                  <td>{route.date}</td>
                  <td>
                    <button className={styles['editRoute-btn']} onClick={(event) => handleEditRoute(route.id, event)}>Edit</button>
                    <button className={styles['editRoute-btn']} onClick={() => handleDeleteRoute(route.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className={styles['modal']}>
              <div className={styles["modal-content"]}>
                <p>Edit route:</p>
                <input type="text" value={editRoute.startTime} onChange={(e) => setEditRoute({ ...editRoute, startTime: e.target.value })} placeholder="Departure" />
                <input type="text" value={editRoute.endTime} onChange={(e) => setEditRoute({ ...editRoute, endTime: e.target.value })} placeholder="Arrival" />
                <input type="text" value={editRoute.maxNoStudents} onChange={(e) => setEditRoute({ ...editRoute, endTime: e.target.value })} placeholder="Maximum Enrollment" />
                <button onClick={handleConfirmEdit}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TripsManagement;
