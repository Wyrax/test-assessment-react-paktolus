import logo from './logo.svg';
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

function Header(props) { // Avatar must be replaced by module login/avatar
  const { balance } = props;
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" textAlign="left" p={1} bgcolor="background.paper">
        <Box display="flex" p={1} flexGrow={1} style={{ alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ height: '50px'}}></img>
        </Box>
        <Box display="flex" p={1} style={{ alignItems: 'center' }}>
          ${balance.toFixed(2)}
        </Box>
        <Box display="flex" p={1} style={{ alignItems: 'center' }}>
          <Avatar style={{ backgroundColor: 'red' }}>U</Avatar>
        </Box>
      </Box>
    </div>
  );

}

export default Header;