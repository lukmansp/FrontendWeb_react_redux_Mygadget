import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { cartItem } from '../redux/actions/cart'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { getProducts } from '../redux/actions/product';



// const CardProduct = ({ product }) => {
//     return (
//         <div className="col-md-3 mt-1 ml-1 card ">
//                 <img src={product.image} alt="..." />
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.price}</p>
//             <a href="/detail">goto</a>
//             </div>

//     )
// }


// const CardProduct = ({ product, dispatch, selectProductItem }) => {

//     console.log(cartItem)
//     const selectProduct = (data) => {
//         // e.preventDefault()
//         // selectProductItem(product)
//         dispatch(cartItem(data))


//     }
class CardProduct extends Component {

    selectProduct = (product) => {
        product.quantity = 1
        this.props.dispatch(cartItem(product))
    }

    render() {
        const { product } = this.props

        return (
            < React.Fragment >
                <div className="col-md-4 mt-2">

                    <Card style={{ width: '18rem' }} className="mt-1" box="shadow">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Price Rp. {product.price}|| Stock {product.stock}
                            </Card.Text>
                            <Button className="cart" variant="primary" onClick={() => (this.selectProduct(product))}>cart</Button>
                        </Card.Body>
                    </Card>
                </div>


            </React.Fragment >
        )
    }
}
export default withRouter(connect()(CardProduct))