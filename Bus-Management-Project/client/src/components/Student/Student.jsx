import VerticalNavbar from '../General/VerticalNavbar';
import StudentProfile from "./StudentProfile/StudentProfile";
import PageHeader from "./PageHeader/PageHeader";
// import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css"
import CashDeposit from "./CashDeposit/CashDeposit"
function Student(){
    const menuItems = [
        { text: "Trips" },
        { text: "Deposit" },
        { text: "Profile" },
    ];
    // const profile =[
    //     {                 },
    //     {                 },
    //     {                 },
    //     {                 },
    // ]
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
        <CashDeposit/>
        {/* <StudentProfile /> */}
        {/* <StudentTrip/> */}
        </div>
        </div>
        </div>
        </>
    )

}
export default Student;