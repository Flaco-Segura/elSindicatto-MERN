import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Disc from '../components/Disc';
import axios from 'axios';

const HomeScreen = () => {
    const [discs, setDiscs] = useState([]);

    useEffect(() => {
        const fetchDiscs = async () => {
            const { data } = await axios.get('/api/discs')

            setDiscs(data)
        }

        fetchDiscs()
    }, [])

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
