import VerticalNavbar from '../General/VerticalNavbar';
import Profile from "../General/Profile/Profile";
import PageHeader from "./PageHeader/PageHeader";
// import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css"
<<<<<<< HEAD
import CashDeposit from "./CashDeposit/CashDeposit"
const exampleObj = {
    Email: "ahmedsamer@22gmail.com",
    name: "ahmed",
    age: 23,
    gender: "male",
    id: 20203
}
=======
// import CashDeposit from "./CashDeposit/CashDeposit"
>>>>>>> d049ecc78bf26b9d468fe21599227835019245b1
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
        {/* <CashDeposit/> */}
<<<<<<< HEAD
        <StudentProfile user={exampleObj}/>
=======
        <Profile />
>>>>>>> d049ecc78bf26b9d468fe21599227835019245b1
        {/* <StudentTrip/> */}
        </div>
        </div>
        </div>
        </>
    )

}
export default Student;