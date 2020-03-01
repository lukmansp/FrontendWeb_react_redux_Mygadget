import React from 'react';

const detailBook = ({ product }) => {
    return (
        <div>
            <p>Detail Book</p>
            {product ?
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Book Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <td>Writer</td>
                            <td>{product.stock}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{product.image}</td>
                        </tr>
                    </tbody>
                </table>
                :
                null
            }
        </div>
    )
};

export default detailBook;