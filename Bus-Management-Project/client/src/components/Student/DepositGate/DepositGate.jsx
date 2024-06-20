import { useState, useEffect } from "react";
import "./DepositGate.css";

function DepositGate({ onSuccess }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCVC] = useState("");

    useEffect(() => {
        const cardNumberInput = document.querySelector(".card_number");
        const expiryDateInput = document.querySelector(".expiry_date");
        const cvcInput = document.querySelector(".cvv");

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

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\s/g, "");
        setCardNumber(value);
    };

    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 4) {
            setExpiryDate(value.replace(/(\d{2})(\d{2})/, "$1/$2"));
        }
    };

    const handleCVCChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 3) {
            setCVC(value);
        }
    };

    const handlePay = () => {
        onSuccess(); 
    };

    return (
        <div className="payments-management">
            <div className="payment">
                <div className="payment-logo">
                    <p>Pay</p>
                </div>
                <h2>Deposit Gateway</h2>
                <div className="form">
                    <div className="card space icon-relative">
                        <label className="label"> Card Holder:</label>
                        <input
                            type="text"
                            className="input card_holder"
                            name="card_holder"
                            placeholder="Holder name"
                        />
                        <i className="far fa-user"></i>
                    </div>
                    <div className="card space icon-relative">
                        <label className="label">Card number:</label>
                        <input
                            type="text"
                            className="input card_number"
                            name="card_number"
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                        />
                        <i className="far fa-credit-card"></i>
                    </div>
                    <div className="card_grp space">
                        <div className="card_item icon-relative">
                            <label className="label">Expiry date (MM/YY):</label>
                            <input
                                type="text"
                                className="input expiry_date"
                                name="expiry_date"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                            />
                            <i className="far fa-calendar-alt"></i>
                        </div>
                        <div className="card_item icon-relative">
                            <label className="label">CVC:</label>
                            <input
                                type="text"
                                className="input cvv"
                                name="cvc"
                                placeholder="000"
                                value={cvc}
                                onChange={handleCVCChange}
                            />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="btn" id="payButton" onClick={handlePay}>
                        Pay
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepositGate;