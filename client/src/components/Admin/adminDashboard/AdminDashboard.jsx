//eslint-disable-next-line no-unused-vars
import React from 'react';
import './AdminDashboard.css';
import studentImage from '../../../../public/images/User.png'; // Import the image
import iconImage from '../../../../public/images/Rectangle 2373.png';
import iconImage1 from '../../../../public/images/Rectangle 2374.png';
import iconImage2 from '../../../../public/images/Rectangle 2375.png';
import chartimage from '../../../../public/images/Order.png';
import chartimage2 from '../../../../public/images/chart.png';
import chartimage3 from '../../../../public/images/chart2.png';




function AdminDashboard() {
  return (
    <div className='Dashboard-Container'>
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
    <div className='compo6'>
    <h6>Admin Activity</h6>
    <h6 className='line-break'></h6>
    <h5> User Management<span>139</span></h5>
    <h5> Content Management <span>283</span></h5>
    <h5> Data Management <span>782</span></h5>
    <h5> Document Managemens <span>1,923</span></h5>
    <h5> Reporting and Analytics <span>103</span></h5>
    <h5> Integration and APIs<span>477</span></h5>
    <h5> Training and Support <span>280</span></h5>
    </div>
 
    <div className='compo7'>
    <h6>Top Drivers Rates </h6>
    <h6 className='line-break1'></h6>
    <ul>
      <h4>
      <li className="small-text">{/* <img src={iconImage3} alt="New Icon" /> */}
      </li>
      </h4>
      <h4>

<li className="small-text">{/* <img src={iconImage4} alt="New Icon" /> */}
      Abdelrahman Mohamed 
</li>
</h4>

<h4>

<li className="small-text">{/* <img src={iconImage5} alt="New Icon" /> */}
 Mahmoud El-Maghraby
 </li>
</h4>

<h4>

<li className="small-text">{/* <img src={iconImage6} alt="New Icon" /> */}
Mohamed Badran 
</li>
</h4>

<h4>
<li className="small-text">{/* <img src={iconImage7} alt="New Icon" /> */}

Wael Badran 
</li>
</h4>

<h4>

<li className="small-text">{/* <img src={iconImage8} alt="New Icon" /> */}
Ahmed El-Ghazoly
</li>
</h4>

<h4>
<li className="small-text">{/* <img src={iconImage8} alt="New Icon" /> */}
Rakan Waleed 
</li>
</h4>

    </ul>
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
    <div className='compo6'>
    <h6>Top Routes Members </h6>
    <h6 className='line-break'></h6>
    <h5> Nozhat to MIU (UNI)<span>1,500</span></h5>
    <h5> Rehab to GUC (UNI)<span>1,080</span></h5>
    <h5> Mohandiseen to AUC (UNI)<span>383</span></h5>
    <h5> Mokkataam to MTI (UNI)<span>582</span></h5>
    <h5> 6th October to MSA (UNI)<span>1000</span></h5>
    <h5> New Cairo to  FUE (UNI)<span>680</span></h5>
    <h5> Abbassiya to Cairo (UNI)<span>350 </span></h5>
    </div>
    
    <div className='compo8'>
    <h6 className='line-break1'></h6>
    <h4>4.9</h4>
    <h4>2.0</h4>
    <h4>1.3</h4>
    <h4>2.2</h4>
    <h4>5.0</h4>
    <h4>3.4</h4>


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
    <img src={chartimage2} alt="New Icon" />
</div>
<div className='compo5'>
    <img src={chartimage3} alt="New Icon" />
</div>
</div>
  

      </div>
    </div>
  )
}

export default AdminDashboard

