import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listDisc, deleteDisc, createDisc } from '../actions/discActions'
import { DISC_CREATE_RESET } from '../constants/discConstants'

const DiscListScreen = ({ history, match }) => {
    // const discId = match.params.id

    const dispatch = useDispatch()

    const discList = useSelector(state => state.discList)
    const { loading, error, discs } = discList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const discDelete = useSelector(state => state.discDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = discDelete

    const discCreate = useSelector(state => state.discCreate)
    const { 
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        disc: createdDisc
    } = discCreate

    useEffect(() => {
        dispatch({ type: DISC_CREATE_RESET })
        if(!userInfo.isAdmin) {
            history.push('/login')
        } 

        if(successCreate) {
            history.push(`/admin/disc/${createdDisc._id}/edit`)
        } else {
            dispatch(listDisc())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdDisc])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')) {
           dispatch(deleteDisc(id))
        }
    }

    const createDiscHandler = () => {
        dispatch(createDisc())
    }

    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Discs</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createDiscHandler}>
                        <i className='fas fa-plus'></i> Create Disc
                    </Button>
                </Col>
            </Row>
            { loadingDelete && <Loader /> }
            { errorDelete && <Message variant='danger'>{ errorDelete }</Message> }
            { loadingCreate && <Loader /> }
            { errorCreate && <Message variant='danger'>{ errorCreate }</Message> }
            {
                loading
                    ? <Loader />
                    : error
                        ? <Message variant='danger'>{error}</Message>
                        : <Table  striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                { discs.map(disc => <tr key={disc._id}>
                                    <td>{ disc._id }</td>
                                    <td>{ disc.name }</td>
                                    <td>{ Number(disc.price).toFixed(2) }€</td>
                                    <td>{ disc.category }</td>
                                    <td>{ disc.brand }</td>
                                    <td>
                                        <LinkContainer to={`/admin/disc/${disc._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant='danger' 
                                            className='btn-sm'
                                            onClick={() => deleteHandler(disc._id)}>
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </td>
                                </tr>)}
                            </tbody>
                        </Table>
            }
        </>
    )
}

export default DiscListScreen
