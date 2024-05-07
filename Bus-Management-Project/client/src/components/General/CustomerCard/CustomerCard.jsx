import './CustomerCard.css'
import PropTypes from 'prop-types'


const CustomerCard = (props) => {
  return (
    <div className="customer-card">

    <div className="customer-photo-container">
      <img className="customer-photo" src={props.imageLink} alt="client 1"></img>
    </div>

    <div className="customer-card-info">
        <p className="qutoe">{props.descriptionText}</p>
        <h3 className="client-name">{props.name}</h3>
        <h3 className="client-position">{props.position}</h3>
    </div>
    
</div>
  );
}

CustomerCard.propTypes = {
  imageLink: PropTypes.string,
  descriptionText: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
}


export default CustomerCard