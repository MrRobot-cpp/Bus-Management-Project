import { useState } from 'react';
import styles from './CashDeposit.module.css';
import Dropdown from '../../General/Dropdown';
import PaymentGif from '../../../assets/Payment.png';

function CashDeposit() {
    const banks = ['Visa/Credit Card', 'HSBC Bank', 'CIB Bank', 'ADIB Bank'];

    const [checkedItems, setCheckedItems] = useState({
        0: false, // Assuming 0 is the index of the first item
        1: false, // Assuming 1 is the index of the second item
    });
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMade, setPaymentMade] = useState( ); // State to track payment status

    // Function to handle checkbox change
    const handleCheckboxChange = (index) => {
        if ((!paymentMade &&!checkedItems[0])||(!paymentMade &&!checkedItems[1])) { // Check if payment hasn't been made yet
            const newCheckedItems = { ...checkedItems, [index]: !checkedItems[index] };
            setCheckedItems(newCheckedItems);

            // Calculate total amount
            let amount = totalAmount;
            if (newCheckedItems[index]) { // If checkbox is checked
                if (index === 0 && !checkedItems[0]) {
                    amount += 4500;
                } else if (index === 1 && !checkedItems[1]) {
                    amount += 3000;
                }
            } else if(!newCheckedItems[index]){ // If checkbox is unchecked
                if (index === 0 && checkedItems[0]) {
                    amount -= 4500;
                } else if (index === 1 && checkedItems[1]) {
                    amount -= 3000;
                }
            }
            setTotalAmount(amount);
        }
    };

    // Function to handle pay button click
    const handlePay = () => {
        if(totalAmount!=0   ){         
        setTotalAmount(0); // Reset total amount to 0
        setPaymentMade(true); // Set payment made to true
        }
        // Disable only the checked checkboxes after payment
        const newCheckedItems = { ...checkedItems };
        for (const key in newCheckedItems) {
            if (newCheckedItems[key]) {
                newCheckedItems[key] = true; // Keep selected checkboxes disabled
            }
        }
        setCheckedItems(newCheckedItems);
    };

    return (
        <>
            <div className={styles["cash-deposit-container"]}>
                <div className={styles["cash-deposit"]}>
                    <div className={styles["cash-deposit-content"]}>
                        <div className={styles["first-row-container"]}>
                            <div className={styles["choosebank-container"]}>
                                <h3>Choose the bank</h3>
                                <div className={styles["dropdown-holder"]}>
                                    <Dropdown options={banks} />
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
                                                <td><input type="checkbox" onChange={() => handleCheckboxChange(0)} disabled={paymentMade && checkedItems[0]} /></td>
                                            </tr>
                                            <tr>
                                                <td>3000</td>
                                                <td>10/6/2024</td>
                                                <td><input type="checkbox" onChange={() => handleCheckboxChange(1)} disabled={paymentMade && checkedItems[1]} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={styles['second-row-container']}>
                            <div className={styles['amount-container']}>
                                <h3>Amount to be paid</h3>
                                <div className={styles["amount-txt"]}>
                                    <h4>Amount: {totalAmount} LE</h4>
                                    <button className={styles['pay-btn']} onClick={handlePay}>Pay</button>
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
    );
}

export default CashDeposit;
