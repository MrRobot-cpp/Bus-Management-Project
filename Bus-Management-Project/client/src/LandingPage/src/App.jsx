import MenuItemButtonRegular from "./Componets/MenuItemButton/MenuItemButtonRegular.jsx"
import "./Componets/MenuItemButton/MenuItemButton.css"
import HorizontalCard from "./Componets/HorizontalCard/HorizontalCard.jsx";
import FeatureCard from "./Componets/FeaturesCard/FeatureCard.jsx";
import MenuItemButtonHighlighted from "./Componets/MenuItemButton/MenuItemButtonHighLighted.jsx";



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

          <button className="menu-item-highlighted header-login-btn">Learn More</button>


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

    {/* Horizontal Card Section (component) */}
    <HorizontalCard imageSide={"row"}/>
  

    {/* Features Card Section */}
    {/* <div className="features-container">
      <h2 className="features-subheader">Features</h2>
      <div className="features-display">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
      <div className="features-btn">
          <MenuItemButtonHighlighted text="Learn more " />
      </div>
    </div> 
    */}



    </>
  );
}

export default App
