import img1 from "../../assets/img/mrtecno-portfolio.jpg"
import img2 from "../../assets/img/tafka-portfolio.png"
import img3 from "../../assets/img/trc-portfolio.png"

const data = [

    {
        title: "www.mrtecno.it",
        github: 'https://github.com/Paolo95/sito_mrtecno_front-end',
        site: 'https://www.mrtecno.it',
        cover: img1,
        desc: "Un sito di e-commerce per la compravendita di prodotti tecnologici",
        isSite: true,
    },
    {
        title: "www.tafkaplayer.it",
        github: 'https://github.com/Paolo95/Custom-web-audio-player',
        site: 'http://www.tafkaplayer.it',
        cover: img2,
        desc: "Un weplayer che permette una sola riproduzione della canzone",
        isSite: true,
    },
    {
        title: "WineTech App",
        github: 'https://github.com/Paolo95',
        site: '',
        cover: img3,
        desc: "App in Augmented Reality per il riconoscimento e tracciamento delle bottiglie di vino",
        isSite: false,
    },

]

export default data;