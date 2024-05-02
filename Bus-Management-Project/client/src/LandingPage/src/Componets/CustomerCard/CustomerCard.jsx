import './CustomerCard.css'
import PropTypes from 'prop-types'


const CustomerCard = (props) => {
  return (
    <div className="customer-card">

    <div className="customer-photo-container">
      <img className="customer-photo" src={props.imageLink} alt="client 1"></img>
    </div>

    <div className="customer-card-info">
        <p className="qutoe">“This is a customer quote. 
            The customer is going to share their opinion about our product or service, 
            hopefully it’s going to be a positive one. 
            The social proof section is important when you want to 
            increase trust and trustworthiness of your company with your website visitors.”
        </p>
        <h2 className="client-name">Name Lastname</h2>
        <h3 className="client-position">Position &#64; Company A</h3>
    </div>
    
</div>
  );
}

CustomerCard.propTypes = {
  imageLink: PropTypes.string
}


export default CustomerCard