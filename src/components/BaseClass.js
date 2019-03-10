/**
 * 基础类
 * author: shubaiqiao
 * 便于实现api访问
 * date: 2019.3.9
 */
import React from 'react';
import api from '../api';

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
