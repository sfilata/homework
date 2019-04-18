import React, { Component } from 'react';
import './App.css';

import {LocaleProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import BasicLayout from "./layouts/BasicLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={zh_CN}>
          <BasicLayout />
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
