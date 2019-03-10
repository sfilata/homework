/**
 * 单元测试
 * 测试MainContent是否崩溃
 * 挂载目标组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
