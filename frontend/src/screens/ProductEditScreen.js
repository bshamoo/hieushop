import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [collectionName, setCollectionName] = useState('')
  const [color, setColor] = useState('')
  const [totalInStock, setTotalInStock] = useState(0)
  const [smallInStock, setSmallInStock] = useState(0)
  const [mediumInStock, setMediumInStock] = useState(0)
  const [largeInStock, setLargeInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setCollectionName(product.collectionName)
        setColor(product.color)
        setTotalInStock(product.totalInStock)
        setSmallInStock(product.sizeInStock.small)
        setMediumInStock(product.sizeInStock.medium)
        setLargeInStock(product.sizeInStock.large)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        description,
        image,
        collectionName,
        totalInStock,
        color,
        smallInStock,
        mediumInStock,
        largeInStock
      })
    )
  }

  return (
    <>
      <Link className='btn btn-light my-3 shadow-none' to='/admin/productlist'>
        <i className="fas fa-chevron-left"></i>
        &nbsp;&nbsp;
        <strong>back</strong>
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='collectionName'>
              <Form.Label>Collection</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter collection'
                value={collectionName}
                onChange={(e) => setCollectionName(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='color'>
              <Form.Label>Color</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='totalInStock'>
              <Form.Label>Total In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter total in stock'
                value={totalInStock}
                onChange={(e) => setTotalInStock(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='smallInStock'>
              <Form.Label>Small In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter small in stock'
                value={smallInStock}
                onChange={(e) => setSmallInStock(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='mediumInStock'>
              <Form.Label>Medium In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter medium in stock'
                value={mediumInStock}
                onChange={(e) => setMediumInStock(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='largeInStock'>
              <Form.Label>Large In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter large in stock'
                value={largeInStock}
                onChange={(e) => setLargeInStock(e.target.value)}
                className="px-3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="px-3"
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen