import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';

class NavHeaderComponent extends Component {
  
  componentWillMount() {
    //
  }
  
  render() {
    return (
      <div>
        <Navbar className="NavBar">
            <Navbar.Header>
                <Navbar.Brand>
                    Starry星空
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem onClick={this.login}>产品平台</NavItem>
                <NavItem onClick={this.logout}>成功案例</NavItem>
                <NavItem onClick={this.logout}>关于我们</NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavHeaderComponent;

