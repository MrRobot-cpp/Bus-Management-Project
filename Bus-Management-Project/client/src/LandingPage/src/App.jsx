import MenuItemButtonRegular from "./Componets/MenuItemButton/MenuItemButtonRegular.jsx"
import MenuItemButtonHighlighted from "./Componets/MenuItemButton/MenuItemButtonHighLighted.jsx";
import { useState } from 'react';




function App() {

  const [toggleOpen, setToggleOpen] = useState(false);

  const toggleDropDown = () => {
    setToggleOpen(!toggleOpen);

    const toggleBtnIcon = document.querySelector('.toggle-btn-logo');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    //check if class "open" is in dropdown menu element (if present, value true)
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  };


  return (
    <>

    <nav className="header">
      <div className="header-contents">
          <h1 className="logo-placeholder">RouteMinder</h1>
          <ul className="unordered-list">
              <li className="list"><MenuItemButtonRegular text="Home" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="About" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="Services" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="Contact Us" href="#" /></li>
          </ul>

          <MenuItemButtonHighlighted text="Login" />
          <div className="toggle-btn" onClick={toggleDropDown}>
              <i className="fa-solid fa-bars toggle-btn-logo"></i>
          </div>

          <div className="dropdown-menu" >
              <li className="list"><MenuItemButtonRegular text="Home" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="About" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="Services" href="#" /></li>
              <li className="list"><MenuItemButtonRegular text="Contact Us" href="#" /></li>
              <li className="list"> <MenuItemButtonHighlighted text="Login" className="login-btn" /></li>
          </div>

      </div>
    </nav>


  
    </>
  );
}

export default App
