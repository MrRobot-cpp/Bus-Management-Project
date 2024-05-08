import './MenuItemButton.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MenuItemButtonHighlighted = (props) => {
  return (
    <Link to={props.hRef}>
    <button className={`menu-item-highlighted ${props.classCondition ? props.className2 : false}`}   
      style={{width: props.Width}}  >{props.text}
      </button>
      </Link>
    
  )
}

MenuItemButtonHighlighted.propTypes = {
  text: PropTypes.string,
  className2: PropTypes.string,
  classCondition: PropTypes.bool,
  Width: PropTypes.string,
  hRef: PropTypes.string
}

MenuItemButtonHighlighted.defaultProp

export default MenuItemButtonHighlighted;