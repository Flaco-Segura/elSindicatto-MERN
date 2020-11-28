import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    
    return  <FormContainer>
                <CheckoutSteps step1 step2 step3/>
                <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Col>
                            <Row>
                                <Col md={1}>
                                    <Form.Check 
                                        type='radio'
                                        id='PayPal'
                                        aria-label='paypal'
                                        name='paymentMethod'
                                        value='PayPal'
                                        checked
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    ></Form.Check>
                                </Col>
                                <Col md={1}>
                                    <i className="fab fa-paypal payment-method-icon-size"></i>
                                </Col>
                                <Col md={10}>
                                    <Form.Check.Label>PayPal or Credit Card</Form.Check.Label>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col md={1}>
                                    <Form.Check 
                                        type='radio'
                                        aria-label='stripe'
                                        id='Stripe'
                                        name='paymentMethod'
                                        value='Stripe'
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    ></Form.Check>
                                </Col>
                                <Col md={1}>
                                    <i className="fab fa-cc-stripe payment-method-icon-size"></i>
                                </Col>
                                <Col md={10}>
                                    <Form.Check.Label>Stripe</Form.Check.Label>
                                </Col>
                            </Row>  */}
                        </Col>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Continue</Button>
                </Form>
            </FormContainer>
}

export default PaymentScreen
