import React from 'react';
import { Row, Col, Input } from 'antd';
import './index.css';

const iconMap = {
  'windows': require("../../assets/icons/windows.png"),
  'cent_os': require("../../assets/icons/cent_os.png"),
  'debin': require("../../assets/icons/debin.png"),
  'suse': require("../../assets/icons/suse.png"),
  'ubuntu': require("../../assets/icons/ubuntu.png")
};

class MainContent extends React.PureComponent {
  state = {
    search_id: ''
  };

  handleSearch = e => {
    console.log(e.target.value);
    this.setState({search_id: e.target.value});
  }
  
  render() {
    const { search_id } = this.state;

    const agentList = (
      <div className="agent-item bg-white">
        <img src={iconMap['windows']} alt=""/>
        <div className="title-container">
          <i className="icon icon-desktop"></i>
          <div className="agent-title">bjstdmngbgr01.thoughtworks.com</div>
          <div className="tag">idle</div>
          <div className="basic-data"><i className="icon icon-info"></i>192.168.1.102</div>
          <div className="basic-data"><i className="icon icon-folder"></i>/var/lib/cruise-agent</div>
        </div>
        <div className="btn-group">
          <div className="btn-add"><i className="icon icon-plus"></i></div>
          <>
            <div className="tag-item">Firefox<i className="icon icon-trash"></i></div>
            <div className="tag-item">Safari<i className="icon icon-trash"></i></div>
            <div className="tag-item">Ubuntu<i className="icon icon-trash"></i></div>
            <div className="tag-item">Chrome<i className="icon icon-trash"></i></div>
          </>
          <div className="btn-deny">
            <i className="icon icon-deny"></i>
            Deny
          </div>
        </div>
      </div>
    ); 
    return (
      <>
        <Row gutter={24}>
          <Col span={8}>
            <div className="status-container building-container">
              <div className="title">Building</div>
              <i className="icon back-icon icon-cog"></i>
              <div className="data">3</div>
            </div>
          </Col>
          <Col span={8}>
            <div className="status-container idle-container">
              <div className="title">Idle</div>
              <i className="icon back-icon icon-coffee"></i>
              <div className="data">5</div>
            </div>
          </Col>
          <Col span={8}>
          <div className="status-container bg-white number-container">
            <Row>
              <Col span={8}>
                <div className="title">ALL</div>
                <div className="data">8</div>
              </Col>
              <Col span={8}>
                <div className="title">PHYSICAL</div>
                <div className="data">4</div>
              </Col>
              <Col span={8}>
                <div className="title">VIRTUAL</div>
                <div className="data">4</div>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
        <div className="toolbar bg-white">
          <div className="filter">All</div>
          <div className="filter">Physical</div>
          <div className="filter">Virtual</div>
          <Input 
            prefix={<i className="icon icon-search"></i>}
            value={search_id}
            onChange={this.handleSearch}
            className="searchbar"
          ></Input>
          <i className="btnFilter icon icon-th-list"></i>
          <i className="btnFilter icon icon-th-card"></i>
        </div>
        <>
          {agentList}
        </>
      </>
    );
  }
}

export default MainContent;
