import React, { Component } from 'react';
// import BookItem from './BookItem';
import DetailBook from './DetailBook';
import axios from 'axios'
import { connect } from 'react-redux';
import { getProducts, detailProducts } from '../redux/actions/product';
import { Card, Button } from 'react-bootstrap'
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
        const { products } = this.props;
        const selectProduct = (e) => {
            e.preventDefault()
            this.actSelectProduct(products)

        }
        return (
            <div className="row">
                {products.map((product, index, ) =>

                    <div key={index} selectProduct={this.actSelectProduct}>
                        <Card style={{ width: '18rem' }} className="mt-1">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.price}||{product.stock}
                                </Card.Text>
                                <Button className="cart" variant="primary" onClick={selectProduct}>cart</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )}
                <div className="col sm-4">
                    <DetailBook product={this.state.selectProduct} />
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