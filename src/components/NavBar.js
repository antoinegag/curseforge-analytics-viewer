import React from 'react';
import {
  Menu,
  Icon,
} from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu style={{ minHeight: "50px"}} inverted attached>
        <Menu.Item><Icon color="orange" name="pie graph" size="big" />CurseForge Analtytics Viewer</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item href='//github.com/antoinegag/curseforge-analytics-viewer/blob/master/README.md#privacy'>
            <Icon name="privacy" size="large"/> Privacy
          </Menu.Item>
          <Menu.Item href='//github.com/antoinegag/curseforge-analytics-viewer'>
            <Icon name="github" size="large"/> Source Code
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}