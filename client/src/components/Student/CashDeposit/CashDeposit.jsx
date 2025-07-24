import { useState } from 'react';
import styles from './CashDeposit.module.css';
import Dropdown from '../../General/Dropdown';
import PaymentGif from '../../../../public/images/Payment.png';
import DepositGate from '../DepositGate/DepositGate.jsx';

function CashDeposit() {

    const [checkedItems, setCheckedItems] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
    });
    const [disabledItems, setDisabledItems] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
    });
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleCheckboxChange = (index) => {
        if (!disabledItems[index]) {
            const newCheckedItems = { ...checkedItems, [index]: !checkedItems[index] };
            setCheckedItems(newCheckedItems);

            let amount = totalAmount;
            if (newCheckedItems[index]) {
                amount += 3000;
            } else {
                amount -= 3000;
            }
            setTotalAmount(amount);
        }
    };

    const handlePay = () => {
        if (totalAmount !== 0) {
            setShowPaymentModal(true); // Show the payment modal
        }
    };

    const handlePaymentSuccess = () => {
        const newDisabledItems = { ...disabledItems };
        const newCheckedItems = { ...checkedItems };

        Object.keys(checkedItems).forEach(key => {
            if (checkedItems[key]) {
                newDisabledItems[key] = true;
                newCheckedItems[key] = true;
            }
        });

        setDisabledItems(newDisabledItems);
        setCheckedItems(newCheckedItems);
        setTotalAmount(0);
        setShowPaymentModal(false); // Close the payment modal
    };

    const handleCloseModal = () => {
        setShowPaymentModal(false); // Close the payment modal
    };

    return (
        <>
            <div className={styles["cash-deposit-container"]}>
                <div className={styles["cash-deposit"]}>
                    <div className={styles["cash-deposit-content"]}>
                        <div className={styles["first-row-container"]}>
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
                                                <td>3000</td>
                                                <td>20/5/2024</td>
                                                <td><input type="checkbox" checked={checkedItems[0]} onChange={() => handleCheckboxChange(0)} disabled={disabledItems[0]} /></td>
                                            </tr>
                                            <tr>
                                                <td>3000</td>
                                                <td>10/6/2024</td>
                                                <td><input type="checkbox" checked={checkedItems[1]} onChange={() => handleCheckboxChange(1)} disabled={disabledItems[1]} /></td>
                                            </tr>
                                            <tr>
                                                <td>3000</td>
                                                <td>10/6/2024</td>
                                                <td><input type="checkbox" checked={checkedItems[2]} onChange={() => handleCheckboxChange(2)} disabled={disabledItems[2]} /></td>
                                            </tr>
                                            <tr>
                                                <td>3000</td>
                                                <td>10/6/2024</td>
                                                <td><input type="checkbox" checked={checkedItems[3]} onChange={() => handleCheckboxChange(3)} disabled={disabledItems[3]} /></td>
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

            {showPaymentModal && (
                <div className={styles["modal"]}>
                    <div className={styles["modal-content"]}>
                        <DepositGate onSuccess={handlePaymentSuccess} onClose={handleCloseModal} />
                    </div>
                </div>
            )}
        </>
    );
}

export default CashDeposit;
