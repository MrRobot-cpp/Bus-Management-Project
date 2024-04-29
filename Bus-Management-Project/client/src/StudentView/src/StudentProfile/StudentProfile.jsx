import React, {useState} from "react";
import "./StudentProfile.css";


function StudentProfile() {


    return(
        <>
        <div className="card-container">
         <div className="card">

                <div className="card-info">
                    <span className="picture-name">      
                        <a className="card-logo"><i class="fa-regular fa-user icon"></i> </a>
                    <h2 className="card-header">3bdel3aty</h2>
                    </span>
                    <button className="edit-btn">Edit Personal Info</button>
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