import './MenuItemButton.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const MenuItemButtonRegular = (props) => {
return (
  <button className="menu-item-regular">
      <Link className="link-animation" to={props.hRef}>{props.text}</Link>
    </button> 
);
}

MenuItemButtonRegular.propTypes = {
text: PropTypes.string,
hRef: PropTypes.string
}

export default MenuItemButtonRegular;