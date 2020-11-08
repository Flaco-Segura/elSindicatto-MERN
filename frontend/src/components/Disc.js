import React from 'react';
import { Card } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';
import Rating from './Rating';

const Disc = ({disc}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/disc/${disc._id}`}>
                <Card.Img src={disc.image} variant='top'/>
            </a>

            <Card.Body>
                <a href={`/disc/${disc._id}`}>
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
                </a>
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
