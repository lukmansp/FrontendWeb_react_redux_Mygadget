import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './product';
import { detailProducts } from '../redux/actions/product';
import { connect } from 'react-redux';

class Cashier extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }
    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('otoritas_id');
        this.props.history.push('/login');
    }
    detailProducts = (event) => {
        this.props.dispatch(detailProducts(event.target.value))
    }


    render() {
        return (
            <div className>
                <nav className="navbar navbar-expand-lg" >
                    <div className="container">
                        <Link className="navbar-brand bg-white">My^gadget</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#" onClick={this.onLogout.bind(this)}><i className="fas fa-sign-out-alt"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <input class="form-control mr-sm-2" type="search" name="" onChange={this.detailProducts} placeholder="Search" />
                                </li>
                                <li className="nav-item">
                                    <div class="dropdown">
                                        <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Filter
                                    </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div >
                </nav >
                <Books />
            </div>
        )
    }
}

export default connect()(Cashier);