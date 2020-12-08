import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Disc from '../components/Disc'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import DiscCarousel from '../components/DiscCarousel'
import { listDisc } from '../actions/discActions'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const discList = useSelector( state => state.discList )
    const { loading, error, discs, pages, page } = discList

    useEffect(() => {
        dispatch(listDisc(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return <>
            { !keyword && <DiscCarousel /> }
            <h1>Latest Discs</h1>

            { loading 
                ? <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : <>
                        <Row>
                            {discs.map(disc => (
                                <Col key={disc._id} sm={12} md={6} lg={4} xl={3}>
                                    <Disc disc={disc} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
                    </>
                    
            }  
        </>
}

export default HomeScreen
