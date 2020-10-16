import React from 'react';
import Logo from '../../assets/icons/github-light.png';
const AppIcon = () => {
    return (
        <div className="app-icon-container">
            <a href="https://github.com/sitture/commit-status/">
                <img src={Logo} alt=""></img>
            </a>
        </div>
    );
};

export default AppIcon;
