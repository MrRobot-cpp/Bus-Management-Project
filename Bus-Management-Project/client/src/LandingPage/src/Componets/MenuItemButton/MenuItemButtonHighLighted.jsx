import './MenuItemButton.css'
import PropTypes from 'prop-types';

const MenuItemButtonHighlighted = (props) => {
  return (
    <button className="menu-item-highlighted">{props.text}</button>
  )
}

MenuItemButtonHighlighted.propTypes = {
  text: PropTypes.string
}

MenuItemButtonHighlighted.defaultProp

export default MenuItemButtonHighlighted;