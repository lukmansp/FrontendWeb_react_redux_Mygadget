import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push('/');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://54.242.170.33/user/login", this.state)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user-id', res.data.id);
                localStorage.setItem('otoritas_id', res.data.otoritas_id);
                localStorage.setItem('isAuth', true);
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "150px", backgroundColor: "aqua" }} >
                <div className="card">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 my-4">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;