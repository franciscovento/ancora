import exposicionImg from '../../../../assets/img/about-us/exposicion.png'
import reunionVirtualImg from '../../../../assets/img/about-us/reunion-virtual.png';
import presentacionImg from '../../../../assets/img/about-us/presentacion.png';

const es = {
  title: "Universidad ANCORA",
  description: "Nuestro objetivo es que todos nuestros colaboradores cuenten con una formación integral,  apoyando su crecimiento profesional y desarrollo personal.  ",
  section_1: {
    title: "Formación Integral",
    description: `
    Contamos con un convenio con la Universidad de Rochat, una escuela de negocios con sede en
    Suiza y México, por medio del cual nuestros colaboradores y sus familiares pueden cursar
    licenciaturas, maestrías o diplomados a un precio muy accesible.
    <br/><br/>
    Además, tenemos una alianza con Crehana, la plataforma de clases online, por medio de la cual nuestros colaboradores se actualizan en diversos cursos de habilidades blandas.
    `
  },
  benefits: [{
    title: "Capacitación",
    image: presentacionImg.src,
    description : "Se suman los esfuerzos internos de capacitación, mismos que dan nuestros Team Leaders de acuerdo a su expertise."
  }, 
{
  title: "Aprendizaje",
  image: reunionVirtualImg.src,
  description: "Hemos logrado crear diversos espacios de aprendizaje, tanto síncronos como  asíncronos, para poder hacer del estudio y la capacitación un hábito en todos nuestros  colaboradores."
}, {
  title: "Excelencia",
  image: exposicionImg.src,
  description: "Estamos convencidos de que mientras más nos ocupemos de la formación de nuestra gente, más lograrán dar lo mejor de sí tanto en su trabajo como en su vida personal."
}]
}

export default es;