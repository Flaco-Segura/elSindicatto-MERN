import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listDiscDetails } from '../actions/discActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const DiscScreen = ({ history, match }) => {
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch()

    const discDetails = useSelector(state => state.discDetails)
    const { loading, error, disc } = discDetails

    useEffect(() => {
        console.log(match.params.id)
        dispatch(listDiscDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return <>
        <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        { loading 
            ? <Loader /> 
            : error 
                ? <Message variant='danger'>{ error }</Message> 
                : <Row>
                    <Col md={6}>
                        <Image src={disc.image} alt={disc.name} fluid/>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{disc.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={disc.rating} text={`${disc.numReviews} reviews`}></Rating>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: {disc.price}€
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Format: {disc.format}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            <strong>{disc.price}€</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            { disc.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                
                                { disc.countInStock > 0 && 
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control 
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)
                                                }>
                                                    {[...Array(disc.countInStock).keys()]
                                                        .map(x => <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                }

                                <ListGroup.Item>
                                    <Button
                                        onClick={ addToCartHandler }
                                        className='btn-block'
                                        type='button'
                                        disabled={disc.countInStock <= 0}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                  </Row> 
        }
    </>
}

export default DiscScreen
