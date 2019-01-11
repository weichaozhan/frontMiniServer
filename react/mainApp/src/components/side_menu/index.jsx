import React from 'react';
import PropTypes from 'prop-types';
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
      <img src={LogoImg}/>
      侧栏
    </div>;
  }
}

SideMenu.propTypes = {
  
};

export default SideMenu;