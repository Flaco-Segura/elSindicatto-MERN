import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';
import Rating from './Rating';

const Disc = ({disc}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/disc/${disc._id}`}>
                <Card.Img src={disc.image} variant='top'/>
            </Link>

            <Card.Body>
                <Link to={`/disc/${disc._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            <LinesEllipsis
                                text={disc.name}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating 
                        value={disc.rating}
                        text={`${disc.numReviews} revs`}/>
                </Card.Text>
                <Card.Text as='h3'>{disc.price}€</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Disc
