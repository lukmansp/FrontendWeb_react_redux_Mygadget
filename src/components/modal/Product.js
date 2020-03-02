import React, { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getProducts, detailProducts, deleteProduct } from '../redux/actions/product';
import { Form } from 'react-bootstrap';
import ProductAdd from './ProductAdd';
import productEdit from './productEdit';

class Product extends Component {
    state = {
        show: false,
        selectBook: null,
        showEdit: false,
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
    handleShowEdit = () => {
        this.setState({
            showEdit: true
        })
    }

    handleCloseEdit = () => {
        this.setState({
            showEdit: false
        })
    }

    onSelectItemProductEdit = (product) => {
        this.setState({
            selectProduct: product,
            showEdit: true
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
    deleteProduct = (productId) => {
        this.props.dispatch(deleteProduct(productId))

        // console.log(productId)
    }
    componentDidMount() {
        this.getProducts();
        // this.detailProducts()
    }

    render() {
        console.log(this.props);
        const { products } = this.props;

        return (
            <Container> <div className="container"></div>
                <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Col sm={10}>
                        <h4 className="banner">PRODUCTS</h4>
                    </Col>
                    <Col sm={2}>
                        <Button variant="primary" size="sm" onClick={this.onShow} >Add PRODUCT</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Col sm={10}>
                        <Form>
                            <Form.Group>
                                {/* <Form.Label>Search</Form.Label>
                                <Form.Control type="search" placeholder="Enter name" onChange={this.detailProducts} /> */}
                                <div class="searchBox">
                                    <input class="searchInput" type="text" name="" onChange={this.detailProducts} placeholder="Search" />
                                    <button class="searchButton" href="#">
                                        <i class="fas fa-search">
                                        </i>
                                    </button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>category</th>
                            <th>Publisher</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) =>
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category_name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td> <productEdit show={this.state.showEdit} onHide={this.handleCloseEdit} book={this.state.selectProduct} />||<Button variant="danger" onClick={deleteProduct.bind(this, product.id)}>Delete</Button></td>

                            </tr>
                        )}
                    </tbody>
                </Table>
                <ProductAdd show={this.state.show} onHandleClose={this.onHandleClose} />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Product);