import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listDiscDetails, updateDisc } from '../actions/discActions'
import { DISC_UPDATE_RESET } from '../constants/discConstants'

const DiscEditScreen = ({ match, history }) => {
    const discId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0.00)
    const [image, setImage] = useState('/images/elsindicatto.png')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [format, setFormat] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const discDetails = useSelector(state => state.discDetails)
    const { loading, error, disc } = discDetails

    const discUpdate = useSelector(state => state.discUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = discUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: DISC_UPDATE_RESET })
            history.push('/admin/disclist')
        } else {
            if(disc === undefined || disc._id !== discId) {
                dispatch(listDiscDetails(discId))
            } else {
                setName(disc.name)
                setPrice(disc.price)
                setImage(disc.image)
                setBrand(disc.brand)
                setCategory(disc.category)
                setCountInStock(disc.countInStock)
                setFormat(disc.format)
            }
        }        
    }, [dispatch, discId, disc, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateDisc({
            _id: discId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            format
        }))
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch(error) {
            console.error(error)
            setUploading(false)
        }
    }

    return <>
        <Link to='/admin/disclist' className='btn btn-light my-3'>
            Go Back
        </Link>
        <FormContainer>
            <h1>Edit Disc</h1>
            { loadingUpdate && <Loader /> }
            { errorUpdate && <Message variant='danger'>{ errorUpdate }</Message> }
            { loading
                ? <Loader/>
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter image url'
                                value={image}
                                onChange={e => setImage(e.target.value)}
                            ></Form.Control>
                            <Form.File
                                id='image-file'
                                label='Choose File'
                                custom onChange={ uploadFileHandler }>
                                { uploading && <Loader /> }
                            </Form.File>
                        </Form.Group>
                        <Form.Group controlId='brand'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter brand'
                                value={brand}
                                onChange={e => setBrand(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter category'
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='countInStock'>
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control 
                                type='number'
                                placeholder='Enter count in stock'
                                value={countInStock}
                                onChange={e => setCountInStock(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='format'>
                            <Form.Label>Format</Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter format'
                                value={format}
                                onChange={e => setFormat(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Update
                        </Button>
                    </Form>
            }
        </FormContainer>
    </>
}

export default DiscEditScreen
