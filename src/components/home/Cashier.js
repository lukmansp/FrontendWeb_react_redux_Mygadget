import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Books from './product';
// import Navbar from '../layout/Navbar'
// import User from '../user/User'

class Cashier extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }
    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('otoritas_id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/');
    }
    render() {
        // console.log('render');
        return (
            <div className>
                {/* <Navbar onClick={this.onLogout.bind(this)} /> */}
                <Books />
            </div>
        )
    }
}

export default Cashier;