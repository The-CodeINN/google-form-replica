import React from 'react';
import './Header.css';
import { MenuIcon, SearchIcon } from '@mui/icons-material/';

import { IconButton } from '@mui/material';
import logo from './images/logo.svg';

function Header() {
  return (
    <div className='eader'>
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
      </div>
      <div className='header-right'></div>
    </div>
  );
}

export default Header;
