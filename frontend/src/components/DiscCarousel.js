import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopDiscs } from '../actions/discActions'

const DiscCarousel = () => {
    const dispatch = useDispatch()

    const discTopRated = useSelector(state => state.discTopRated)
    const { discs, loading, error } = discTopRated

    useEffect(() => {
        dispatch(listTopDiscs())
    }, [dispatch])

    return loading
        ? <Loader/>
        : error
            ? <Message variant='danger'>{error}</Message>
            : <Carousel pause='hover' className='bg-dark'>
                { discs.map(disc => <Carousel.Item key={disc._id}>
                    <Link to={`/disc/${disc._id}`}>
                        <Image src={disc.image} alt={disc.name} fluid />
                        <Carousel.Caption className='carousel-caption'>
                            <h2>{ disc.name } ({Number(disc.price).toFixed(2)}€)</h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>) }
            </Carousel>
}

export default DiscCarousel
