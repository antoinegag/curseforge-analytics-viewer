import React from 'react';
import {
  Menu,
  Icon,
} from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu style={{ minHeight: "50px"}} inverted attached>
        <Menu.Item><Icon name="pie graph" />CurseForge Analtytics Viewer</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item href='//github.com/antoinegag/curseforge-analytics-viewer'>
            <Icon name="github" size="big"/> Source Code
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}