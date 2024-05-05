// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AdminDashboard.css'
import PageHeader from '../Student/PageHeader/PageHeader'
import studentImage from '../../assets/User.png'; // Import the image
import iconImage from '../../assets/Rectangle 2373.png';
import iconImage1 from '../../assets/Rectangle 2374.png';
import iconImage2 from '../../assets/Rectangle 2375.png';
import chartimage from '../../assets/Order.png';

function AdminDashboard() {
  return (
    <div className='Dashboard-Container'>
      <PageHeader text='Admin Dashboard'/>
      <div className='main-container'>


        {/* da b2a m4 el tany da el awlany w rkz m3aya kda  */}
        <div className='stylee'>
        <div className='Students'>
  <h6>Students</h6>
    <h2>4,209</h2>
  <div className='info'>
    <div className='percentages'>
      <ul>
      <ul>
                <li className="small-text"><img src={iconImage} alt="New Icon" /> 62% New</li>
                <li className="small-text"><img src={iconImage1} alt="Returning Icon" /> 13% Returning</li>
                <li className="small-text"><img src={iconImage2} alt="Inactive Icon" /> 23% Inactive</li>
              </ul>
      </ul>
    </div>
    <img className='Pie' src={studentImage} alt="Student" />
  </div>
</div>

<div className='combo-row'>
    <select>
      <option value="timeframe">TimeFrame: All time</option>
    </select>
    </div>


</div>
ِ{/* m4 el box el awlany da el tany  */}
<div className='stylee'>
<div className='Students'>
  <h6>Trips</h6>
    <h2>1,302</h2>
  <div className='info'>
    <div className='percentages'>
      <ul>
      <ul>
                <li className="small-text"><img src={iconImage} alt="New Icon" /> 40% Prepaid</li>
                <li className="small-text"><img src={iconImage1} alt="Returning Icon" /> 60% Postpaid</li>
              </ul>
      </ul>
    </div>
    <img className='Pie' src={chartimage} alt="Student" />
  </div>
</div>

<div className='combo-row'>
    <select>
      <option value="source">Source: All</option>
    </select>
    </div>
</div>
{/* dool b2a ely homa kda ely homa el 3 components  */}
<div className='test'>
  <div className='row1'>
    <div className='compo'>
      <h6> Recievables</h6>
      <h2>$25K</h2>
    </div>
    <div className='compo'>
      <h6> Cash Receipts</h6>
      <h2>$3,500</h2>
    </div>
    <div className='compo'>
      <h6> Expenses Left</h6>
      <h2>$21.5K</h2>
    </div>
  </div>

  <div className='row2'>
    <div className='compo3'>
      <h4>Payments and Trips Summary</h4>
    </div>
  </div>

  <div className='row3'>
    <div className='compo1'>
      <h6>In Progress Trips</h6>
      <h2>500</h2>
    </div>
    <div className='compo1'>
      <h6> Completed Trips</h6>
      <h2>150</h2>
    </div>
    <div className='compo1'>
      <h6> Owned Buses</h6>
      <h2>100</h2>
    </div>
  </div>

  
 {/* 34an lma negy n3ml el combo button wla m4 3rfa esmo eh  */}
<div className='combo-row1'>

    <select>
      <option value="medium">Medium: All</option>
    </select>
  </div>
  <div className='compo5'>
</div>

</div>
  




      </div>
    </div>
  )
}

export default AdminDashboard

