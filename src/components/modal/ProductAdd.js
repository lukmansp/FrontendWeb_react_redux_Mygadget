import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
// import axios from 'axios'
import { postProduct } from '../redux/actions/product'
class ProductAdd extends Component {
    state = {
        name: "",
        description: "",
        image: "",
        category_id: "",
        price: "",
        stock: ""
    }
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeImage = event => {
        // console.log(event.target.files[0])
        this.setState({
            image: event.target.files[0]
        })

    }
    onSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("category_id", this.state.category_id);
        data.append("price", this.state.price);
        data.append("stock", this.state.stock);
        // axios.post("http://localhost:9009/product", data);
        this.props.dispatch(postProduct(data))
        // console.log(this.data)
        this.props.onHandleClose()
        // this.props.history.push("/product")
    }
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChangeValue} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="description" onChange={this.onChangeValue} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="Enter name" onChange={this.onChangeImage} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="category_id" onChange={this.onChangeValue} />
                            </Form.Group> <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="price" onChange={this.onChangeValue} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" name="stock" onChange={this.onChangeValue} />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="primary" type="submit">
                                    Save Changes
                        </Button>

                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div >
        )
    }
}

export default connect()(ProductAdd)