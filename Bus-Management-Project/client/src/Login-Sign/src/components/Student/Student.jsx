import VerticalNavbar from '../general/VerticalNavbar';
import StudentProfile from "./StudentProfile/StudentProfile";
import PageHeader from "./PageHeader/PageHeader";
// import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css"
function Student(){
    const menuItems = [
        { text: "Trips" },
        { text: "Cash Deposit" },
        { text: "Profile" },
    ];

    return(
        <>
        <div className={styles["main-container"]} >
        <div className={styles["top-container"]} >
        <PageHeader text='Student Profile'/>
        </div>
        <div className={styles["bottom-container"]}>
        <div className={styles["bottom-left-container"]}>
        <VerticalNavbar menuItems={menuItems}/>
        </div>
        <div className={styles["bottom-right-container"]}>
        <StudentProfile/>
        {/* <StudentTrip/> */}
        </div>
        </div>
        </div>
        </>
    )

}
export default Student;