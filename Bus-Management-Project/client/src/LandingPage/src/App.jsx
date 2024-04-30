import MenuItemButtonRegular from "./Componets/MenuItemButton/MenuItemButtonRegular.jsx"
import MenuItemButtonHighlighted from "./Componets/MenuItemButton/MenuItemButtonHighLighted.jsx";
import "./Componets/MenuItemButton/MenuItemButton.css"



function App() {

  const toggleDropDown = () => {
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    const isOpen = dropDownMenu.classList.toggle('open');

    toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
    toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

  return (
    <>
    {/* Header */}
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
              <li><button className="login-btn">Login</button></li>
          </div>

      </div>
    </nav>
    {/* End of Header */}

  
    </>
  );
}

export default App
