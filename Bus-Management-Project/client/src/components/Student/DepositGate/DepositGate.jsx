import { useState, useEffect } from "react";
import styles from "./DepositGate.module.css";

function DepositGate({ onSuccess, onClose }) {
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCVC] = useState("");
    const [errors, setErrors] = useState({
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
    });
    const [isPayButtonDisabled, setIsPayButtonDisabled] = useState(true);
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        const cardNumberInput = document.querySelector(`.${styles.cardNumber}`);
        const expiryDateInput = document.querySelector(`.${styles.expiryDate}`);
        const cvcInput = document.querySelector(`.${styles.cvv}`);

        if (cardNumberInput) {
            cardNumberInput.addEventListener("input", handleCardNumberChange);
        }
        if (expiryDateInput) {
            expiryDateInput.addEventListener("input", handleExpiryDateChange);
        }
        if (cvcInput) {
            cvcInput.addEventListener("input", handleCVCChange);
        }

        return () => {
            if (cardNumberInput) {
                cardNumberInput.removeEventListener("input", handleCardNumberChange);
            }
            if (expiryDateInput) {
                expiryDateInput.removeEventListener("input", handleExpiryDateChange);
            }
            if (cvcInput) {
                cvcInput.removeEventListener("input", handleCVCChange);
            }
        };
    }, []);

    useEffect(() => {
        validateForm();
    }, [cardHolder, cardNumber, expiryDate, cvc]);

    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Replace non-digit characters
        if (value.length <= 16) {
            setCardNumber(value);
        }
    };

    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        let formattedValue = value;

        if (value.length <= 4) {
            formattedValue = value.replace(/(\d{2})(\d{2})/, "$1/$2");
        }

        // Validate month and year
        if (formattedValue.length === 5) {
            const [month, year] = formattedValue.split("/");

            if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12 || parseInt(year, 10) < 24 || parseInt(year, 10) > 31) {
                return;
            }
        }

        setExpiryDate(formattedValue);
    };

    const handleCVCChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 3) {
            setCVC(value);
        }
    };

    const validateForm = () => {
        let newErrors = { cardHolder: "", cardNumber: "", expiryDate: "", cvc: "" };
        let isValid = true;

        if (cardHolder.trim() === "") {
            newErrors.cardHolder = "Card holder name is required.";
            isValid = false;
        }

        if (cardNumber.trim() === "") {
            newErrors.cardNumber = "Card number is required.";
            isValid = false;
        } else if (cardNumber.length !== 16) {
            newErrors.cardNumber = "Card number must be 16 digits.";
            isValid = false;
        }

        if (expiryDate.trim() === "") {
            newErrors.expiryDate = "Expiry date is required.";
            isValid = false;
        } else if (expiryDate.length !== 5) {
            newErrors.expiryDate = "Expiry date must be in MM/YY format.";
            isValid = false;
        }

        if (cvc.trim() === "") {
            newErrors.cvc = "CVC is required.";
            isValid = false;
        } else if (cvc.length !== 3) {
            newErrors.cvc = "CVC must be 3 digits.";
            isValid = false;
        }

        setErrors(newErrors);
        setIsPayButtonDisabled(!isValid);
    };

    const handlePay = () => {
        setShowErrors(true);
        if (!isPayButtonDisabled) {
            onSuccess();
        }
    };

    return (
        <div className={styles.payment}>
            <div className={styles.header}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2 className={styles.paymentHeader}>Deposit Gateway</h2>
            </div>
            <div className={styles.form}>
                <div className={styles.cardInputContainer}>
                    {showErrors && errors.cardHolder && <span className={styles.error}>{errors.cardHolder}</span>}
                    <label className={styles.formLabel}>Card Holder:</label>
                    <input
                        type="text"
                        className={`${styles.formInput} ${styles.cardHolder}`}
                        name="card_holder"
                        placeholder="Holder name"
                        value={cardHolder}
                        onChange={handleCardHolderChange}
                    />
                </div>
                <div className={styles.cardInputContainer}>
                    {showErrors && errors.cardNumber && <span className={styles.error}>{errors.cardNumber}</span>}
                    <label className={styles.formLabel}>Card number:</label>
                    <input
                        type="text"
                        className={`${styles.formInput} ${styles.cardNumber}`}
                        name="card_number"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                </div>
                <div className={styles.cardGroup}>
                    <div className={`${styles.cardItem} ${styles.iconRelative}`}>
                        {showErrors && errors.expiryDate && <span className={styles.error}>{errors.expiryDate}</span>}
                        <label className={styles.formLabel}>Expiry date (MM/YY):</label>
                        <input
                            type="text"
                            className={`${styles.formInput} ${styles.expiryDate}`}
                            name="expiry_date"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                        />
                    </div>
                    <div className={`${styles.cardItem} ${styles.iconRelative}`}>
                        {showErrors && errors.cvc && <span className={styles.error}>{errors.cvc}</span>}
                        <label className={styles.formLabel}>CVC:</label>
                        <input
                            type="text"
                            className={`${styles.formInput} ${styles.cvv}`}
                            name="cvc"
                            placeholder="000"
                            value={cvc}
                            onChange={handleCVCChange}
                        />
                    </div>
                </div>
                <div 
                    className={`${styles.payButton} ${isPayButtonDisabled ? styles.disabled : ''}`} 
                    id="payButton" 
                    onClick={handlePay}
                >
                    Pay
                </div>
            </div>
        </div>
    );
}

export default DepositGate;
