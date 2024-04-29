import React, {useState} from "react";
import "./StudentProfile.css";


function StudentProfile() {


    return(
        <>
        <div className="card-container">
         <div className="card">

                <div className="card-info">
                    <div className="top-profile">      
             <img  className="profile-pic" src="https://www.bing.com/th?id=OIP.hF4tMZhXY6KFPMPqRiBsvAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />           
                    <h2 className="profile-name">3bdel3aty</h2>
                    <h4>ID: S32423</h4>
                    <button>Edit Personal Info</button>
                    </div>
                    </div>
                    <div>
                        <h2>Personal Information</h2>
                    </div>
                    <div className="table-info">
                    <table>
        <tr>
            <td>Name:</td>
            <td>Mohamed Abdelaaty</td>
        </tr>
        <tr>
            <td>ID:</td>
            <td>123456</td>
        </tr>
        <tr>
            <td>Birthdate:</td>
            <td>January 1, 1990</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>abdelaaty@m3kamele7tramy.com</td>
        </tr>
        <tr>
            <td>Phone:</td>
            <td>01284049697</td>
        </tr>
    </table>
    </div>
            </div>
        </div>
        </>
        );
}
export default StudentProfile;