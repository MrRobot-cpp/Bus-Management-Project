import React from "react";
import styles from "./Logout.module.css"
import { Link } from "react-router-dom"

function Logout(props) {
    const {onQuery} = props

  return (
    <div className={styles["overlay"]}>
      <div className={styles["logout-container"]}>
        <div className={styles["logout"]}>
         <h2>Are you sure you want to logout?</h2>
            <div className={styles["btn-container"]}>
                <button className={styles["btn-one"]} onClick={() => onQuery(false)}>cancel</button>
                <Link to="/Landing-page" className={styles["btn-two"]}>Logout</Link>

            </div>

        </div>
      </div>
    </div>
  );
}

export default Logout;
