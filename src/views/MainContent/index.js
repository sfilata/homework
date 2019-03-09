import React from 'react';
import { Row, Col, Input, Popconfirm } from 'antd';
import BaseClass from "../../components/BaseClass";
import PopDialog from "../../components/PopDialog";
import './index.css';

const iconMap = {
  'windows': require("../../assets/icons/windows.png"),
  'centos': require("../../assets/icons/cent_os.png"),
  'debian': require("../../assets/icons/debin.png"),
  'suse': require("../../assets/icons/suse.png"),
  'ubuntu': require("../../assets/icons/ubuntu.png")
};

class MainContent extends BaseClass {
  state = {
    search_id: '',
    agentList: [],
    dataArr: {},
    originAgentList: [],
    activeFlag: 0,
    agentIndex: 0,
    visible: false,
    agentId: -1
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    this.$api.agent.fetchAgentList().then(res => {
      let buildingArr = [];
      let idleArr = [];
      let physicalArr = [];
      let virtualArr = [];
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].status === 'idle') {
          idleArr.push(res.data[i]);
        } else {
          buildingArr.push(res.data[i]);
        }
        if (res.data[i].type === 'physical') {
          physicalArr.push(res.data[i]);
        } else {
          virtualArr.push(res.data[i]);
        }
      }
      this.setState({
        agentList: res.data,
        originAgentList: res.data,
        dataArr: {
          building: buildingArr.length,
          idle: idleArr.length,
          physical: physicalArr.length,
          virtual: virtualArr.length,
          total: res.data.length
        }
      });
    });
  }

  handleSearch = e => {
    this.setState({search_id: e.target.value});
  }

  handleDelete = (id, resourceIndex, agentIndex) => {
    // 删除第agentIndex个agent中的第resourceIndex个资源，agent的id为id
    console.log(id, resourceIndex, agentIndex);
    let agentObj = this.state.agentList[agentIndex];
    agentObj.resources.splice(resourceIndex, 1);
    let agentList = this.state.agentList;
    this.setState({agentList: agentList});
  }

  handleFilter = e => {
    let keyword = e.target.dataset.type.toLowerCase();
    if (keyword === 'all') {
      this.setState({
        agentList: this.state.originAgentList,
        activeFlag: 0
      });
    } else {
      this.setState({
        agentList: this.state.originAgentList.filter(item => {
          return item.type === keyword;
        }),
        activeFlag: keyword === 'physical' ? 1 : 2
      });
    }
  }

  handleAddResrouce = (index, id) => {
    this.setState({
      visible: true,
      agentIndex: index,
      agentId: id
    });
  }

  handleAddConfirm = (value, id) => {
    let index = this.state.agentIndex;
    let agentObj = this.state.agentList[index];
    value.split(',').map(item => {
      agentObj.resources.push(item);
    });
    console.log(agentObj);
    this.handleAddCancel();
  }

  handleAddCancel = () => {
    this.setState({visible: false, agentIndex: 0});
  }
  
  render() {
    const { search_id, agentList, dataArr, activeFlag, agentIndex, visible, agentId } = this.state;

    const agentListDom = agentList.map((item, index) => {
      let id = item.id;
      let agentIndex = index;
      let tagList = item.resources.map((item, index) => {
        return (<div className="tag-item" key={index}>
          {item}
          <Popconfirm 
            title="Are you sure delete the resource?"
            okText="Yes"
            cancelText="No"
            onConfirm={this.handleDelete.bind(this, id, index, agentIndex)}>
            <i className="icon icon-trash"></i>
          </Popconfirm>
        </div>);
      });
      return (
        <div className="agent-item bg-white" key={index}>
          <img src={iconMap[item.os]} alt="operate-system"/>
          <div className="title-container">
            <i className="icon icon-desktop"></i>
            <div className="agent-title">{item.name}</div>
            <div style={{width: '120px'}}>
              <div className={item.status === 'building' ? 'tag working' : 'tag'}>{item.status}</div>
            </div>
            <div className="basic-data"><i className="icon icon-info"></i>{item.ip}</div>
            <div className="basic-data"><i className="icon icon-folder"></i>{item.location}</div>
          </div>
          <div className="btn-group">
            <div className="btn-add" onClick={this.handleAddResrouce.bind(this, index, id)}><i className="icon icon-plus"></i></div>
            {tagList}
            <div className="btn-deny">
              <i className="icon icon-deny"></i>
              Deny
            </div>
          </div>
        </div>
      )
    })

    return (
      <>
        <Row gutter={24}>
          <Col span={8}>
            <div className="status-container building-container">
              <div className="title">Building</div>
              <i className="icon back-icon icon-cog"></i>
              <div className="data">{dataArr.building}</div>
            </div>
          </Col>
          <Col span={8}>
            <div className="status-container idle-container">
              <div className="title">Idle</div>
              <i className="icon back-icon icon-coffee"></i>
              <div className="data">{dataArr.idle}</div>
            </div>
          </Col>
          <Col span={8}>
          <div className="status-container bg-white number-container">
            <Row>
              <Col span={8}>
                <div className="title">ALL</div>
                <div className="data">{dataArr.total}</div>
              </Col>
              <Col span={8}>
                <div className="title">PHYSICAL</div>
                <div className="data">{dataArr.physical}</div>
              </Col>
              <Col span={8}>
                <div className="title">VIRTUAL</div>
                <div className="data">{dataArr.virtual}</div>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
        <PopDialog index={agentIndex} agentId={agentId} visible={visible} handleAdd={this.handleAddConfirm} handleCancel={this.handleAddCancel}></PopDialog>
        <div className="toolbar bg-white">
          <div className="filter-container" onClick={this.handleFilter}>
            <div className={activeFlag === 0 ? "filter active" : "filter"} data-type="All">All</div>
            <div className={activeFlag === 1 ? "filter active" : "filter"} data-type="Physical">Physical</div>
            <div className={activeFlag === 2 ? "filter active" : "filter"} data-type="Virtual">Virtual</div>
          </div>
          <Input 
            prefix={<i className="icon icon-search"></i>}
            value={search_id}
            onChange={this.handleSearch}
            className="searchbar"
          ></Input>
          <i className="btnFilter icon icon-th-list"></i>
          <i className="btnFilter icon icon-th-card"></i>
        </div>
        {agentListDom}
        <div style={{height: '20px'}}></div>
      </>
    );
  }
}

export default MainContent;
