/**
 * 弹出窗口（规定实现组件）
 * author: shubaiqiao
 * date: 2019.3.9
 */
import React from 'react';
import { Input, Button } from 'antd';
import BaseClass from '../../components/BaseClass';
import './index.css';

class PopDialog extends BaseClass {
  state = {
    resources: ''
  };

  onChange = e => {
    this.setState({resources: e.target.value});
  }

  handleConfirm = () => {
    this.setState({resources: ''});
    this.props.handleAdd(this.state.resources, this.props.agentId);
  }

  handleCancel = () => {
    this.setState({resources: ''});
    this.props.handleCancel();
  }

  render() {
    let { visible, index } = this.props;
    let topPostion = 405 + index * 140;
    let styleObj = {
      top: topPostion + 'px',
      display: visible ? 'block' : 'none'
    };
    return (
      <>
        <div className="layer" style={{display: visible ? 'block' : 'none'}} onClick={this.handleCancel}></div>
        <div className="pop-container bg-white" style={styleObj}>
          <div className="arrow"></div>
          <div className="shelter"></div>
          <i className="icon icon-close" onClick={this.handleCancel}></i>
          <div className="tip">
            Separate multiple resource name with commas
          </div>
          <Input 
            className="input-resources" 
            placeholder="e.g. Chrome,Firefox"
            value={this.state.resources}
            onChange={this.onChange}
            ></Input>
          <Button type="primary" className="btn btn-add" onClick={this.handleConfirm}>Add Resources</Button>
          <Button type="minor" className="btn btn-cancel" onClick={this.handleCancel}>Cancel</Button>
        </div>
      </>
    );
  }
}

export default PopDialog;
