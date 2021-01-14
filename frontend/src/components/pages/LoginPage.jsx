import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../Message";
import Loader from "../Loader";
import FormContainer from "../FormContainer";
import {login} from "../redux-components/actions/userActions";

const LoginPage = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const redirect = location.search ? location.search.split('=')[1] : '/'
    const redirect = '/'

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, loading, error} = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    return (
        <>
            {error && <Message variant='danger'>{error}</Message>}
            {loading ? <Loader/> :
                (
                    <FormContainer>
                        <h1>Sign In</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Sign In
                            </Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                New Customer? <Link
                                to={redirect ? `/register?redirect=${redirect}` : `/register`}>Register</Link>
                            </Col>
                        </Row>
                    </FormContainer>
                )}
        </>
    )
}

export default LoginPage