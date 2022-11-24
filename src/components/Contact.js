import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Invia');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Invio...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Invia");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Messaggio inviato correttamente'});
        }else{
            setStatus({ success: false, message: 'Qualcosa è andato storto.... Per favore, riprovare'});
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contattami"/>
                    </Col>
                    <Col md={6}>
                        <h2>Teniamoci in contatto!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' 
                                           value={formDetails.firstName} 
                                           placeholder='Nome' 
                                           onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                
                                <Col sm={6} className='px-1'>
                                    <input type='text' 
                                           value={formDetails.lastName} 
                                           placeholder='Cognome' 
                                           onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input type='email' 
                                           value={formDetails.email} 
                                           placeholder='Email' 
                                           onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>

                                <Col sm={6} className='px-1'>
                                    <input type='tel' 
                                           value={formDetails.phone} 
                                           placeholder='telefono/cellulare' 
                                           onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <textarea row='6' 
                                              value={formDetails.message} 
                                              placeholder='Messaggio' 
                                              onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}