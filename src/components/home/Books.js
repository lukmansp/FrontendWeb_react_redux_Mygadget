import React, { Component } from 'react';
import CardProduct from './CardProduct';
import DetailProduct from './DetailProduct'
// import BookItem from './BookItem';   
import axios from 'axios'
import { connect } from 'react-redux';
import { getProducts, detailProducts } from '../redux/actions/product';
import { Card, Button } from 'react-bootstrap';



class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: [],
            selectProduct: null
        }
    }
    actSelectProduct = (products) => {
        this.setState({
            selectProduct: products
        })
    }
    onChangeKat = (event) => {
        const authorization = localStorage.getItem('token');
        const userId = localStorage.getItem("user-id");
        event.preventDefault()
        console.log(event.target.id)
        axios
            .get(`http://localhost:9009/product?name=${event.target.id}`, {
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                }
            })
            .then(response => {
                this.setState({ products: response.data.result })
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangePage = (event) => {
        const authorization = localStorage.getItem('token');
        const userId = localStorage.getItem("user-id");
        event.preventDefault()
        console.log(event.target.id)
        axios
            .get(`http://localhost:9009/product/?pages=${event.target.name}`, {
                headers: {
                    "authorization": authorization,
                    "user-id": userId
                }
            })
            .then(response => {
                this.setState({ products: response.data.result })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
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

    render() {
        const dataProduct = this.props.products.map((item, index) => {
            return (

                < CardProduct product={item} key={index} selectProductItem={this.actSelectProduct} />

            )
        })
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {dataProduct}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card shadow" className="cardCart">
                        <div className="card-body">
                            <DetailProduct product={this.state.selectProduct} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps)(Books);