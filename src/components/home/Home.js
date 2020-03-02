import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Books from './Books';

class Home extends Component {
    componentDidMount() {
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
    }


    render() {
        console.log('render');
        return (
            <div className>
                <Books />
            </div>
        )
    }
}

export default Home;