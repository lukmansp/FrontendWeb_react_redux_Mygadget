import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { detailProducts, categoryProducts } from '../redux/actions/product';


class Navbar extends Component {


    detailProducts = (event) => {
        //console.log(event.target.value)
        this.props.dispatch(detailProducts(event.target.value))
        //console.log(this.props);
    }

    categoryProducts = (event) => {
        //console.log(event.target.value)
        this.props.dispatch(categoryProducts(event.target.id))
        //console.log(this.props);
    }

    render() {
        console.log(this.props)
        return (
            <nav className="navbar navbar-expand-lg" >
                <div className="container">
                    <Link className="navbar-brand bg-white">My^gadget</Link>
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/user" onClick={this.props.onClick}>user</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={this.props.onClick}><i className="fas fa-sign-out-alt"></i></Link>
                            </li>
                            <li className="nav-item">
                                <input class="form-control mr-sm-2" type="search" name="" onChange={this.detailProducts} placeholder="Search" />
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Filter
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" >
                                        <a className="dropdown-item" onClick={this.categoryProducts} id="">All </a>
                                        <a className="dropdown-item" onClick={this.categoryProducts} id="sm">Smartphone </a>
                                        <a className="dropdown-item" onClick={this.categoryProducts} id="pc">PC </a>
                                        <a className="dropdown-item" onClick={this.categoryProducts} id="cam">Camera </a>
                                    </div>
                                </div>

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

export default connect()(Navbar);