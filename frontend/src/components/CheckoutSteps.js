import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <Nav className='justify-content-center mb-4'>
            { navItems({step1, step2, step3, step4}) }
        </Nav>
    )
}

const navItems = steps => {
    const item = {
        step1: ['/login', 'Sign In'],
        step2: ['/shipping', 'Shipping'],
        step3: ['/payment', 'Payment'],
        step4: ['/placeorder', 'Place Order']
    }

    const navItems = []

    for (const step in steps) {
        navItems.push(
            <Nav.Item key={step}>
                { steps[step]
                    ? <LinkContainer to={item[step][0]}>
                        <Nav.Link>{ item[step][1] }</Nav.Link>
                      </LinkContainer>
                    : <Nav.Link disabled>{ item[step][1] }</Nav.Link>
                }
            </Nav.Item>
        )
    }

    return navItems
}

export default CheckoutSteps
