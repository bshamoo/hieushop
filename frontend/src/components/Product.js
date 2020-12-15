import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-1 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='h5'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='h6'>
                    debut collection winter 2020
                </Card.Text>
                <Card.Text as='h7'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
