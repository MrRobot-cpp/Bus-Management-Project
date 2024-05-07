import  { useState } from "react";
import "./StudentProfile.css";
import PropTypes from "prop-types";


function StudentProfile(props) {
    const [isChecked, setIsChecked] = useState(false);

    const [editableIndex, setEditableIndex] = useState(-1);

    const student = {
        name: props.name,
        username: props.username,
        id: props.id,
        birthdate: props.birthdate,
        gender: props.gender,
        email: props.email,
        phone: props.phone,
        location: props.location,
        password: props.password,
    };

    const [tableItems, setTableItems] = useState([
        { text: "Name:", value: student.name },
        { text: "Email:", value: student.email },
        { text: "Password:", value: student.password },
        { text: "Phone:", value: student.phone },
        { text: "Location:", value: student.location },
        { text: "Birthdate:", value: student.birthdate },
        { text: "Gender:", value: student.gender },
    ]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setEditableIndex(-1); 
    };

    const handleEditClick = (index) => {
        setEditableIndex(index);
    };

    const handleSaveClick = () => {
        const updatedTableItems = [...tableItems];
        updatedTableItems[editableIndex].value = document.getElementById(`input-${editableIndex}`).value;
        setTableItems(updatedTableItems);
        setEditableIndex(-1);
    };

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
                                    <h2 className="profile-name">3bdel3aty</h2>
                                    <h4 className="profile-name">ID: 123456</h4>
                                </div>
                            </div>
                            <div className="right-profile">
                                <label>
                                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="toggle-checkbox"/>
                                    <div className="toggle-switch">
                                        <h5 className="edit-toggle-txt">{!isChecked && "Edit"}</h5>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="student-profile-body">
                    <div className="personal-info-container">
                    <div className="personal-info">
                        <h2>Personal Information</h2>
                    </div>
                    <div className="table-info">
                        <table className="student-table">
                            {tableItems.map((item, index) => (
                                <tr key={index}>
                                    <td  className="student-table-td">{item.text}</td>
                                    <td className="student-table-td">
                                        {editableIndex === index ? (
                                            <input
                                                id={`input-${index}`}
                                                type="text"
                                                defaultValue={item.value}
                                                className="input-personal-info"
                                            />
                                        ) : (
                                            <span>{item.value}</span>
                                        )}
                                    </td>
                                    <td className="student-table-td">
                                        {(index !== 0 && index !== 5 && index !== 6) && isChecked && // Show Edit button for relevant fields only when isChecked is true
                                            (editableIndex === index ? (
                                                <button onClick={handleSaveClick} className="edit-btn">Save</button>
                                            ) : (
                                                <button onClick={() => handleEditClick(index)}  className="edit-btn">Edit</button>
                                            ))}
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    </div>
                    <div className="upcoming-trip-container">
                    <div className="personal-info">
                        <h2>Upcoming Trip</h2>
                    </div>
                    <div className="bottom-upcoming-trip">
                        <div className="upcoming-trip-info">
                            <h2 className="upcoming-trip-txt">Data</h2>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        </>
    );
}
StudentProfile.propTypes={
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.number,
    birthdate: PropTypes.string,
    gender: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    location: PropTypes.string,
    password: PropTypes.string
}

export default StudentProfile;
