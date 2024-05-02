import './MenuItemButton.css'
import PropTypes from 'prop-types';

const MenuItemButtonHighlighted = (props) => {
  return (
    <button className={`menu-item-highlighted ${props.classCondition ? props.className2 : ''}`}   
      style={{width: props.Width}}  >{props.text}
      </button>
    
  )
}

MenuItemButtonHighlighted.propTypes = {
  text: PropTypes.string,
  className2: PropTypes.string,
  classCondition: PropTypes.bool,
  Width: PropTypes.string
}

MenuItemButtonHighlighted.defaultProp

export default MenuItemButtonHighlighted;