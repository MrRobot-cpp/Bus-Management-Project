import  { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
    const [isChecked, setIsChecked] = useState(false);
    const [editableIndex, setEditableIndex] = useState(-1);
    const [tableItems, setTableItems] = useState([
        { text: "Name:", value: "Mohamed abdelaaty" },
        { text: "Email:", value: "abdelaaty@m3kamele7tramy.com" },
        { text: "Password:", value: "Abdelaaty%" },
        { text: "Phone:", value: "01284049697" },
        { text: "Location:", value: "New Nozha" },
        { text: "Birthdate:", value: "January 1, 1990" },
        { text: "Gender:", value: "Male" },
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
                    <div className="personal-info">
                        <h2>Personal Information</h2>
                    </div>
                    <div className="table-info">
                        <table>
                            {tableItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.text}</td>
                                    <td>
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
                                    <td>
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
        </>
    );
}

export default StudentProfile;
