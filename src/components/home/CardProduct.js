import React from 'react'
import { Card, Button } from 'react-bootstrap'


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


const CardProduct = ({ product, selectProductItem }) => {
    const selectProduct = (e) => {
        e.preventDefault()
        selectProductItem(product)

    }


    return (
        <React.Fragment>
            <div className="col-md-4 mt-2">
                {/* <div className="card">
                    <div className="card-body">
                        <img src={product.image} alt="..." className="card-img-top" />
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: {product.price} | | Stock : {product.stock}</p><hr></hr>
                        <div className="buttonCard">
                            <a className="btn btn-primary badge badge-pill badge-info" onClick={selectProduct}><span className="fas fa-cart-plus" style={{ width: "40px" }}></span></a>
                            <a className="btn btn-primary badge badge-pill badge-warning"><span className="fas fa-pencil-square-o" style={{ width: "40px" }} data-toggle="modal" data-target="#staticBackdropEdit" onClick={selectProduct}></span></a>
                            <a className="btn btn-primary badge badge-pill badge-danger" data-toggle="modal" data-target="#staticBackdrop"><span className="fas fa-trash" style={{ width: "40px" }}></span></a>
                        </div>

                    </div>
                </div> */}
                <Card style={{ width: '18rem' }} className="mt-1">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Price Rp. {product.price}|| Stock {product.stock}
                        </Card.Text>
                        <Button className="cart" variant="primary" onClick={selectProduct}>cart</Button>
                    </Card.Body>
                </Card>
            </div>


        </React.Fragment>
    )
}
export default CardProduct