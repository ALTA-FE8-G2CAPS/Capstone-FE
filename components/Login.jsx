import Image from "next/image"
import React, { useState } from "react"
import { Col, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap"
import { MDBBtn } from 'mdb-react-ui-kit';
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs"
// Import Components
import styles from "../styles/Login.module.css"

export const Login = () => {

    const [test, setTest] = useState(false)
    const [password, setPassword] = useState(true)
    const handleTest = () => {
        setTest(prev => !prev)
    }

    const handleButton = (e) => {
        e.preventDefault()
    }

    const togglePassword = (e) => {
        e.preventDefault()
        setPassword(prev => !prev)
    }

    return (
        <>
            <Row className={styles.container}>
                <Row className={styles.imageBox}>
                    <Image
                        src="/heroLogin.png"
                        width={751}
                        height={1032}
                    />
                </Row>
                <Col xl={5}>
                    <Row>
                        <p className={styles.title}>Booking Now Enjoy Playing Later</p>
                    </Row>
                </Col>

                <Col className={styles.containerForm} xl={7}>
                    <Row className={styles.logoBox}>
                        <Image
                            src="/segoro.png"
                            width={230}
                            height={150}
                            className={styles.logo}
                        />
                    </Row>
                    {!test ? <Row className={styles.formBox}>
                        <h1 className={styles.loginTitle}>Login</h1>
                        <Form>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-4"
                            >
                                <Form.Control className={styles.formControl} type="email" placeholder="placeholder" />
                            </FloatingLabel>
                            <InputGroup>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                >
                                    <Form.Control
                                        className={styles.formControl}
                                        placeholder="placeholder"
                                        type={password ? "password" : "text"}
                                    />
                                </FloatingLabel>
                                <button className={styles.iconButton} onClick={(e) => togglePassword(e)}>
                                    {password ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                </button>
                            </InputGroup>
                            <MDBBtn onClick={(e) => handleButton(e)} rippleColor='#A1D8D2' className={styles.loginButton}>
                                Login
                            </MDBBtn>
                            <p className={styles.validateText}>Don't have account ?
                                <span className={styles.span} onClick={handleTest}>Register Now</span>
                            </p>
                        </Form>
                    </Row> :
                        <Row className={styles.formBox}>
                            <h1 className={styles.loginTitle}>Create Account</h1>
                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username"
                                    className="mb-4"
                                >
                                    <Form.Control className={styles.formControl} type="email" placeholder="placeholder" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-4"
                                >
                                    <Form.Control className={styles.formControl} type="email" placeholder="placeholder" />
                                </FloatingLabel>
                                <InputGroup>
                                    <FloatingLabel
                                        controlId="floatingPassword"
                                        label="Password"
                                    >
                                        <Form.Control
                                            className={styles.formControl}
                                            placeholder="placeholder"
                                            type={password ? "password" : "text"}
                                        />
                                    </FloatingLabel>
                                    <button className={styles.iconButton} onClick={(e) => togglePassword(e)}>
                                        {password ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                    </button>
                                </InputGroup>
                                <MDBBtn onClick={(e) => handleButton(e)} className={styles.loginButton}>
                                    Register
                                </MDBBtn>
                                <p className={styles.validateText}>Already have account ?
                                    <span className={styles.span} onClick={handleTest}>Login Now</span>
                                </p>
                            </Form>
                        </Row>
                    }

                </Col>
            </Row>
        </>
    )
}