import espirituDeServicioImg from "../../../../assets/img/about-us/espiritu-de-servicio.png";
import excelenciaImg from "../../../../assets/img/about-us/excelencia.png";
import trabajoEnEquipoImg from "../../../../assets/img/about-us/trabajo-en-equipo.png";
import innovacionImg from "../../../../assets/img/about-us/innovacion.png";

const en = {
  hero: {
    title: 'CULTURE & VALUES',
    description: 'We are a company focused on creating a welcoming environment for our team and clients, whose success we consider a fundamental pillar for our growth.',
  },
  section1: {
    purpose: {
      title: 'Our purpose',
      description: 'We exist to provide peace of mind.'
    },
    mantra: {
      title: 'Our mission',
      description: 'We provide our clients with high-quality advice.'
    },
  },
  section2: {
    title: 'Our Values',
    list: [
      { title: 'Spirit of Service', text: 'OUR CLIENTS ALWAYS COME FIRST', img: espirituDeServicioImg.src },
      { title: 'Excellence', text: 'WE STRIVE TO BE BETTER EACH DAY', img: excelenciaImg.src},
      { title: 'Teamwork', text: 'WE ARE A TEAM AND ACT AS SUCH', img: trabajoEnEquipoImg.src},
      { title: 'Innovation', text: 'WE EXCEED EXPECTATIONS', img: innovacionImg.src},
    ]
  },
  testimonials: [
    {
      text: '”We take care of the details. When we engage with a client we think of them as a complex person with a unique story, not just a generic client. We truly listen in order to understand the needs and circumstances of every person who interacts with us.”',
      author: `Colaborador <b>ANCORA</b>`
    },
    {
      text: `”For me <b>ANCORA</b> stands for service with human quality.”`,
      author: `<b>ANCORA</b> Client.`
    },
    {
      text: '“You have shown unconditional support to your clients in any difficult moment, and that has defined you as their backbone, their anchor.”',
      author: `<b>ANCORA</b> Supplier.`
    },
    {
      text: `“<b>ANCORA</b> is one of the few intermediaries you can trust because of the ethics they exhibit.”`,
      author: `<b>ANCORA</b> Business Partner.`
    }
  ]
}
export default en;