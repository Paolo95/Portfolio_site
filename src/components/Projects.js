import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Projects = () =>{

    const projectsWip = [
        {
            title: "MrTecno.it",
            description: "Sito E-Commerce scritto utilizzando lo stack MERN",
            imgUrl: projImg1,
        },
        {
            title: "Social Media App per la condivisione di musica inedita",
            description: "App scritta in React Native per condividere canzoni inedite",
            imgUrl: projImg2,
        },
        {
            title: "Trace Tech - App Unity AR",
            description: "App in unity per il riconoscimento di bottiglie e visualizzazione di dati di tracciamento in tempo reale",
            imgUrl: projImg3,
        },
    ]

    const projectsDone = [
        {
            title: "Tafkaplayer.it",
            description: "Web player a singola riproduzione",
            imgUrl: projImg1,
        },
    ]

    return(
        
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Progetti</h2>
                        <p></p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justift-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Completati</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">In corso</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Nuove idee</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsDone.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsWip.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <p>Hai un'idea da realizzare? Contattami!</p>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='background-right'></img>
        </section>
    )
}