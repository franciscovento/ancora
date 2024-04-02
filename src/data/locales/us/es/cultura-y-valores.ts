import espirituDeServicioImg from "../../../../assets/img/about-us/espiritu-de-servicio.png";
import excelenciaImg from "../../../../assets/img/about-us/excelencia.png";
import trabajoEnEquipoImg from "../../../../assets/img/about-us/trabajo-en-equipo.png";
import innovacionImg from "../../../../assets/img/about-us/innovacion.png";

const es = {
  hero: {
    title: 'CULTURA Y VALORES',
    description: 'Somos una empresa 100% orientada a nuestros colaboradores y clientes, quienes están en el corazón de cada una de nuestras acciones.',
  },
  section1: {
    purpose: {
        title: 'Nuestro propósito',
        description: 'Existimos para brindar tranquilidad.'
      },
      mantra: {
        title: 'Nuestro mantra',
        description: 'Creamos confianza.'
      },
  },
  section2: {
    title: 'Nuestros valores',
    list: [
      { title: 'Espíritu de servicio', text: 'EL CLIENTE ES LO PRIMERO', img: espirituDeServicioImg.src },
      { title: 'Excelencia', text: 'SER MEJORES CADA DÍA', img: excelenciaImg.src},
      { title: 'Trabajo en Equipo', text: 'TODOS SOMOS IMPORTANTES', img: trabajoEnEquipoImg.src},
      { title: 'Innovación', text: 'ADEMÁS DE SATISFACER, BUSCAMOS SORPRENDER', img: innovacionImg.src},
    ]
  },
  testimonials: [
    {
      text: '”Nos importan las cosas, vemos a la persona como una historia de vida. Es una persona, no una póliza, cuando hablamos con la gente escuchamos más allá de un requerimiento administrativo.”',
      author: `Colaborador <b>ANCORA</b>`
    },
    {
      text: `”Para mi <b>ANCORA</b> en una palabra es servicio y en una frase es servicio con calidad humana.”`,
      author: `Cliente <b>ANCORA</b>.`
    },
    {
      text: '“Habéis demostrado un apoyo incondicional en cualquier momento difícil a sus clientes y eso os ha caracterizado siendo su soporte, su ancla.”',
      author: `Proveedor de <b>ANCORA</b>.`
    },
    {
      text: `“<b>ANCORA</b> es de los pocos intermediarios de los que puedo meter las manos al fuego por la ética con la que se conducen.”`,
      author: `Socio Comercial <b>ANCORA</b>.`
    }
  ]
}
export default es;