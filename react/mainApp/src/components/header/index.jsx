import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return <div className="header-container">
      头部
    </div>;
  }
}

Header.propTypes = {

};

export default Header;