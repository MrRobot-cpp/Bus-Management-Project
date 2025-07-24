// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './PaymentsManagement.module.css';

function PaymentManagement() {
  const [drivers] = useState([
    {
      First_Name: 'Ahmed Mohmed',
      email: 'AhmedMoe@gmail.com',
      ID: uuidv4(),
      address: 'Nasr City, Cairo',
      Total_Fee: '12,000',
      Remaining_Fee: '6,000',
    },
    // Additional initial drivers can be added here if needed...
  ]);

  return (
    <div className={styles['RouteManagement-container']}>
      <div className={styles['routes-management-right-container']}>
        <div className={styles['routes-container']}>
          <div className={styles['routes-header-container']}>
            <div className={styles['details-num-div']}>
              <h4 className={styles['routes-header']}>Payments</h4>
              <h4 className={styles['numberOfRoutes']}>{drivers.length}</h4>
            </div>
          </div>
          <hr />
          <table className={styles['routes-table']}>
            <thead>
              <tr>
                {drivers.length > 0 &&
                  Object.keys(drivers[0]).map((key) => (
                    <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <DriverRow key={driver.ID} driver={driver} />
              ))}
            </tbody>
          </table>
          {drivers.length === 0 && <div>No data Available</div>}
        </div>
      </div>
    </div>
  );
}

function DriverRow({ driver }) {
  return (
    <tr>
      {Object.keys(driver).map((key) => (
        <td key={key}>{driver[key]}</td>
      ))}
    </tr>
  );
}

export default PaymentManagement;
