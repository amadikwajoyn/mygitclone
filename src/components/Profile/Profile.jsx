import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as Email } from "../../assets/sidenav/email.svg";
import { ReactComponent as CompanyName } from "../../assets/sidenav/companyname.svg";
import { ReactComponent as Twitter } from "../../assets/sidenav/twitter.svg";
import { ReactComponent as Website } from "../../assets/sidenav/website.svg";
import { ReactComponent as Location } from "../../assets/sidenav/location.svg";
import "./Profile.css";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="profile-container">
        <div className="profile-image">
          <span class="profile-sticker"></span>
        </div>
        <div className="profile-user-info">
          <h4 className="profile-fullname">{user.name}</h4>
          <p>{user.login}</p>
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg">
              Edit Profile
            </Button>
          </div>
          <div className="profile-sidenar-info profile-sidenar-info-follow">
            <p>{user.followers} followers</p>
            <p> . {user.following} following </p>
          </div>
          <div className="profile-sidenar-info">
            <CompanyName color="#8b949e" />
            <p>{user.company}</p>
          </div>
          <div className="profile-sidenar-info">
            <Location color="#8b949e" />
            <p>{user.location}</p>
          </div>
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Email color="#8b949e" />
            <p>{user.email}</p>
          </div>
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Website color="#8b949e" />
            <p>{user.blog}</p>
          </div>
          <div className="profile-sidenar-info profile-sidenar-info-link">
            <Twitter color="#8b949e" />
            <p>@{user.twitter_username}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
