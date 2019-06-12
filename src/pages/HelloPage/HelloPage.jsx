import React from 'react';
import './HelloPage.scss';
import {Link} from "react-router-dom";

const HelloPage = () => {
    return (
        <div className="HelloPage">
            <h1>Hi there</h1>
            <Link to={'/001'}>To the first article</Link>
        </div>
    )
};

export default HelloPage;
