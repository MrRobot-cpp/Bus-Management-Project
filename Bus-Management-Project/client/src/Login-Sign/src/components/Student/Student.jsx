import VerticalNavbar from "../VerticalNavbar/VerticalNavbar";
import StudentProfile from "./StudentProfile/StudentProfile";
// import StudentTrip from "./StudentTrip/StudentTrip";
function Student(){
    const menuItems = [
        { icon: "fa-solid fa-shop", text: "Home" },
        { icon: "fa-solid fa-bus", text: "Trips" },
        { icon: "fa-solid fa-clock-rotate-left", text: "History" },
        { icon: "fa-solid fa-user", text: "Profile" },
        { icon: "fa-solid fa-arrow-right-from-bracket", text: "LogOut" },
    ];

    return(
        <>
        <VerticalNavbar menuItems={menuItems}/>
        <StudentProfile/>
        {/* <StudentTrip/> */}
        </>
    )

}
export default Student;