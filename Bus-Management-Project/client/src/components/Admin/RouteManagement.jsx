// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './RouteManagement.css';
function RouteManagement() {

  const [routes, setRoutes] = useState([
  
    { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
        { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
        { id: uuidv4(), startFrom: 'A', endAt: 'B', tripType: 'Going to', numberOfStops: 3, startTime: '10:00 AM', endTime: '11:00 AM' },
    
  ]);

  const [selectedRoute, setSelectedRoute] = useState(null); // Track the selected route for editing or deletion
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  // eslint-disable-next-line no-unused-vars

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
      id: uuidv4(), // Generate a unique ID
      startFrom: '', // Initialize other properties with default values
      endAt: '',
      tripType: '',
      numberOfStops: 0,
      startTime: '',
      endTime: ''
    };
    setRoutes([...routes, newRoute]);
  };

  const handleEditRoute = (id, event) => {
    if (selectedRoute === id && isModalOpen) {
      setIsModalOpen(false); // Close the modal if already open for the same route
    } else {
      setSelectedRoute(id);
      setIsModalOpen(true);
      positionModal(event);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleDeleteRoute = (id) => {
    setSelectedRoute(id); // Set the selected route for deletion
    setModalPosition({ x: event.clientX, y: event.clientY });
    setIsModalOpen(true); // Open the modal
  };

  const handleConfirmEdit = () => {
    // Implement logic to edit the selected route
    console.log('Editing route:', selectedRoute);
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmDelete = () => {
    // Implement logic to delete the selected route
    setRoutes(routes.filter((route) => route.id !== selectedRoute)); // Remove the selected route from the routes array
    setIsModalOpen(false); // Close the modal
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
                  <button onClick={() => handleEditRoute(route.id)}><i className="fa-solid fa-gear"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
        <div className={`modal modal-animation ${isModalOpen ? 'modal-animation-slide-in' : 'modal-animation-slide-out'}`} style={{ top: modalPosition.y + 'px', left: modalPosition.x + 'px' }} >
          <div className="modal-content">
            <p>Do you want to edit or delete this route?</p>
            <div className='buttons-modal-holder'>
            <button className='edit-btn-route' onClick={handleConfirmEdit}>Edit</button> 
            <button onClick={handleConfirmDelete}>Delete</button>
            </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RouteManagement;
