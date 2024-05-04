// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './CashDeposit.module.css'
import Dropdown from '../../General/Dropdown'
function CashDeposit() {
    const options = ['Visa/Credit Card','HSBC Bank', 'CIB Bank','ADIB Bank'];
return (
    <>
    <div  className={styles["cash-deposit-container"]}>
    <div  className={styles["cash-deposit"]}>
    <div className={styles["cash-deposit-content"]}>
        <div className={styles["choosebank-container"]}>
        <h3 className={styles["choosethebank"]}>Choose the bank</h3>
        <div className={styles["dropdown-h4-holder"]}>
        <Dropdown options={options}/>  
        </div>
        </div>
        </div>
    </div>
    </div>      
    </>
)
}

export default CashDeposit