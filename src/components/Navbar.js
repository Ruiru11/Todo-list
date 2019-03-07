/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Menu } from "semantic-ui-react";

class Navbar extends React.Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state;
      return (
        <Menu style={{backgroundColor:"black"}}>
          <Menu.Item position='right' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
           <a href="#">Home</a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='flags' active={activeItem === 'flags'} onClick={this.handleItemClick}>
             
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      );
    }
  };
  
  export default Navbar;