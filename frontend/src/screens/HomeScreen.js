import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Disc from '../components/Disc';
import discs from '../discs';

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Discs</h1>
            <Row>
                {discs.map(disc => (
                    <Col key={disc._id} sm={12} md={6} lg={4} xl={3}>
                        <Disc disc={disc} />
                    </Col>
                ))}
            </Row>  
        </>
    )
}

export default HomeScreen
