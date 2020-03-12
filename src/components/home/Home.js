import React, { Component } from 'react';
import Books from './product';
import Navbar from '../layout/Navbar'
import Pagination from './Pagination'

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            carts: [],
            selectProduct: null,
            category: '',
            product: '',
            page: '',
        }
    }
    componentDidMount() {
        // console.log(localStorage.getItem('otoritas_id'))
        if (!localStorage.getItem('isAuth')) {
            this.props.history.push('/login');
        }
        if (parseInt(localStorage.getItem('otoritas_id')) !== 1) {
            // console.log(localStorage.getItem('otoritas_id'))
            this.props.history.push('/cashier')
        }
    }

    onLogout() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('otoritas_id');
        this.props.history.push('/login');
    }


    render() {
        console.log('render');
        return (
            <div className>
                <Navbar onClick={this.onLogout.bind(this)} category={this.state.category} product={this.state.product} page={this.state.page} />
                <Books />
                <Pagination category={this.state.category} product={this.state.product} page={this.state.page} />

            </div>
        )
    }
}

export default Home;