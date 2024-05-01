// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const student = {
        name: "Mohamed abdelaaty",
        username: "3bdel3aty",
        id: "123456",
        birthdate: "January 1, 1990",
        gender: "Male",
        email: "abdelaaty@m3kamele7tramy.com",
        phone: "01284049697",
        location: "New Nozha",
        password: "Abdelaaty%",
    };
    const tableItems = [
        { text: "Name:", value: student.name },
        { text: "Email:", value: student.email },
        { text: "Password:", value: student.password },
        { text: "Phone:", value: student.phone },
        { text: "Location:", value: student.location },
        { text: "Birthdate:", value: student.birthdate },
        { text: "Gender:", value: student.gender },
    ];
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-info">
                        <div className="top-profile">
                            <div className="left-profile">
                                <img
                                    className="profile-pic"
                                    src="https://www.bing.com/th?id=OIP.hF4tMZhXY6KFPMPqRiBsvAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                    alt=""
                                />
                                <div className="profile-txt">
                                    <h2 className="profile-name">{student.username}</h2>
                                    <h4>ID: {student.id}</h4>
                                </div>
                            </div>
                            <div className="right-profile">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="toggle-checkbox"
                                    />
                                    <div className="toggle-switch">
                                        <h5 className="edit-toggle-txt">{!isChecked && "Edit"}</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <h2>Personal Information</h2>
                    </div>
                    <div className="table-info">
                        <table>
                            {tableItems.map((item, index) => (
                                <tr key={index}>
                                    <>
                                        <td>{item.text}</td>
                                        <td>{item.value}</td>
                                        <td>
                                            {" "}
                                            {index !== 0 && index !== 6 && isChecked && (
                                                <input
                                                    type="button"
                                                    className="edit-btn"
                                                    value=" edit "
                                                />
                                            )}
                                        </td>
                                    </>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className="personal-info">
                        <h2>Upcoming Trip</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StudentProfile;
