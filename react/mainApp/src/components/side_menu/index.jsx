import React from 'react';
import LogoImg from '../../assets/images/logo.png';
import './index.less';

// const img = new Image('../../assets/images/logo.png');

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return <div className="side-menu-container">
      <img src={LogoImg} width="150" height="30" />
      侧栏
    </div>;
  }
}

SideMenu.propTypes = {
  
};

export default SideMenu;