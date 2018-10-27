import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal"
      theme = "dark"
      >
        <Menu.Item key="home">
            <a href="https://interactionparadigm.org" target="_blank" rel="noopener noreferrer"><Icon type="home" />Home</a>
        </Menu.Item>
        <Menu.Item key="research">
            <a href="https://interactionparadigm.org" target="_blank" rel="noopener noreferrer"><Icon type="bar-chart" />Research</a>
        </Menu.Item>
        <Menu.Item key="teach">
            <a href="https://interactionparadigm.org" target="_blank" rel="noopener noreferrer"><Icon type="solution" />Teaching</a>
        </Menu.Item>
        <Menu.Item key="joinus">
            <a href="https://interactionparadigm.org" target="_blank" rel="noopener noreferrer"><Icon type="team" />Join us</a>
        </Menu.Item>
        <Menu.Item key="direction">
            <a href="https://interactionparadigm.org" target="_blank" rel="noopener noreferrer"><Icon type="arrow-right" />Direction to lab</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
