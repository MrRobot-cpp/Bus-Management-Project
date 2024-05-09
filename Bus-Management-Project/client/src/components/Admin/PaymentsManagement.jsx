// PayMangment .js

import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './PaymentsManagement.css';

function PaymentsManagement() {
  const [payment, setpayment] = useState([
    { studentName: 'rahma wael', ID: uuidv4(),Installments: '13,000',InstallmentsNum: '2', DueDate: '15/5/2024', TotalLeft: '37,000'},
    { studentName: 'shady yasser', ID: uuidv4(),Installments: '20,000',InstallmentsNum: '1', DueDate: '15/5/2024', TotalLeft: '30,000'},
    { studentName: 'hanin wael', ID: uuidv4(),Installments: '10,000',InstallmentsNum: '1', DueDate: '15/5/2024', TotalLeft: '40,000'},
   
  ]);

  const [setSelectedPayment, setSelectedPaymentsetSelectedPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 5000, y: 0 });

  const [editPaymentsetSelectedPayment, setEditPaymentsetSelectedPayment] = useState({

    studentName: '',
    ID: '',
    Installments: '',
    InstallmentsNum: '',
    DueDate: '',
    TotalLeft: '',
  });

  const positionModal = (event) => {
    const modal = document.querySelector('.modal');
    const rect = event.target.getBoundingClientRect();
    const modalWidth = modal.offsetWidth;
    const modalHeight = modal.offsetHeight;
    const clickX = rect.left + window.scrollX + rect.width / 2;
    const clickY = rect.top + window.scrollY + rect.height / 2;
    const newX = clickX - modalWidth / 2;
    const newY = clickY - modalHeight / 2;
    modal.style.left = `${newX}px`;
    modal.style.top = `${newY}px`;
  };




  const addPayment = () => {
    const newPaymentsetSelectedPayment = {
      ID: uuidv4(),
      StudentName: '',
      Installments: '',
      InstallmentsNum: '',
      DueDate: 0,
      TotalLeft: ''
    };
    setpayment([...payment, newPaymentsetSelectedPayment]);
  };

  const handleEditPaymentsetSelectedPayment = (ID, event) => {
    const PaymentsetSelectedPaymentToEdit = payment.find(PaymentsetSelectedPayment => PaymentsetSelectedPayment.ID === ID);
    setEditPaymentsetSelectedPayment(PaymentsetSelectedPaymentToEdit);
    setSelectedPaymentsetSelectedPayment(ID);
    setIsModalOpen(true);
    positionModal(event);
  };

  const handleConfirmEdit = () => {
    const updatedpayment = payment.map(PaymentsetSelectedPayment => {
      if (PaymentsetSelectedPayment.ID === setSelectedPayment) {
        return editPaymentsetSelectedPayment;
      }
      return PaymentsetSelectedPayment;
    });
    setpayment(updatedpayment);
    setIsModalOpen(false);
  };

  const handleDeletePaymentsetSelectedPayment = (ID) => {
    const updatedpayment = payment.filter(PaymentsetSelectedPayment => PaymentsetSelectedPayment.ID !== ID);
    setpayment(updatedpayment);
    setIsModalOpen(false);
  };

  return (
    <div className='PaymentManagment-container'>
      <div className='payment-management-right-container'>
        <div className='payment-container'>
          <div className='payment-header-container'>
            <div className='details-num-div'>
              <h4 className='payment-header'>Students </h4>
              <h4 className='numberOfpayment'>{payment.length}</h4>
            </div>
            <div className='add-payment-btn'>
              <button onClick={addPayment}>Add Payment</button>
            </div>
          </div>
          <hr />
          <table className="payment-table">
            <thead>
              <tr>
                <th>Student-Name</th>
                <th>Student-ID</th>
                <th>Installment</th>
                <th>Installment Number</th>
                <th>Due-Date</th>
                <th>Total-Left</th>
              
             
              </tr>
            </thead>
            <tbody>
              {payment.map((PaymentsetSelectedPayment) => (
                <tr key={PaymentsetSelectedPayment.ID}>
                  <td>{PaymentsetSelectedPayment.studentName}</td>
                  <td>{PaymentsetSelectedPayment.ID.slice(0, 8)}</td>
                  <td>{PaymentsetSelectedPayment.Installments}</td>
                  <td>{PaymentsetSelectedPayment.InstallmentsNum}</td>
                  <td>{PaymentsetSelectedPayment.DueDate}</td>
                  <td>{PaymentsetSelectedPayment.TotalLeft}</td>
                  <td>
                    <button className='editpayment-btn' onClick={(event) => handleEditPaymentsetSelectedPayment(PaymentsetSelectedPayment.ID, event)}>Edit</button>
                    <button className='editpayment-btn' onClick={() => handleDeletePaymentsetSelectedPayment(PaymentsetSelectedPayment.ID)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className={`modal`} style={{ top: setModalPosition.y + 'px', left: modalPosition.x + 'px' }}>
              <div className="modal-content">
                <p>Edit PaymentsetSelectedPayment:</p>


                	
                <input type="text" value={editPaymentsetSelectedPayment.studentName} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, studentName: e.target.value })} placeholder="student name" />
                <input type="text" value={editPaymentsetSelectedPayment.ID} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, ID: e.target.value })} placeholder="-" />
                <input type="text" value={editPaymentsetSelectedPayment.Installments} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, Installments: e.target.value })} placeholder="Installment" />
                <input type="number" value={editPaymentsetSelectedPayment.InstallmentsNum} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, InstallmentsNum: e.target.value })} placeholder="Installment number " />
                <input type="text" value={editPaymentsetSelectedPayment.DueDate} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, DueDate: e.target.value })} placeholder="Due-Date" />
                <input type="text" value={editPaymentsetSelectedPayment.TotalLeft} onChange={(e) => setEditPaymentsetSelectedPayment({ ...editPaymentsetSelectedPayment, TotalLeft: e.target.value })} placeholder="Total-Left" />
                <button onClick={handleConfirmEdit}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentsManagement;
