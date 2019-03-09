import React from 'react';
import api from '../api';

/**
 * 基础类
 * author: shubaiqiao@126.com
 * 便于实现api访问
 */
export default class BaseClass extends React.Component {
  constructor(props) {
    super(props);
    this.$api = api;
  }
}

export class BaseComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.$api = api;
  }
}
