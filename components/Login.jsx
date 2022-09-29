import Image from "next/image"
import React, { useState } from "react"
import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import { MDBBtn } from 'mdb-react-ui-kit';
// Import Components
import styles from "../styles/Login.module.css"

export const Login = () => {

    const [test, setTest] = useState(false)
    const handleTest = () => {
        setTest(prev => !prev)
    }

    const handleButton = e => {
        e.preventDefault()
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
                        <Image
                            src="/segoro.png"
                            width={105}
                            height={64} />
                    </Row>
                    <Row>
                        <p className={styles.title}>Booking Now Enjoy Playing Later</p>
                    </Row>
                </Col>

                <Col className={styles.containerForm} xl={7}>
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
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                            >
                                <Form.Control className={styles.formControl} type="password" placeholder="placeholder" />
                            </FloatingLabel>
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
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                >
                                    <Form.Control className={styles.formControl} type="password" placeholder="placeholder" />
                                </FloatingLabel>
                                <MDBBtn onClick={(e) => handleButton(e)}  className={styles.loginButton}>
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