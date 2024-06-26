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
   
    <div>
      <h1>Driver Information</h1>
      <hr className="thick-line" />
     
      <img 
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
      alt="Driver" 
      className={styles.driverImage} 
    />
      <h3>Rahma Soliman</h3>
      <div className={styles.driverDetails}>
        <p>#a48c7856</p>
       
     
        <div className={styles.driverRating}>
       <span className={styles.ratingValue}> 4.83</span> 

          <div className={styles.stars}>
            {[...Array(5)].map((star, index) => (
              <i key={index} className="fas fa-star"></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
     
    

    
    </>)
}
export default DriverProfile;