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
        <h1>{name}</h1>
        <h3 className={styles['type-text']}>{type}</h3>
        </div>

        <div className={styles['driver-info']}>
           <div className={styles['age-info']}>
            <p>Age</p>
            <p>{age}</p>
          </div>
          <div className={styles['trip-info']}>
            <p>Trips</p>
            <p>{noOfTrips}</p>
          </div>
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