import React from 'react'
import Profile from '../Profile/Profile'
import Badges from '../../assets/badge--acv-64.png'
import { ReactComponent as Stars } from '../../assets/header/stars.svg';
import './SideNav.css'

function SideNav() {
  return (
    <div>
        <Profile />
        <div className="sidenav-user-info">
            <div className="sidenav-sidenar-info sidenar-info-follow">
                <p>Achievents</p>
                <img src={Badges} alt="Logo" width="30%" />
            </div>

            <div className="sidenav-sidenar-info sidenar-info-follow">
                <p>Highlights</p>
                <div className="sidenav-highlight">
                    <Stars /> 
                    <p className="sidenav-highlight-text">PRO</p>
                </div>
            </div>

            <div className="sidenav-sidenar-info sidenar-info-follow">
                <p>Organizations</p>
                <img src="https://avatars.githubusercontent.com/u/877479?s=64&amp;v=4" alt="@pyladies" size="32" height="32" width="32" data-view-component="true" class="avatar"></img>
                <img src="https://avatars.githubusercontent.com/u/34645601?s=64&amp;v=4" alt="@JoslaTechnology" size="32" height="32" width="32" data-view-component="true" class="avatar"></img>
                <img src="https://avatars.githubusercontent.com/u/56834797?s=64&amp;v=4" alt="@decadevs" size="32" height="32" width="32" data-view-component="true" class="avatar"></img>
                {/* <Badges /> */}
            </div>
        </div>
    </div>
  )
}

export default SideNav