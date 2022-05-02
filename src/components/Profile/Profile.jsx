import React from 'react'
import { Button } from 'react-bootstrap';
import { ReactComponent as Email } from '../../assets/sidenav/email.svg';
import { ReactComponent as CompanyName } from '../../assets/sidenav/companyname.svg';
import { ReactComponent as Twitter } from '../../assets/sidenav/twitter.svg';
import { ReactComponent as Website } from '../../assets/sidenav/website.svg';
import { ReactComponent as Location } from '../../assets/sidenav/location.svg';
import './Profile.css'

function Profile() {
  return (
    <>
        <div className="profile-container">
            <div className="profile-image">

            </div>
            <span class="profile-sticker" ></span>
            <div className="profile-user-info">
                <h4 className="profile-fullname">Amadikwa Joy N</h4>
                <p>amadikwajoyn</p>
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">Edit Profile</Button>
                </div>
                <div className="profile-sidenar-info profile-sidenar-info-follow">
                    <p>18 followers</p>
                    <p>. 41 following</p>
                </div>
                <div className="profile-sidenar-info">
                    <CompanyName color="#8b949e" />
                    <p>Coded Ladies Innovate Tech</p>
                </div>
                <div className="profile-sidenar-info">
                    <Location color="#8b949e" />
                    <p>Nigeria</p>
                </div>
                <div className="profile-sidenar-info profile-sidenar-info-link">
                    <Email color="#8b949e" />
                    <p>amadikwajoyn@gmailc.com</p>
                </div>
                <div className="profile-sidenar-info profile-sidenar-info-link">
                    <Website color="#8b949e" />
                    <p>http://clitech.xyz</p>
                </div>
                <div className="profile-sidenar-info profile-sidenar-info-link">
                    <Twitter color="#8b949e" />
                    <p>@AmadikwaJoy</p>
                </div>

            </div>
            
        </div>
    </>
  )
}

export default Profile