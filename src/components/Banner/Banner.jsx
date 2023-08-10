import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle, ArrowDownCircle} from "react-bootstrap-icons"
import headerImg from "../../assets/img/logo_transparent.png"
import 'animate.css'
import './banner.css'
import TrackVisibility from "react-on-screen"

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["software engineer", "app developer", "web developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
// eslint-disable-next-line 
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);   
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible })=>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <div className="banner-animation">
                                <h1>{'Ciao! Sono Paolo, '}<span className="wrap">{text} </span></h1>
                            </div>
                            
                            <p>Realizzo siti web con React e app per Android e iOS con React Native, AR app in Unity e molto altro!.<br/><br/>
                                Scorri in basso per vedere il mio portfolio!
                            </p>
                            <a href="#contact">
                                <button>Contattami ora! <ArrowRightCircle size={25}/></button>
                            </a>
                           
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Heading"/>
                    </Col>
                </Row>
                <Row className="align-items-center">
                <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__bounce animate__infinite animate__slow" : ""}>
                                    <Row className="align-items-center">
                                        <ArrowDownCircle size={30} className="arrow_down"/>
                                    </Row>
                                </div>
                            }
                        </TrackVisibility>  
                </Row>
            </Container>
        </section>
    )
}

export default Banner