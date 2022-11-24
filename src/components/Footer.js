import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg'

export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt='Logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/paolo-compagnoni-3749631b2/' target='_blank' rel="noreferrer"><img src={navIcon1} alt='linkedIn'/></a>
                        </div>
                        <p>Copyright 2022, tutti i diritti riservati</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}