import React, { Component } from 'react';
import Books from './product';
import Navbar from '../layout/Navbar'
import Pagination from './Pagination'
import { logout } from '../redux/actions/user'
import { connect } from 'react-redux'
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
        // if (!localStorage.getItem('isAuth')) {
        //     this.props.history.push('/login');
        // }
        // if (parseInt(localStorage.getItem('otoritas_id')) !== 1) {
        //     this.props.history.push('/cashier')
        // }
    }

    onLogout() {
        this.props.dispatch(logout())
        this.props.history.push('/login');
    }


    render() {
        console.log('render');
        return (
            <div className>
                {/* <p>{this.props.user.persistLogin.name}</p> */}
                <Navbar onClick={this.onLogout.bind(this)} category={this.state.category} product={this.state.product} page={this.state.page} />
                <Books />
                <Pagination category={this.state.category} product={this.state.product} page={this.state.page} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('auth', state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Home);