import VerticalNavbar from '../general/VerticalNavbar';
import StudentProfile from "./StudentProfile/StudentProfile";
import PageHeader from "./PageHeader/PageHeader";
// import StudentTrip from "./StudentTrip/StudentTrip";
function Student(){
    const menuItems = [
        { text: "Trips" },
        { text: "Cash Deposit" },
        { text: "Profile" },
    ];

    return(
        <>
        <PageHeader text='Student Profile'/>
        <VerticalNavbar menuItems={menuItems}/>
        <StudentProfile/>
        {/* <StudentTrip/> */}
        </>
    )

}
export default Student;