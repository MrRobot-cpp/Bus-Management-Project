// eslint-disable-next-line no-unused-vars
import React from 'react'
import './DriversManagement.css'
import { useState } from 'react';
function DriversManagement() {

    const [newDriver, setNewDriver] = useState({
      name: '',
      email: '',
      password: '',
      id: '',
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
  
    const handleCreateDriver = async () => {
      try {
        const driver = await createDriver(newDriver);
        console.log('Driver successfully created:', driver);
        setNewDriver({
          name: '',
          email: '',
          password: '',
          id: '',
          salary: '',
          address: ''
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };



  return (
    <>
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
                    <td><label htmlFor="salary">Salary:</label></td>
                    <td><input type="number" id="salary" name="salary" value={newDriver.salary} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td><label htmlFor="address">Address:</label></td>
                    <td><input type="text" id="address" name="address" value={newDriver.address} onChange={handleChange} required /></td>
                  </tr>
                  <tr>
                    <td colSpan="2"><button type="button" onClick={handleCreateDriver}>Create Driver</button></td>
                  </tr>
                </tbody>
              </table>
    </>
  )
}

export default DriversManagement