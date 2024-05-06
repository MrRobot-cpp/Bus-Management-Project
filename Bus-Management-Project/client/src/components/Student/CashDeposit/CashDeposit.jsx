// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './CashDeposit.module.css';
import Dropdown from '../../General/Dropdown';
import PaymentGif from '../../../assets/Paymenttt.png';

function CashDeposit() {
    const banks = ['Visa/Credit Card','HSBC Bank', 'CIB Bank','ADIB Bank'];
return (
    <>
    <div  className={styles["cash-deposit-container"]}>
    <div  className={styles["cash-deposit"]}>
    <div className={styles["cash-deposit-content"]}>
        <div className={styles["first-row-container"]}>
        <div className={styles["choosebank-container"]}>
        <h3>Choose the bank</h3>
        <div className={styles["dropdown-holder"]}>
        <Dropdown options={banks}/>  
        </div>
        </div>
        <div className={styles["current-due-container"]}>
        <h3>Current Due</h3>
        <div className={styles["deposit-table"]}>
        <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Due Date</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4500</td>
                        <td>20/5/2024</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>3000</td>
                        <td>10/6/2024</td>
                        <td ><input type="checkbox" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
        <div className={styles['second-row-container']}>
        <div className={styles['amount-container']}>
        <h3>Amount to be paid</h3>
        <div className={styles ["amount-txt"]}>
        <h4>Amount:</h4>
        </div>
        </div>
        <div className={styles["animation-container"]}>
        <img src={PaymentGif} alt="" />
        </div>
        </div>
        </div>
    </div>
    </div>      
    </>
)
}

export default CashDeposit