import React, { Fragment } from 'react';
const ProductItem = ({ order }) => {


    return (
        <Fragment>
            <tr>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.stock}</td>
                <td>{order.user}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.total}</td>
                <td>{order.updated_at}</td>

            </tr>
        </Fragment>
    )
}

export default ProductItem;