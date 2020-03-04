import React, { Component } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getProducts } from '../redux/actions/product';
import ProductItem from './ProductItem';
import ProductAdd from './ProductAdd'
import ProductEdit from './ProductEdit'
import ProductDelete from './ProductDelete'
// import Navbar from '../layout/Navbar'

class Product extends Component {
    state = {
        show: false,
        showEdit: false,
        showDelete: false,
        selectProduct: null,
        selectProductDelete: null,
    }
    componentDidMount() {
        console.log('componnen didmount')
        this.getProducts()
    }

    getProducts = () => {
        this.props.dispatch(getProducts())
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
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

    handleShowDelete = () => {
        this.setState({
            showDelete: true
        })
    }

    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }

    onSelectItemProductEdit = (product) => {
        this.setState({
            selectProduct: product,
            showEdit: true
        })
    }

    onSelectProductDelete = (product) => {
        this.setState({
            selectProductDelete: product,
            showDelete: true
        })
    }

    render() {
        console.log('render product')
        const { products } = this.props;

        const itemProduct = products.products.map((product, index) => <ProductItem product={product} key={index} onSelectItemProductEdit={this.onSelectItemProductEdit} onSelectProductDelete={this.onSelectProductDelete} />);

        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <Container style={{ marginTop: "20px" }}>
                    <Row style={{ marginBottom: "20px" }}>
                        <Col sm={10}>
                            <h4>Books</h4>
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" size="sm" onClick={this.handleShow} >Add Book</Button>
                        </Col>
                    </Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemProduct}
                        </tbody>
                    </Table>
                    <ProductAdd show={this.state.show} onHide={this.handleClose} />
                    <ProductEdit show={this.state.showEdit} onHide={this.handleCloseEdit} product={this.state.selectProduct} />
                    <ProductDelete show={this.state.showDelete} onHide={this.handleCloseDelete} product={this.state.selectProductDelete} />
                </Container>
            </React.Fragment>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);