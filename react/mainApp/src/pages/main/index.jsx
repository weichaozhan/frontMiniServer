import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/index.jsx';
import SideMenu from '../../components/side_menu/index.jsx';
import MainRoute from '../../router/mainRoute';
import './index.less';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return <div>
      <SideMenu />
      <div className="main-right-container">
        <Header />
        <div className="main-routes">
          <MainRoute />
        </div>
      </div>
    </div>;
  }
}

Main.propTypes = {

};

export default Main;