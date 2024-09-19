import React from 'react'
import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
     <div className="left">
      <Link to="/" style={{ textDecoration: "none"}}>
        <span>RY Social</span>
      </Link>
      <HomeOutlinedIcon/>
      {darkMode ?  <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>}
      
      <GridViewOutlinedIcon/>
      <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder='Search...' />
      </div>
     </div>
     <div className="right">
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <span>Cole Palmer</span>
        </div>
     </div>
    </div>
  )
}

export default NavBar
