import React, { Component } from 'react';
import Books from './product';
import Navbar from '../layout/Navbar';
import Pagination from './Pagination';
import { logout } from '../redux/actions/authpersist';
import { connect } from 'react-redux';
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
    };
  }
  componentDidMount() {
    if (this.props.authpersist.isAuthenticated === false) {
      this.props.history.push('/login');
    }
  }

  onLogout() {
    this.props.dispatch(logout());
    this.props.history.push('/login');
  }

  render() {
    console.log('render');
    return (
      <div className>
        <Navbar
          onClick={this.onLogout.bind(this)}
          category={this.state.category}
          product={this.state.product}
          page={this.state.page}
        />
        <Books />
        <Pagination
          category={this.state.category}
          product={this.state.product}
          page={this.state.page}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('auth', state.authpersist);
  return {
    authpersist: state.authpersist,
  };
};

export default connect(mapStateToProps)(Home);
