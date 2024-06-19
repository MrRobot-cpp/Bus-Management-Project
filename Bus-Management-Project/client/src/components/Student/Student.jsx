import { useState } from "react";
import VerticalNavbar from '../General/VerticalNavbar';
import Profile from "../General/Profile/Profile";
import PageHeader from "./PageHeader/PageHeader";
import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css";
import StudentDashboard from './studentDashboard/StudentDashboard.jsx';
import StudentDeposit from "./StudentDeposit/StudentDeposit.jsx";

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
    const [header, setHeader] = useState("Dashboard");

    const menuItems = [
        { text: "Trips" },
        { text: "Deposit" },
        { text: "Profile" },
    ];
    
    return(
        <>
            <div className={styles["main-container"]} >
                <div className={styles["top-container"]} >
                    <PageHeader text={`Student ${header}`}/>
                </div>
                <div className={styles["bottom-container"]}>
                    <div className={styles["bottom-left-container"]}>
                        <VerticalNavbar menuItems={menuItems} onQuery={setHeader}/>
                    </div>
                    <div className={styles["bottom-right-container"]}>
                        {header==="Dashboard" && <StudentDashboard/> }
                        {header==="Trips" && <StudentTrip/> }
                        {header==="Deposit" &&<StudentDeposit/> }
                        {header==="Profile" && <Profile user={exampleObj}/>}        {/* <StudentTrip/> */}
                    </div>
                </div>
            </div>
        </>
    )

}
export default Student;