import React, { Component } from 'react'
import axios from 'axios'
// import { Card, Form, Button } from 'react-bootstrap'
class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }


    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        const data = {
            id_product: this.props.product.id,
            user: this.state.user,
            quantity: this.state.quantity,
            price: this.props.product.price,
            total: this.state.total,
            created_at: new Date(),
            updated_at: new Date()
        };

        axios({
            method: "POST",
            url: "http://localhost:9009/order/",
            data: data
        })
            .then(response => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {

    }

    render() {
        console.log(this.props.product)
        return (
            <React.Fragment>
                <div>

                    {this.props.product ?

                        <p>
                            <form onSubmit={this.onSubmit}>
                                <div class="card cartCard">
                                    <img src={this.props.product.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.id} hidden readOnly />
                                        Name : <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.name} readOnly /><br />
                                        User:<input onChange={this.onChange} type="text" className="form-control" name="user" placeholder="Enter name" />
                                        stock:<input onChange={this.onChange} type="text" className="form-control" name="quantity" placeholder="Enter Stock" />
                                        Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price} /><hr />
                                        <button className="btn btn-primary">Order</button>
                                    </div>
                                </div>
                                {/* <div className="card">
                                <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.id} hidden readOnly /><br />
                                Name : <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.name} readOnly /><br />

                                User:<input onChange={this.onChange} type="text" className="form-control" name="user" placeholder="Enter name" />
                                stock:<input onChange={this.onChange} type="text" className="form-control" name="quantity" placeholder="Enter name" />
                                Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price} />
                                <button className="btn btn-primary">Order</button>
                            </div> */}
                                {/* <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={this.props.product.image} />
                                <Card.Body>
                                    <Card.Title><input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.id} hidden readOnly /></Card.Title>
                                    <Card.Title>{this.props.product.name}</Card.Title>
                                    <Card.Text>Rp.{this.props.product.price} | Stock {this.props.product.stock}</Card.Text>
                                    <Card.Text><Form.Control size="sm" type="text" placeholder="Username" onChange={this.onChange} /></Card.Text>
                                    <Card.Text><Form.Control size="sm" type="text" placeholder="Quantity" onChange={this.onChange} /></Card.Text>
                                    <Button variant="info">Info</Button>
                                </Card.Body>
                            </Card> */}
                            </form>
                        </p>

                        :
                        <p className="btn btn-primary badge badge-pill">Cart</p>
                    }

                </div>
            </React.Fragment>
        )
    }
}
export default DetailProduct