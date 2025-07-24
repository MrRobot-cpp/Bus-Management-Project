import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './DriversManagement.module.css';

function DriversManagement() {
  const [drivers, setDrivers] = useState([ {
    id: '', // Generating a unique id
    name: '',
    email: '',
    password: '',
    salary: '',
    address: '',
  }]);
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:3030/admin/drivers',{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const currData = response.data.data;
        const updatedData = currData.map(({_id, __v, role, trips, averageRating, ...rest }) => rest);

        setDrivers(updatedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDrivers();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleAddDriver = () => {
    if (!isAdding) {
      const newDriver = {
        id: '', // Generating a unique id
        name: '',
        email: '',
        password: '',
        salary: '',
        address: ''
      };
      setDrivers((prevDrivers) => [...prevDrivers, newDriver]);
      setIsAdding(true);
    }
  };

  const handleSaveNewDriver = (newDriverData) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === newDriverData.id ? newDriverData : driver
      )
    );
    setIsAdding(false);
  };

  const handleDeleteDriver = (id) => {
    setDrivers((prevDrivers) => prevDrivers.filter((driver) => driver.id !== id));
  };

  const handleUpdateDriver = (updatedDriver) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === updatedDriver.id ? updatedDriver : driver
      )
    );
  };

  // Modal handling functions
  const handleOpenModal = (driver) => {
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDriver(null);
  };

  const handleAddTrip = (tripData) => {
    // Logic to add trip to the selected driver or perform necessary actions
    console.log('Trip Data for driver', selectedDriver.id, ':', tripData);
    handleCloseModal(); // Close modal after adding trip
  };

  return (
    <div className={styles['RouteManagement-container']}>
      <div className={styles['routes-management-right-container']}>
        <div className={styles['routes-container']}>
          <div className={styles['routes-header-container']}>
            <div className={styles['details-num-div']}>
              <h4 className={styles['routes-header']}>Drivers</h4>
              <h4 className={styles['numberOfRoutes']}>{drivers.length}</h4>
            </div>
            <div className={styles['add-routes-btn']}>
              <button onClick={handleAddDriver}>Add Driver</button>
            </div>
          </div>
          <hr />
          <table className={styles["routes-table"]}>
            <thead>
              <tr>
                {drivers.length > 0 && Object.keys(drivers[0]).map((key) => (
                  <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                ))}
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <DriverRow
                  key={driver.id}
                  driver={driver}
                  onSave={isAdding && driver.id === drivers[drivers.length - 1].id ? handleSaveNewDriver : handleUpdateDriver}
                  onDelete={handleDeleteDriver}
                  onOpenModal={handleOpenModal}
                  isEditing={isAdding && driver.id === drivers[drivers.length - 1].id}
                />
              ))}
            </tbody>
          </table>
          {drivers.length === 0 && <div>No Drivers Available</div>}
        </div>
      </div>

      {/* Modal component for adding a trip */}
      {isModalOpen && selectedDriver && (
        <Modal driver={selectedDriver} onClose={handleCloseModal} onAddTrip={handleAddTrip} />
      )}
    </div>
  );
}

function DriverRow({ driver, onSave, onDelete, onOpenModal, isEditing }) {
  const [isEditable, setIsEditable] = useState(isEditing);
  const [driverData, setDriverData] = useState({ ...driver });

  useEffect(() => {
    setIsEditable(isEditing);
  }, [isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const isEmptyField = Object.values(driverData).some((value) => value === '');
    if (isEmptyField) {
      alert('All fields must be filled in before saving.');
      return;
    }
    onSave(driverData);
    setIsEditable(false);
  };

  const handleEditToggle = () => {
    setIsEditable(!isEditable);
  };

  const inputClassName = `${styles['routeRow-input']} ${styles['routeRow-input-small']}`;

  return (
    <tr>
      {Object.keys(driverData).map((key) => (
        <td key={key}>  
          {isEditable ? (
            <input
              className={inputClassName}
              type={key === 'email' ? 'email' : 'text'}
              name={key}
              value={driverData[key]}
              onChange={handleInputChange}
              disabled={key === 'id'}
            />
          ) : (
            key === 'password' ? '****' : (key === 'id' ? driverData[key].slice(0, 8) : driverData[key])
          )}
        </td>
      ))}
      <td>
        {isEditable ? (
          <button className={styles['saveRoute-btn']} onClick={handleSave}>Save</button>
        ) : (
          <button className={styles['editRoute-btn']} onClick={handleEditToggle}>Edit</button>
        )}
        <button className={styles['deleteRoute-btn']} onClick={() => onDelete(driverData.id)}>Delete</button>
        <button className={styles['deleteRoute-btn']} onClick={() => onOpenModal(driverData)}>Trips</button>
      </td>
    </tr>
  );
}

DriverRow.propTypes = {
  driver: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};

function Modal({ driver, onClose, onAddTrip }) {
  const [trips] = useState([
    { id: 1, OpeningTime: '27/5/2024', StartTime: '8:30 AM', EndTime: '9:00 AM', StartPoint: 'Nady Al Ahly', EndPoint: 'MIU' },
    { id: 2, OpeningTime: '27/5/2024', StartTime: '8:30 AM', EndTime: '9:00 AM', StartPoint: 'Nady Al Ahly', EndPoint: 'MIU' }
  ]);

  return (
    <div className={styles["overlay"]}>
      <div className={styles["route-info-container"]}>
        <div className={styles["route-info"]}>
          <div className={styles["route-popup-header"]}>
            <div className={styles["exit-title"]}>
              <h2 className={styles['popup-title']}>List of Trips</h2>
              <button className={styles['exit-btn']} onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <hr />
          </div>
          <div className={styles["route-popup-contents"]}>
            <table className={styles["students-table"]}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Opening Time</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Start Point</th>
                  <th>End Point</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trips) => (
                  <tr key={trips.id}>
                    <td className='student-id-data'>{trips.id}</td>
                    <td>{trips.OpeningTime}</td>
                    <td>{trips.StartTime}</td>
                    <td>{trips.EndTime}</td>
                    <td>{trips.StartPoint}</td>
                    <td>{trips.EndPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  driver: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddTrip: PropTypes.func.isRequired
};

export default DriversManagement;
