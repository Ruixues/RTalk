import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.less';

import {
  TextField,
  Button,
  Switch,
} from '@material-ui/core';

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const submit = async () => {
    console.log(state);
  }

  return (
    <div className="account-login">
      <form className="account-login-form" noValidate autoComplete="off">
        <h1>登录</h1>
        <TextField 
          id="username" 
          label="用户名" 
          variant="outlined" 
          fullWidth 
          className="account-login-form-input"
          onChange={(e) => setState({username: e.currentTarget.value, password: state.password, remember: state.remember})}
        />

        <TextField 
          id="password" 
          label="密码" 
          variant="outlined" 
          fullWidth 
          className="account-login-form-input"
          type="password" 
          onChange={(e) => setState({username: state.username, password: e.currentTarget.value, remember: state.remember})}
        />

        <Switch 
          checked={true}
          onChange={() => setState({username: state.username, password: state.password, remember: !state.remember})}
          name="remember"
        />记住我<br/>

        <Button variant="contained" color="secondary" className="account-login-form-submit" onClick={submit}>提交</Button>
        <p style={{marginTop: '10px'}}>
          <Link to="/register">注册账号</Link>&nbsp;
          <Link to="/forget">忘记密码</Link>
        </p>
      </form>
    </div>
  );
}

export default withRouter(Login);
