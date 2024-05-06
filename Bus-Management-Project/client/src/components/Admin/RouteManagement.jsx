// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RouteManagement.css';

function RouteManagement() {
  const [routes, setRoutes] = useState([
    { startFrom: 'A', endAt: 'B', numberOfStops: 3, tripType: 'Going to', startTime: '10:00 AM', endTime: '11:00 AM' },
    { startFrom: 'C', endAt: 'D', numberOfStops: 2, tripType: 'Returning from', startTime: '01:00 PM', endTime: '02:00 PM' },
    // Add more route objects as needed
  ]);

  const handleEditRoute = (index) => {
    // Implement your logic for editing the route at the specified index
    console.log('Edit route at index:', index);
  };

  const handleDeleteRoute = (index) => {
    // Implement your logic for deleting the route at the specified index
    setRoutes(routes.filter((_, i) => i !== index));
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
                <th>Start from</th>
                <th>End at</th>
                <th>Number of stops</th>
                <th>Trip type</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr key={index}>
                  <td>{route.startFrom}</td>
                  <td>{route.endAt}</td>
                  <td>{route.numberOfStops}</td>
                  <td>{route.tripType}</td>
                  <td>{route.startTime}</td>
                  <td>{route.endTime}</td>
                  <td>
                    <button onClick={() => handleEditRoute(index)}>Edit</button>
                    <button onClick={() => handleDeleteRoute(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RouteManagement;
