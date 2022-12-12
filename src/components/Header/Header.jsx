import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Avatar } from '@mui/material';
import logo from './images/logo.svg';

function Header() {
  return (
    <div className='header'>
      <div className='header-info'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo}
          width='48'
          height='66'
          alt='logo' />
        
      </div>
      <div className='header-search'>
        <SearchIcon />
        <input type='text' placeholder='Search' />
      </div>
      <div className='header-right'>
        <IconButton>
            <AppsIcon />
        </IconButton >
        <IconButton>
            <Avatar src="https://unsplash.com/photos/rDEOVtE7vOs" />
        </IconButton >
      </div>
    </div>
  );
}

export default Header;
