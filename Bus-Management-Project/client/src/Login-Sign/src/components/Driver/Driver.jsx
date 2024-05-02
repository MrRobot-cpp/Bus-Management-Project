import React from 'react'
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar'
import Home from './Home';
import PageHeader from '../Student/PageHeader/PageHeader'
import styles from './Driver.module.css'


function Driver() {
    const menuItems = [
        { icon: "fa-solid fa-shop", text: "Home" },
        { icon: "fa-solid fa-bus", text: "Trips" },
        { icon: "fa-regular fa-comments", text: "Chat" },
        { icon: "fa-solid fa-clock-rotate-left", text: "History" },
        { icon: "fa-solid fa-user", text: "Profile" },
        { icon: "fa-solid fa-arrow-right-from-bracket", text: "LogOut" },
    ];
  return (
    <div className={styles['main-container']}>
      <PageHeader text={"Driver"}/>
      <div className={styles['home-container']}>
      <VerticalNavbar menuItems={menuItems}/>
      <Home/>
      </div>  
    </div>
  )
}

export default Driver
