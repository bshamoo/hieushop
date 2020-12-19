import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-0 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' rounded/>
            </Link>
            <Card.Body className='py-1 px-1' >
                <Link to={`/product/${product._id}`}>
                    <Card.Title className='mb-0' as='h6'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='h6' className="font-weight-normal">
                    vegas collection winter 2020
                </Card.Text>
                <Card.Text as='h7'>
                    {product.totalInStock > 0 ? `$${product.price}` : 'Sold Out'}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
