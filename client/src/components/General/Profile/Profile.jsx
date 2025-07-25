/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Profile.css";
import profilePicPlaceholder from "../../../../public/images/profilepic.png";

function StudentProfile(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [editedValues, setEditedValues] = useState({});
  const [newProfilePic, setNewProfilePic] = useState("");
  const { user, component } = props;

  const handleInputChange = (event, propertyName) => {
    const newValue = event.target.value;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [propertyName]: newValue,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setNewProfilePic(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setEditableIndex(-1);
  };

  const handleEditClick = (index, propertyName) => {
    setEditableIndex(index);
    setEditedValues({ ...editedValues, [propertyName]: user[propertyName] });
  };

  const handleSaveClick = (propertyName) => {
    const newValue = editedValues[propertyName];
    // Add validation logic here
    if (propertyName === "Email" && !isValidEmail(newValue)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (propertyName === "Password" && newValue.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    // Update the corresponding value in your data or state
    const updatedUser = { ...user, [propertyName]: newValue };
    if (newProfilePic) {
      updatedUser.profilePic = newProfilePic;
    }
    console.log(`Saving ${propertyName}: ${newValue}`);
    console.log("Updated User:", updatedUser);
    // Update editedValues with the latest input value
    setEditedValues({ ...editedValues, [propertyName]: newValue });
    // Reset editableIndex to -1 to switch back to Edit mode
    setEditableIndex(-1);
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-info">
          <div className="top-profile">
            <div className="left-profile">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="upload-input"
                id="profile-pic-input"
              />
              {isChecked ? (
                <label htmlFor="profile-pic-input">
                  <img
                    className="profile-pic"
                    src={newProfilePic || user.profilePic || profilePicPlaceholder}
                    alt="profile picture"
                  />
                </label>
              ) : (
                <img
                  className="profile-pic"
                  src={newProfilePic || user.profilePic || profilePicPlaceholder}
                  alt="profile picture"
                />
              )}
              <div className="profile-txt">
                <h2 className="profile-name">{user.Name}</h2>
                <h4 className="profile-name">ID:{user.Id}</h4>
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
        <div className="student-profile-body">
          <div className="personal-info-container">
            <div className="personal-info">
              <h2>Personal Information</h2>
            </div>
            <div className="table-info">
              <table className="student-table">
                <tbody>
                  {Object.keys(user).map(
                    (propertyName, index) =>
                      propertyName !== "Id" &&  propertyName !== "Name" && (
                        <tr key={index}>
                          <td className="student-table-td">{propertyName}</td>
                          <td className="student-table-td">
                            {editableIndex === index ? (
                              <input
                                id={`input-${index}`}
                                type="text"
                                value={editedValues[propertyName] ?? user[propertyName]}
                                onChange={(event) => handleInputChange(event, propertyName)}
                                className="input-personal-info"
                              />
                            ) : (
                              <span>{user[propertyName]}</span>
                            )}
                          </td>
                          <td className="student-table-td">
                            {(propertyName === "Email" ||
                              propertyName === "Password" ||
                              propertyName === "Location") &&
                              isChecked &&
                              (editableIndex === index ? (
                                <button onClick={() => handleSaveClick(propertyName)} className="edit-btn">
                                  Save
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleEditClick(index, propertyName)}
                                  className="edit-btn"
                                >
                                  Edit
                                </button>
                              ))}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="upcoming-trip-container">
            <div className="personal-info">
              <h2>Upcoming Trip</h2>
            </div>
            <div className="bottom-upcoming-trip">
              <div className="upcoming-trip-info">
                {component}
                <h2 className="upcoming-trip-txt">Data</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-info">
          <h2>Trip History</h2>
        </div>
        <div className="Trip-history-student-profile">
          <h2 className="upcoming-trip-txt">Data</h2>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
