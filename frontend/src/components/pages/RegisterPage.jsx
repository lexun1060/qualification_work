import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Form, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import FormContainer from "../FormContainer"
import Message from "../Message"
import Loader from "../Loader"
import {register} from "../redux-components/actions/userActions"

const RegisterScreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {userInfo, loading, error} = userRegister

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password is not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    return (
        <>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading ? <Loader/> :
                (
                    <FormContainer>
                        <h1>Sign Up</h1>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Form.Group>

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

                            <Form.Group controlId='confirmPassword'>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter confirmPassword'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Register
                            </Button>
                        </Form>
                        <Row className='py-3'>
                            <Col>
                                Login is account? <Link
                                to={redirect ? `/login?redirect=${redirect}` : `/login`}>Login</Link>
                            </Col>
                        </Row>
                    </FormContainer>
                )}
        </>
    )
}

export default RegisterScreen