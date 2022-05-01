import React from 'react'
import { Container, Navbar as Navbox } from 'react-bootstrap'
import { ReactComponent as Overview } from '../../assets/header/book-overview.svg';
import { ReactComponent as Packages } from '../../assets/header/packages.svg';
import { ReactComponent as Projects } from '../../assets/header/projects.svg';
import { ReactComponent as Repository } from '../../assets/header/repository.svg';
import { ReactComponent as Stars } from '../../assets/header/stars.svg';
import './Header.css';

function Header() {
  return (
    <>
        <Navbox expand="lg" className="header-bg-color">
            <Container className="header-container">
                <div className="header-p-text">
                    <div className="navbar-texts-p">
                        <div className="header-text-icon">
                            <Overview color="#ffffff"/>
                            <p>Overview</p>
                        </div>
                        <div className="header-text-icon">
                            <Repository color="#ffffff"/>
                            <p>Repositories</p>
                        </div>
                        <div className="header-text-icon">
                            <Projects color="#ffffff"/>
                            <p>Projects</p>
                        </div>
                        <div className="header-text-icon">
                            <Packages color="#ffffff"/>
                            <p>Packages</p>
                        </div>
                        <div className="header-text-icon">
                            <Stars color="#ffffff"/>
                            <p>Stars</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbox>
    </>
  )
}

export default Header