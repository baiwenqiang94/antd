import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Hmq from "./components/nmg/hhht/hmq";
import Shq from "./components/nmg/hhht/shq";
import Jc from "./components/nmg/hhht/jc";
import './App.css';
import { Menu, Icon, Layout } from 'antd';

const SubMenu = Menu.SubMenu;
const {
  Header, Footer, Sider, Content,
} = Layout;
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
    }
  }
  render() {
    return (
      <Router>
        <div style={{width:"100%",height:"100%"}}>
          <Layout>
            <Header className="header">东文软件开发股份有限公司</Header>
            <Layout className="context">
              <Sider>

                <div style={{ width: 200 }}>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item key="1">
                      <Icon type="pie-chart" />
                      <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="desktop" />
                      <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="inbox" />
                      <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="global" /><span>内蒙古</span></span>}>
                      <SubMenu key="sub2" title="呼和浩特">
                        <Menu.Item key="12"><NavLink to="/hmq" id="abc"><Icon type="global" />回民区</NavLink></Menu.Item>
                        <Menu.Item key="23"><NavLink to="/shq"><Icon type="global" />赛罕区</NavLink></Menu.Item>
                        <Menu.Item key="87"><NavLink to="/jc"><Icon type="global" />金川开发区</NavLink></Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub3" title="乌兰察布">
                        <Menu.Item key="101">丰镇</Menu.Item>
                        <Menu.Item key="102">集宁</Menu.Item>
                        <Menu.Item key="103"><Icon type="twitter" />卓资山熏鸡</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <SubMenu key="sub5" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                  </Menu>
                </div>
              </Sider>
              <Content style={{height:'80%'}}>
                <Route path="/hmq" exact component={Hmq} />
                <Route path="/shq" exact component={Shq} />
                <Route path="/jc" exact component={Jc} />
              </Content>
            </Layout>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
