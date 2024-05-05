import React from 'react'
// import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Technews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample09">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">India</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li className="nav-item"><Link className="dropdown-item" to="/General">General</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Business">Business</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Health">Health</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Science">Science</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">US</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li className="nav-item"><Link className="dropdown-item" to="/General1">General</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Business1">Business</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Entertainment1">Entertainment</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Health1">Health</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Science1">Science</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Sports1">Sports</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Technology1">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Japan</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li className="nav-item"><Link className="dropdown-item" to="/General2">General</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Business2">Business</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Entertainment2">Entertainment</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Health2">Health</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Science2">Science</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Sports2">Sports</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Technology2">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">UK</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li className="nav-item"><Link className="dropdown-item" to="/General3">General</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Business3">Business</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Entertainment3">Entertainment</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Health3">Health</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Science3">Science</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Sports3">Sports</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Technology3">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">China</a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li className="nav-item"><Link className="dropdown-item" to="/General4">General</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Business4">Business</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Entertainment4">Entertainment</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Health4">Health</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Science4">Science</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Sports4">Sports</Link></li>
                                        <li className="nav-item"><Link className="dropdown-item" to="/Technology4">Technology</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

}

export default Navbar
