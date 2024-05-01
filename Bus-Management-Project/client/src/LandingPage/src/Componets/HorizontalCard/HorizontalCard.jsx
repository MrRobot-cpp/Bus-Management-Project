import "./HorizontalCard.css";
import MenuItemButtonHighlighted from "../MenuItemButton/MenuItemButtonHighLighted";
import busImage from "/Users/sc/Desktop/Bus-Management-Project/Bus-Management-Project/client/src/LandingPage/src/assets/bus-image-2.png";
import PropTypes from 'prop-types'

const HorizontalCard = (props) => {
  return (
        <div className="horizontal-card" style={{backgroundColor: props.background}}>
            <div className="horizontal-card-content" style={{ flexDirection: props.imageSide === 'row' ? 'row' : 'row-reverse' }}>
            <div className="horizontal-card-info" >
                <h1 className="headline">{props.headlineText}</h1>
                <p className="description">{props.descriptionText}
                </p>
                    <MenuItemButtonHighlighted text="Learn More" />
            </div>
                <img className="hc-image" src={busImage} alt="Live Bus Transportation System"/>
            </div>
        </div>
  );
}

HorizontalCard.propTypes = {
  imageSide: PropTypes.string,
  headlineText: PropTypes.string,
  descriptionText: PropTypes.string,
  background: PropTypes.string
}

export default HorizontalCard;