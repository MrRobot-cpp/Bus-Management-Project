import "./HorizontalCard.css";
import MenuItemButtonHighlighted from "../MenuItemButton/MenuItemButtonHighLighted";
import PropTypes from 'prop-types'

const HorizontalCard = (props) => {
  return (
        <div className="horizontal-card" style={{backgroundColor: props.background}}>
            <div className="horizontal-card-content" style={{ flexDirection: props.imageSide === 'row' ? 'row' : 'row-reverse' }}>
            <div className="horizontal-card-info" >
                <h1 className="headline" style={{color: props.textColor}}>{props.headlineText}</h1>
                <p className="description" style={{color: props.textColor}}>{props.descriptionText}
                </p>
                    <MenuItemButtonHighlighted text="Learn More" />
            </div>
                <img className="hc-image"  src={props.imageLink} alt="Live Bus Transportation System" style={{width: props.imageSize}}/>
            </div>
        </div>
  );
}

HorizontalCard.propTypes = {
  imageSide: PropTypes.string,
  headlineText: PropTypes.string,
  descriptionText: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  imageLink: PropTypes.string,
  imageSize: PropTypes.string
}

export default HorizontalCard;