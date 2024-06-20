import React, { useState } from 'react';
import PageHeader from '../Student/PageHeader/PageHeader';
import AdminDashboard from './adminDashboard/AdminDashboard';
import StudentsManagement from './studentManagement/StudentsManagement';
import DriversManagement from './driversManagement/DriversManagement';
import AdminProfile from './adminprofile/AdminProfile';
import PaymentsManagement from './paymentsManagement/PaymentsManagement';
import RouteManagement from './RouteManagement/RouteManagement';
import TripsManagement from './tripsManagement/TripsManagement';
import VerticalNavbar from '../General/VerticalNavbar';
import styles from './Admin.module.css';
import axios from 'axios';

function Admin() {
  const [header, setHeader] = useState('Dashboard');
  const [newDriver, setNewDriver] = useState({
    name: '',
    email: '',
    password: '',
    id: '',
    gender: '',
    birthdate: '',
    billingInfo: {
      cardNumber: '',
      cardHolderName: '',
      cvv: '',
      expiryDate: ''
    },
    trips: [],
    averageRating: '',
    salary: '',
    address: ''
  });

  const menuItems = [
    { text: "Drivers" },
    { text: "Students" },
    { text: "Trips" },
    { text: "Payments" },
    { text: "Profile" }
  ];

  const createDriver = async (driverData) => {
    try {
      const response = await axios.post('http://localhost:3030/driver/', driverData);
      console.log('Driver created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating driver:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber' || name === 'cardHolderName' || name === 'cvv' || name === 'expiryDate') {
      setNewDriver((prevState) => ({
        ...prevState,
        billingInfo: {
          ...prevState.billingInfo,
          [name]: value
        }
      }));
    } else {
      setNewDriver({
        ...newDriver,
        [name]: value
      });
    }
  };

  const handleButtonClick = async () => {
    try {
      const driver = await createDriver(newDriver);
      console.log('Driver successfully created:', driver);
      setNewDriver({
        name: '',
        email: '',
        password: '',
        id: '',
        gender: '',
        birthdate: '',
        billingInfo: {
          cardNumber: '',
          cardHolderName: '',
          cvv: '',
          expiryDate: ''
        },
        trips: [],
        averageRating: '',
        salary: '',
        address: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles['admin-container']}>
      <PageHeader text={`Admin ${header}`} />
      <div className={styles['admin-page-container']}>
        <div className="admin-navbar-container">
          <VerticalNavbar menuItems={menuItems} onQuery={setHeader} />
        </div>
        <div className={styles["admin-right-container"]}>
          {header === "Dashboard" && <AdminDashboard />}
          {header === "Payments" && <PaymentsManagement />}
          {header === "Drivers" && (
            <>
              <DriversManagement />
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="name">Name:</label></td>
                    <td><input type="text" id="name" name="name" value={newDriver.name} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="email">Email:</label></td>
                    <td><input type="email" id="email" name="email" value={newDriver.email} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="password">Password:</label></td>
                    <td><input type="password" id="password" name="password" value={newDriver.password} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="id">ID:</label></td>
                    <td><input type="text" id="id" name="id" value={newDriver.id} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="gender">Gender:</label></td>
                    <td><input type="text" id="gender" name="gender" value={newDriver.gender} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="birthdate">Birthdate:</label></td>
                    <td><input type="date" id="birthdate" name="birthdate" value={newDriver.birthdate} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="cardNumber">Card Number:</label></td>
                    <td><input type="text" id="cardNumber" name="cardNumber" value={newDriver.billingInfo.cardNumber} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="cardHolderName">Card Holder Name:</label></td>
                    <td><input type="text" id="cardHolderName" name="cardHolderName" value={newDriver.billingInfo.cardHolderName} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="cvv">CVV:</label></td>
                    <td><input type="text" id="cvv" name="cvv" value={newDriver.billingInfo.cvv} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="expiryDate">Expiry Date:</label></td>
                    <td><input type="text" id="expiryDate" name="expiryDate" value={newDriver.billingInfo.expiryDate} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="averageRating">Average Rating:</label></td>
                    <td><input type="number" id="averageRating" name="averageRating" value={newDriver.averageRating} onChange={handleChange} /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="salary">Salary:</label></td>
                    <td><input type="number" id="salary" name="salary" value={newDriver.salary} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="address">Address:</label></td>
                    <td><input type="text" id="address" name="address" value={newDriver.address} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td colSpan="2"><button type="button" onClick={handleButtonClick}>Create Driver</button></td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          {header === "Students" && <StudentsManagement />}
          {header === "Trips" && <TripsManagement />}
          {header === "Profile" && <AdminProfile />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
