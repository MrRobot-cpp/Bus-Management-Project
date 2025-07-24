import './MenuItemButton.css'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'; 

const MenuItemButtonRegular = (props) => {
return (
  <button className="menu-item-regular">
      <a className="link-animation" href={props.hRef}>{props.text}</a> 
    </button>  
);
}

MenuItemButtonRegular.propTypes = {
text: PropTypes.string,
hRef: PropTypes.string
}

export default MenuItemButtonRegular;