import styles from './DriverProfile.module.css'
function DriverProfile(props){
    const {name,age,trips,type}=props;
    return(<>
        <div className={styles.driverProfile}>
        <div className={styles.profile}>
        <div className={styles.profilePic}/>
        <h5>{type}</h5>
        <h4>{name}</h4>
        </div>
        <span className={styles.driverInfo}>
            <h4>Age: {age}</h4>
            <h4>Trips: {trips}</h4>
        </span>
        </div>    
    </>)
}
export default DriverProfile;