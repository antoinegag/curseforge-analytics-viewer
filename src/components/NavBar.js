import React from 'react';
import {
  Image,
  Menu,
  Icon,
} from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu style={{ minHeight: "50px"}} inverted attached>
        <Menu.Item><Icon name="pie graph" />CurseForge Analtytics Viewer</Menu.Item>
      </Menu>
    );
  }
}