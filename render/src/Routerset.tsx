
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from './routes';
import Header from './elements/Header';
import SideBar from './elements/SideBar';
import './global.less'

export default function Routerset() {
  return (
    <>
      <Router>
        <Header />
        <SideBar />
        {
          routes.map((value, index) => {
            return <Route path={value.path} exact={value.exact || true} component={value.component} key={index} />
          })
        }
      </Router>
    </>
  );
}
