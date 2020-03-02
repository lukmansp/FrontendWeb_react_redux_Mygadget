import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Books from './Books';
import Navbar from '../layout/Navbar'

class Home extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }
    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        this.props.history.push('/');
    }

    render() {
        console.log('render');
        return (
            <div className>
                <Navbar onClick={this.onLogout.bind(this)} />
                <Books />
            </div>
        )
    }
}

export default Home;