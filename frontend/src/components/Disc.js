import React from 'react';
import { Card } from 'react-bootstrap';
import LinesEllipsis from 'react-lines-ellipsis';

const Disc = ({disc}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/disc/${disc._id}`}>
                <Card.Img src={disc.image} variant='top'/>
            </a>

            <Card.Body>
                <a href={`/disc/${disc._id}`}>
                    <Card.Title as='div'>
                        <LinesEllipsis
                            text={disc.name}
                            maxLine='2'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            component='strong'
                        />
                    </Card.Title>
                </a>
                <Card.Text as='div'>
                    <div className='my-3'>
                        {disc.rating} from {disc.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as='h3'>{disc.price}€</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Disc
