import React from 'react';

import { Link } from 'react-router-dom';

function nav() {
    return (<div>

        <Link to="/">
            <button type="button"> Home </button>
        </Link>

        <Link to="/order-page">
            <button type="button"> Order Now </button>
        </Link>

        <Link to="/about-us">
            <button type="button">About Us</button>
        </Link>



    </div>);
}

export default nav;