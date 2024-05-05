import './FeatureCard.css';
import '../MenuItemButton/MenuItemButton.css';
import PropTypes from 'prop-types'


const FeatureCard = (props) => {


  return (
    <div className="feature-card">
        <div className="feature-card-icon" style={{backgroundColor: props.iconColor}} >
        <i className={props.iconLink}></i>
        </div>
        <div className="feature-card-content">
        <h2 className="feature-card-headline">{props.headlineText}</h2>
        <p className='feature-card-description'>{props.descriptionText}</p>
        <button className="menu-item-regular">
            <a className="link-animation feature-card-link" href={props.hRef}>Learn More</a>
        </button>
        </div>
    </div>
  );
}
FeatureCard.propTypes = {
    iconColor: PropTypes.string,
    headlineText: PropTypes.string,
    descriptionText: PropTypes.string,
    hRef: PropTypes.string,
    iconLink: PropTypes.string
}

export default FeatureCard