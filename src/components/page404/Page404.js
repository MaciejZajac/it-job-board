import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className='body'>
            No such Page found!
            <Link to='/'>Home Page</Link>
        </div>
    );
}
