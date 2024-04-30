import './MenuItemButton.css'
import PropTypes from 'prop-types'

const MenuItemButtonRegular = (props) => {
 return (
   <button className="menu-item-regular">
   <a className="link-animation" href={props.href}>{props.text}</a>
</button> 
 )
}

MenuItemButtonRegular.propTypes = {
 text: PropTypes.string,
 href: PropTypes.string
}

export default MenuItemButtonRegular;