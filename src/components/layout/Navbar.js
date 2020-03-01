import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="#">BookStore</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/"><span className="fa fa-fw fa-home"></span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product"><i className="fas fa-user-cog"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><i className="fas fa-history"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
            // <nav id="nav-3">
            //     <Link class="link-3" to="/">Toko Lukmans</Link>
            //     <Link class="link-3" to="/about">About</Link>
            //     <Link class="link-3" to="/product">Product</Link>
            //     <Link class="link-3" to="/">History</Link>
            // </nav>
        )
    }
}

export default Navbar;