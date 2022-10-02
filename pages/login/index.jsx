import Image from "next/image"
import React, { useState, useEffect } from "react"
import { Col, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap"
import { MDBBtn } from 'mdb-react-ui-kit';
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs"
import ReactLoading from "react-loading";
import { useRouter } from "next/router";
// Import Components
import styles from "../../styles/Login.module.css"
import { useNavbarContext } from "../../context/contextNavbar";

const Login = () => {
    const router = useRouter()
    const { setStatusNav } = useNavbarContext()
    const [test, setTest] = useState(false)
    const [password, setPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setStatusNav("")
    })

    const togglePassword = (e) => {
        e.preventDefault()
        setPassword(prev => !prev)
    }

    const handleButton = (e, status) => {
        e.preventDefault()
        if (status) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                swal("Login Successfully", "Welcome to segoro", "success")
                    .then(() => router.push("/"))
            }, 2000)
        }
        else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                swal("Register successfully", "Thanks for your register", "success")
                    // .then(() => setTest(prev => !prev))
            }, 2000)
        }
    }


    return (
        <>
            <Row className={styles.container}>
                <Row className={styles.imageBox}>
                    <Image
                        priority="true"
                        src="/heroLogin.png"
                        width={751}
                        height={1032}
                    />
                </Row>
                <Col lg={6} xl={5}>
                    <Row>
                        <p className={styles.title}>Booking Now Enjoy Playing Later</p>
                    </Row>
                </Col>

                <Col className={styles.containerForm} lg={6} xl={7}>
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
                            <MDBBtn onClick={(e) => handleButton(e, true)} rippleColor='#A1D8D2' 
                            className={loading ? styles.loading : styles.loginButton}>
                            {loading ? <ReactLoading type="spin" width={40} height={40}/> : "Login"}
                            </MDBBtn>
                            <p className={styles.validateText}>Don't have account ?
                                <span className={styles.span} onClick={() => setTest(prev => !prev)}>Register Now</span>
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
                                <MDBBtn onClick={(e) => handleButton(e, false)}
                                    className={loading ? styles.loading : styles.loginButton}>
                                    {loading ? <ReactLoading type="spin" width={40} height={40}/> : "Register"}
                                </MDBBtn>
                                <p className={styles.validateText}>Already have account ?
                                    <span className={styles.span} onClick={() => setTest(prev => !prev)}>Login Now</span>
                                </p>
                            </Form>
                        </Row>
                    }

                </Col>
            </Row>
        </>
    )
}

export default Login