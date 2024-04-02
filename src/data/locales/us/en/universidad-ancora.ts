import exposicionImg from '../../../../assets/img/about-us/exposicion.png'
import reunionVirtualImg from '../../../../assets/img/about-us/reunion-virtual.png';
import presentacionImg from '../../../../assets/img/about-us/presentacion.png';

const en = {
  title: "Ancora University",
  description: "Our goal is to ensure that all our collaborators have comprehensive training,  supporting their professional growth and personal development.",
  section_1: {
    title: "Comprehensive Training",
    description: `
    Through an agreement with Rochat University, a business school based in
    Switzerland and Mexico, our collaborators and their families can take
    bachelor's, master's or diploma degrees at very affordable prices.
    <br/><br/>
    In addition, we have an alliance with Crehana, the online class platform, through which our employees develop their soft skills through various courses.
    `
  },
  benefits: [{
    title: "Training",
    image: presentacionImg.src,
    description : "Our team leaders add to the workforce development by providing training in their areas of expertise"
  }, 
{
  title: "Education",
  image: reunionVirtualImg.src,
  description: "We have created various learning spaces, both synchronous and asynchronous, in order to ensure that continuous education and training becomes a habit of all our employees."
}, {
  title: "Excellence",
  image: exposicionImg.src,
  description: "We are convinced that the more we focus on training our people, the more they will be able to give their best, both in their work and in their personal lives."
}]
}

export default en;