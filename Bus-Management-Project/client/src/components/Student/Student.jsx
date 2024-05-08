import VerticalNavbar from '../General/VerticalNavbar';
import Profile from "../General/Profile/Profile";
import PageHeader from "./PageHeader/PageHeader";
// import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css"
// import CashDeposit from "./CashDeposit/CashDeposit"
const exampleObj = {
    Name: "shady",
    Id:"123456",
    Email: "shadyyasset@gmail.com",
    Password: "shdshddd2002",
    Phone:"01284049697",
    Location:"New Nozha",
    Birthdate: "5/4/2002",
    Gender: "male",
}
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
        <Profile user={exampleObj}/>
        {/* <StudentTrip/> */}
        </div>
        </div>
        </div>
        </>
    )

}
export default Student;