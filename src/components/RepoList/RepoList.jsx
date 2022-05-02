import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { ReactComponent as Stars } from '../../assets/header/stars.svg';

import './RepoList.css';

function RepoList() {
  return (
    <>
        <div className="repo-list-container">
            <div className="repo-list-texts">
                <div className="repo-list-texts-list">
                    <p className="repo-list-texts-name">mygitclone</p>
                    <p className="repo-list-texts-btn repo-list-texts-btn-public">Public</p>
                </div>
                <div>
                    <NavDropdown title={ <Stars /> } { ...'Star' } id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
            <div className="repo-list-texts">
                <div className="repo-list-texts-list">
                    <p>
                    <span class="repo-language-color" ></span>
                    Javascript
                    </p>
                    <p>Updated 4 hours ago</p>
                </div>
                <div className="repo-list-texts-list">
                    <p>line...............</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default RepoList