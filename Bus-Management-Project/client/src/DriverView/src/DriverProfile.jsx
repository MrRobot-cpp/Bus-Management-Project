import React, { useState } from 'react';
import styles from './DriverProfile.module.css'
function DriverProfile(props){
    const {name,age,noOfTrips,type}=props;

    const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

    return(<>
        <div className={styles.driverProfile}>
        <div className={styles.profile}>
        <div className={styles.profilePic}/>
        <h5>{type}</h5>
        <h2>{name}</h2>
        </div>
        <div className={styles.driverInfo}>
            <h3>Age: {age}</h3>
            <h3>Trips: {noOfTrips}</h3>
        </div>
        <div className={styles['star-rating']}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return(
          <span
            key={index}
            className={starValue <= rating ? styles.filled : styles.star}
            onClick={() => handleClick(starValue)}>
            &#9733;
          </span>
        );
      })}
    </div>
        </div>    
    </>)
}
export default DriverProfile;