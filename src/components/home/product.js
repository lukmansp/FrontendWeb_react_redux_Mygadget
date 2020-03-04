import React, { Component } from 'react';
import CardProduct from './CardProduct';
import DetailProduct from './DetailProduct'
// import BookItem from './BookItem';   
// import axios from 'axios'
import { connect } from 'react-redux';
import { getProducts, detailProducts, paginateProducts } from '../redux/actions/product';
import { addQty, reduceQty } from '../redux/actions/cart'

// import { Card, Button } from 'react-bootstrap';



class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectProduct: null
        }
    }
    actSelectProduct = (products) => {
        this.setState({
            selectProduct: products
        })
    }

    state = {
        show: false
    }
    onShow = (event) => {
        this.setState({
            show: true
        })
    }
    onHandleClose = () => {
        this.setState({
            show: false
        })
    }
    getProducts() {
        this.props.dispatch(getProducts());
    }
    detailProducts = (event) => {
        //console.log(event.target.value)
        this.props.dispatch(detailProducts(event.target.value))
        //console.log(this.props);
    }
    componentDidMount() {
        this.getProducts();
        // this.detailProducts()
    }
    addQuantity = (id) => {

        this.props.dispatch(addQty(id))
    }

    reduceQuantity = (id) => {

        this.props.dispatch(reduceQty(id))
    }
    paginateProducts = (event) => {
        //console.log(event.target.value)
        this.props.dispatch(paginateProducts(event.target.id))
        //console.log(this.props);
    }


    render() {
        console.log(this.props)
        const { cart } = this.props
        // const itemCart = cart.map((cart) => {
        //     return (
        //         <DetailProduct cart={cart} key={cart.id} />
        //     )
        // })
        const { pagination, products } = this.props

        const dataProduct = products.map((item, index) => {
            return (

                < CardProduct product={item} key={index} selectProductItem={this.actSelectProduct} />

            )
        })
        return (

            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {dataProduct}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardCart">
                            {cart.map((cart) => (
                                <div class="cartCard">
                                    <img src={cart.image} className="imageCart" alt="..." /> <button size="sm" variant="outline-info" onClick>Remove</button>
                                    <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={cart.id} hidden readOnly />
                                    <p>{cart.name}</p>
                                    <button size="sm" variant="outline-info" onClick={() => (this.reduceQuantity(cart.id))}>-</button>
                                    |{cart.quantity}|{cart.price}
                                    <button size="sm" variant="outline-info" onClick={() => (this.addQuantity(cart.id))}>+</button>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <nav aria-label="Page navigation example">

                        <ul className="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {pagination.map((pagination) => (
                                <li class="page-item" key={pagination}><a class="page-link" onClick={this.paginateProducts} id={pagination}>{pagination}</a></li>
                            ))}
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        products: state.products.products,
        cart: state.cart.cart,
        pagination: state.products.paginate
    }
}
export default connect(mapStateToProps)(Books);