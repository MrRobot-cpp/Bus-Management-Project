import { useState } from 'react';
import styles from './CashDeposit.module.css';
import Dropdown from '../../General/Dropdown';
import PaymentGif from '../../../assets/Payment.png';
import DepositGate from '../DepositGate/DepositGate';

function CashDeposit() {
    const banks = ['Visa/Credit Card', 'HSBC Bank', 'CIB Bank', 'ADIB Bank'];

    const [checkedItems, setCheckedItems] = useState({
        0: false,
        1: false,
    });
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMade, setPaymentMade] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleCheckboxChange = (index) => {
        if (!paymentMade || !checkedItems[0] || !checkedItems[1]) {
            const newCheckedItems = { ...checkedItems, [index]: !checkedItems[index] };
            setCheckedItems(newCheckedItems);

            let amount = totalAmount;
            if (newCheckedItems[index]) {
                if (index === 0 && !checkedItems[0]) {
                    amount += 4500;
                } else if (index === 1 && !checkedItems[1]) {
                    amount += 3000;
                }
            } else {
                if (index === 0 && checkedItems[0]) {
                    amount -= 4500;
                } else if (index === 1 && checkedItems[1]) {
                    amount -= 3000;
                }
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
        setTotalAmount(0);
        setPaymentMade(true);
        setShowPaymentModal(false); // Close the payment modal
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

            {showPaymentModal && (
                <div className={styles["modal"]}>
                    <div className={styles["modal-content"]}>
                        <DepositGate onSuccess={handlePaymentSuccess} />
                    </div>
                </div>
            )}
        </>
    );
}

export default CashDeposit;
