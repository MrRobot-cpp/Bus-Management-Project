// RouteManagement.js

import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './RouteManagement.css';

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
    <div className='RouteManagement-container'>
      <div className='routes-management-right-container'>
        <div className='routes-container'>
          <div className='routes-header-container'>
            <div className='details-num-div'>
              <h4 className='routes-header'>Details</h4>
              <h4 className='numberOfRoutes'>{routes.length}</h4>
            </div>
            <div className='add-routes-btn'>
              <button onClick={addRoute}>Add Route</button>
            </div>
          </div>
          <hr />
          <table className="routes-table">
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
                    <button className='editRoute-btn' onClick={(event) => handleEditRoute(route.id, event)}>Edit</button>
                    <button className='editRoute-btn' onClick={() => handleDeleteRoute(route.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className={`modal`} style={{ top: setModalPosition.y + 'px', left: modalPosition.x + 'px' }}>
              <div className="modal-content">
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
