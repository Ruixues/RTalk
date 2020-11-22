
import React, { useState } from 'react';
import './style.less';
import { ipcRenderer } from 'electron';
import Login from '@/components/account/Login';

import {
  Avatar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import {
  MinusOutlined,
  CloseOutlined,
  BorderOutlined,
  UserOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@ant-design/icons';

function min() {
  ipcRenderer.send('win-minimize');
}

function max() {
  ipcRenderer.send('win-maximize');
}

function close() {
  ipcRenderer.send('win-close');
}

function Header() {
  const [state, setState] = useState(false);

  const handleDialog = () => {
    setState(true);
  }

  return (
    <div className="app-header">
      <Dialog open={state}>
        <DialogTitle>登录</DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
      <div className="app-header-part">
        <div className="app-header-logo">logo</div>
        <div className="app-header-search">
          <input className="search-bar" />
          <SearchOutlined className="search-button" />
        </div>
      </div>
      <div className="app-header-part">
        <div className="app-header-function" onClick={handleDialog}>
          <Avatar alt="头像"><UserOutlined /></Avatar>&nbsp;&nbsp;
          Test&nbsp;&nbsp;
          <MenuOutlined />
        </div>
        <div className="app-header-switch">
          <button className="button-hover-grey" onClick={min}><MinusOutlined /></button>
          <button className="button-hover-grey" onClick={max}><BorderOutlined /></button>
          <button className="button-hover-red" onClick={close}><CloseOutlined /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
