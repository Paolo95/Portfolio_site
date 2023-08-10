import img1 from "../../assets/img/mrtecno-portfolio-fs.jpg"
import img2 from "../../assets/img/tafka-portfolio.png"
import img3 from "../../assets/img/trc-portfolio.png"
import img4 from "../../assets/img/mrtecno-portfolio-wc.jpg"
import img5 from "../../assets/img/easyscience.png"

const data = [

    {
        title: "www.mrtecno.it",
        github: '',
        site: 'https://www.mrtecno.it',
        cover: img4,
        desc: "Un sito di e-commerce per la compravendita di prodotti tecnologici realizzato con WooCommerce",
        hasSite: true,
        hasGithub: false,
    },
    {
        title: "www.tafkaplayer.it",
        github: 'https://github.com/Paolo95/Custom-web-audio-player',
        site: 'http://www.tafkaplayer.it',
        cover: img2,
        desc: "Un weplayer che permette una sola riproduzione della canzone",
        hasSite: true,
        hasGithub: true,
    },
    {
        title: "WineTech App",
        github: 'https://github.com/Paolo95/WineTech_APP',
        site: 'https://github.com/Paolo95/WineTech_APP',
        cover: img3,
        desc: "App in Augmented Reality per il riconoscimento e tracciamento delle bottiglie di vino",
        hasSite: false,
        hasGithub: true,
    },
    {
        title: "www.mrtecno.it",
        github: 'https://github.com/Paolo95/sito_mrtecno_front-end',
        site: 'https://www.mrtecno.it',
        cover: img1,
        desc: "Un sito di e-commerce Full Stack per la compravendita di prodotti tecnologici",
        hasSite: false,
        hasGithub: true,
    },
    {
        title: "www.easyscience.altervista.org",
        github: '',
        site: 'https://www.easyscience.altervista.org',
        cover: img5,
        desc: "Un blog che parla di neuroscienze cognitive ed informatica",
        hasSite: true,
        hasGithub: false,
    },

]

export default data;