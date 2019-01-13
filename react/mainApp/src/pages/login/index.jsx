import React from 'react';
import {
  Button,
} from 'antd';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return <div>
      <a href="https:/www.baidu.com">baidu</a>
      <p>dsfsdlhl</p>
      <Button>登陆</Button>
      <Button type="danger">Danger</Button>
    </div>;
  }
}

Login.propTypes = {
  
};

export default Login;