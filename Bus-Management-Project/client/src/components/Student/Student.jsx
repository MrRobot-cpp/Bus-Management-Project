import { useState } from "react";
import VerticalNavbar from '../General/VerticalNavbar';
import Profile from "../General/Profile/Profile";
import PageHeader from "./PageHeader/PageHeader";
import StudentTrip from "./StudentTrip/StudentTrip";
import styles from "./Student.module.css";
import StudentDashboard from './studentDashboard/StudentDashboard.jsx'
import StudentMapRoutes from "./StudentMapRoutes/StudentMapRoutes"
import CashDeposit from './CashDeposit/CashDeposit.jsx'

const exampleObj = {
    Name: "Shady Yasser",
    Id:"123456",
    Email: "shadyyasser@gmail.com",
    Password: "shdshddd2002",
    Location:"New Nozha"
}


function Student(){
    const [header, setHeader] = useState("Dashboard");

    const menuItems = [
        { text: "Trips" },
        { text: "Navigation" },
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
                        {header==="Deposit" &&<CashDeposit/> }
                        {header==="Navigation" &&<StudentMapRoutes/> }
                        {header==="Profile" && <Profile user={exampleObj}/>}      
                    </div>
                </div>
            </div>
        </>
    )

}
export default Student;