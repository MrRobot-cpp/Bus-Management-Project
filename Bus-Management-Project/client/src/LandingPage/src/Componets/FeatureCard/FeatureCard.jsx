import './FeatureCard.css';
import '../MenuItemButton/MenuItemButton.css';
import PropTypes from 'prop-types'


const FeatureCard = (props) => {
  return (
    
    <div className="feature-card">
        <div className="feature-card-icon" style={{backgroundColor: props.iconColor}} ></div>
        <div className="feature-card-content">
        <h2 className="feature-card-subheader">Headline</h2>
        <p className='feature-card-description'>This is a description of the first feature of our app. 
            We are going to briefly outline what this feature does.</p>
        <button className="menu-item-regular">
      <a className="link-animation feature-card-link" href="#">Learn More</a>
    </button>
        </div>
    </div>
  )
}
FeatureCard.propTypes = {
    iconColor: PropTypes.string
}

export default FeatureCard