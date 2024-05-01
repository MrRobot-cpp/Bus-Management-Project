import React, { useState } from 'react';
import styles from './DriverProfile.module.css'
function DriverProfile(props){
    const {name,age,noOfTrips,type}=props;

    const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

    return(<>
        <div className={styles['driver-profile']}>
        <div className={styles.profile}>
        <div className={styles['profile-pic']}/>
        <h2>{name}</h2>
        <h5 className={styles['type-text']}>{type}</h5>
        </div>
        <div className={styles['driver-info']}>
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