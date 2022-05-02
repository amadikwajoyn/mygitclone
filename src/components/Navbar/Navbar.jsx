import React from 'react'
import { Container, NavDropdown, Navbar as Navbox, Form } from 'react-bootstrap'
import { ReactComponent as Gitlogo } from '../../assets/navbar/gitlogo.svg';
import { ReactComponent as Plus } from '../../assets/navbar/plus.svg';
import { ReactComponent as Bell } from '../../assets/navbar/bell.svg';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <Navbox expand="lg" className="navbar-bg-color">
            <Container>
                <div className="navbar-p-text">
                    <Gitlogo color="#ffffff" />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Search or jump to…" className="navbar-serach-input" />
                        </Form.Group>
                    </Form>
                    <div className="navbar-texts-p">
                        <p>Pull request</p>
                        <p>Issues</p>
                        <p>Marketplace</p>
                        <p>Explore</p>
                    </div>
                </div>
                <div className="navbar-p-icon">
                    <Bell color="#ffffff"/>
                    <NavDropdown title={<Plus color="#ffffff"/>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="M" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
        </Navbox>
    </>
  )
}

export default Navbar
