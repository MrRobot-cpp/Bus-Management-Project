import MenuItemButtonRegular from "./Componets/MenuItemButton/MenuItemButtonRegular.jsx"
import "./Componets/MenuItemButton/MenuItemButton.css"
import HorizontalCard from "./Componets/HorizontalCard/HorizontalCard.jsx";
import FeatureCard from "./Componets/FeatureCard/FeatureCard.jsx";
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
              <li className="list"><MenuItemButtonRegular text="Home" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="Services" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="About" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={"#"} /></li>
          </ul>

          <button className="menu-item-highlighted header-login-btn">Learn More</button>


          <div className="toggle-btn" onClick={toggleDropDown}>
              <i className="fa-solid fa-bars toggle-btn-logo"></i>
          </div>

          <div className="dropdown-menu" >
              <li className="list"><MenuItemButtonRegular text="Home" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="Services" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="About" hRef={"#"} /></li>
              <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={"#"} /></li>
              <li><button className="login-btn">Login</button></li>
          </div>

      </div>
    </nav>
    {/* End of Header */}

    {/* Horizontal Card Section */}
    <HorizontalCard imageSide={"row"} background={'#495579'} headlineText={"RouteMinder. - Simplifying Bus Transport."} 
      descriptionText={"At RouteMinder, we understand the critical importance of safe, reliable, and efficient transportation for schools and universities. Whether you're a bustling urban campus or a quaint rural school district, our comprehensive transportation services are tailored to meet your unique needs."}/>
  

    {/* Features Card Section */}
    <div className="feature-card-container">
        <h2 className="features-title">Services</h2>
      <div className="feature-card-display">
          <FeatureCard iconLink={"fa-regular fa-hourglass-half"} iconColor={'#000'} headlineText={"Real-Time Tracking"} descriptionText={"Students can stay updated and track bus location and arrival time. Encourages stress-free transportation"}  />
          <FeatureCard iconLink={"fa-solid fa-route"} iconColor={'#251749'} headlineText={"Route Management"} descriptionText={"Drivers ensure timely departure and arrival. Manage routes with multiple stops for each round efficiently."} />
          <FeatureCard iconLink={"fa-regular fa-comments"} iconColor={'#263159'} headlineText={"Commnunication Channel"} descriptionText={"Facilitate easy communication between drivers and students."} />
          <FeatureCard iconLink={"fa-regular fa-user"} iconColor={'#4B5880'} headlineText={"Extensive Profile"} descriptionText={"Streamline administrative tasks for route, driver, and student management."} />
      </div>
      <MenuItemButtonHighlighted text="More About Our Services" />
    </div>


    </>
  );
}

export default App
