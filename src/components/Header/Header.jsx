import React from 'react';
import './Header.css';
import {MenuIcon, SearchIcon} from '@mui/icons-material';
//import SearchIcon from '@mui/icons-material/Search';

import { IconButton } from '@mui/material';
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
        <AppsIcon />
      </div>
    </div>
  );
}

export default Header;
