/**
 * 单元测试
 * 测试BasicLayout是否崩溃
 * 挂载目标组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import BasicLayout from './BasicLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicLayout />, div);
  ReactDOM.unmountComponentAtNode(div);
});
