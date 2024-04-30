import "./HorizontalCard.css";
import MenuItemButtonHighlighted from "../MenuItemButton/MenuItemButtonHighLighted";
import busImage from "/Users/sc/Desktop/Bus-Management-Project/Bus-Management-Project/client/src/LandingPage/src/assets/bus-image-2.png";
import PropTypes from 'prop-types'

const HorizontalCard = (props) => {

  return (

        <div className="horizontal-card">

            <div className="horizontal-card-content" style={{ flexDirection: props.imageSide === 'row' ? 'row' : 'row-reverse' }}>
            <div className="horizontal-card-info" >
                <h1>RouteMinder. - Simplifying Bus Transport.</h1>
                <p>This is a website for a fictional company that develops 
                    an app that provides features and services for its users.
                </p>
                    <MenuItemButtonHighlighted text="Learn More" />
            </div>

                <img className="hc-image" src={busImage} alt="Live Bus Transportation System"/>
            </div>
        </div>
  );
}

HorizontalCard.propTypes = {
  imageSide: PropTypes.string
}

export default HorizontalCard;