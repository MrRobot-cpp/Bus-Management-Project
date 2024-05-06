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

  // eslint-disable-next-line no-unused-vars
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

  const handleEditRoute = (id) => {
    setSelectedRoute(id); // Set the selected route for editing
    setIsModalOpen(true); // Open the modal
  };

  // eslint-disable-next-line no-unused-vars
  const handleDeleteRoute = (id) => {
    setSelectedRoute(id); // Set the selected route for deletion
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
            <h4 className='routes-header'>Details</h4>
            <h4 className='numberOfRoutes'>{routes.length}</h4>
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
                  <button onClick={() => handleEditRoute(route.id)}>Options</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
        <div className="modal" >
          <div className="modal-content">
            <p>Do you want to edit or delete this route?</p>
            <button onClick={handleConfirmEdit}>Edit</button>
            <button onClick={handleConfirmDelete}>Delete</button>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RouteManagement;
