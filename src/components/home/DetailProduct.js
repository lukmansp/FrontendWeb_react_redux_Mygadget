import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// import { Card, Form, Button } from 'react-bootstrap'
// import { addQty, reduceQty } from '../redux/actions/cart'
import { withRouter } from 'react-router-dom'
import { addQty, reduceQty } from '../redux/actions/cart'
class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }


    // onChange = (e) => {
    //     // console.log(f.target.value);
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // onSubmit = (e) => {
    //     console.log(this.props)
    //     e.preventDefault();
    //     const data = {
    //         id_product: this.props.product.id,
    //         user: this.state.user,
    //         quantity: this.state.quantity,
    //         price: this.props.product.price,
    //         total: this.state.total,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //     };

    //     axios({
    //         method: "POST",
    //         url: "http://localhost:9009/order/",
    //         data: data
    //     })
    //         .then(response => {
    //             this.props.history.push('/');
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    addQuantity = (id) => {

        this.props.dispatch(addQty(id))
    }

    reduceQuantity = (id) => {

        this.props.dispatch(reduceQty(id))
    }
    componentDidMount() {

    }
    // onAddQty = (cart) => {
    //     cart.quantity = cart.quantity + 1;
    //     const total = this.state.total + cart.price

    //     this.setState(nextState => ({
    //         carts: nextState.carts,
    //         total: total
    //     }))
    // }

    render() {
        const { cart } = this.props
        console.log(cart)
        return (
            <React.Fragment>
                <div>
                    <div>
                        {/* <form onSubmit={this.onSubmit}> */}
                        {/* <form> */}
                        <div class="cartCard">
                            <img src={cart.image} className="imageCart" alt="..." /> <button size="sm" variant="outline-info" onClick>Remove</button>
                            <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={cart.id} hidden readOnly />
                            <p>{cart.name}</p>
                            <button size="sm" variant="outline-info" onClick={() => (this.reduceQuantity(cart.id))}>-</button>
                            |{cart.quantity}|
                                <button size="sm" variant="outline-info" onClick={() => (this.addQuantity(cart.id))}>+</button>
                        </div>

                        {/* </form> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(connect()(DetailProduct));