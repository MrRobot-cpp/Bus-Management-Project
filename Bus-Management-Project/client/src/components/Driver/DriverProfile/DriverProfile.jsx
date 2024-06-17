// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './DriverProfile.module.css'
function DriverProfile(props){
    // eslint-disable-next-line react/prop-types
    const {name,age,noOfTrips,type}=props;

    const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

    return(<>
      <div className={styles.driverInformation}>
      <div className={styles.driverHeader}>
        {/* <img 
          src="driver-image-url" 
          alt="Driver" 
          className={styles.driverImage} 
        /> */}
        <div>
         <h1>Driver Information </h1>
         <hr className="line"></hr>
          <h3>Ahmed Samer</h3>
          <p>#a48c7856</p>
        </div>
      </div>
      <div className={styles.driverRating}>
        <div className={styles.stars}>
          {[...Array(5)].map((star, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>
        <p className={styles.ratingValue}>4.83</p>
      </div>
    </div>

    

    
    </>)
}
export default DriverProfile;