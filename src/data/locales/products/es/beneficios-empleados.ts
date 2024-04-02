import medicoImg from "../../../../assets/img/products/thumbnails/medico.png";
import contenidoImg from "../../../../assets/img/products/thumbnails/contenido.png";
import wellnessImg from "../../../../assets/img/products/thumbnails/wellness.png";
import beneficiosImg from "../../../../assets/img/products/thumbnails/beneficios.png";
import cashflow from "../../../../assets/img/products/thumbnails/cashflow.png";
import doctorImg from "../../../../assets/svg/doctor.svg";
import vidaImg from "../../../../assets/svg/vida.svg";
import orfandadImg from "../../../../assets/svg/orfandad.svg";
import deudorImg from "../../../../assets/svg/deudor.svg";
import desempleoImg from "../../../../assets/svg/desempleo.svg";
import accidenteImg from "../../../../assets/svg/accidente.svg";

const es = {
  title: "Beneficios Empleados",
  short_description:
    "Nos encargamos de proteger tu Capital Humano de manera integral en Vida, Gastos Médicos Mayores, Menores y Accidentes Personales.",
  services: {
    title: "Propuesta de Valor ANCORA",
    description: `
    En <b>ANCORA</b> utilizamos nuestra experiencia como consultor líder en programas de Beneficios para Empleados, conjuntando la especialidad de nuestros suscriptores y los modelos actuariales más novedosos para el estudio y diseño de estos programas. Analizamos a profundidad las características y necesidades de la empresa, para poder ofrecer una asesoría personalizada y a la medida de cada cliente, con las mejores estrategias que permitan tener ventajas fiscales, financieras, contables y de capital humano.
    <br/><br/>
    Proveemos asesoría, consultoría y entrega de recomendaciones en tus programas de seguro actuales, buscando alternativas que complementen y maximicen los beneficios que ofreces a todos tus colaborares, buscando siempre la contención de costos para la empresa.
    `,
    items: [
      {
        title: "Área Médica y de Dictamen propia",
        description:
          "Contamos con una red de médicos propios responsables de la revisión, dictamen, acompañamiento y atención de nuestros clientes en caso de siniestro.",
        image: medicoImg.src,
      },
      {
        title: "Generación de contenido",
        description:
          "Mantenemos alianzas estratégicas con la Facultad de Medicina de la Universidad Panamericana y con la Clínica Universidad de Navarra, hospital líder de España y Europa, quienes ofrecen a <strong>ANCORA</strong> de primera mano contenido exclusivo y de altísimo valor para todos nuestros clientes y colaboradores.",
        image: contenidoImg.src,
      },
      {
        title: "Wellness",
        description:
          "Contamos con un área especializada en la gestión e implementación de programas de prevención y wellness; quienes en conjunto con nuestros aliados estratégicos, ofrecen una solución única en el mercado para detectar, analizar y prevenir enfermedades y garantizar el bienestar integral de todos nuestros clientes. </br> </br> Ofrecemos capacitación, pláticas, webinars y campañas de salud personalizadas, tangibilizando las prestaciones de seguro que ofrece la empresa. Lo anterior genera una mejora en la calidad de vida y en los resultados técnicos de los programas de seguro, manteniendo su viabilidad a lo largo del tiempo.",
        image: wellnessImg.src,
      },
      {
        title: "Beneficios flexibles",
        description:
          "Contamos con la capacidad de operar y ofrecer esquemas de beneficios flexibles a nuestros clientes, de manera que puedan generarse prestaciones hechas a la medida. Nuestras plataformas tecnológicas permiten la gestión de programas personalizados de seguro, cobro de primas y visualización de pólizas en línea.",
        image: beneficiosImg.src,
      },
      {
        title: "Cash Flows",
        description:
          "Elaboramos estudios actuariales y programas de administración de pérdidas (Autoseguros o Cash Flows), gestionando su operación y maximizando su rentabilidad. Asimismo, estructuramos coberturas adicionales de protección a estos esquemas como coberturas de Exceso y/o Stop Loss, para cuidar las desviaciones que pueden generarse.",
        image: cashflow.src,
      },
    ],
  },
  products: {
    title: "Productos",
    items: [
      {
        name: "Gastos Médicos\n Mayores y Menores",
        image: doctorImg.src,
      },
      {
        name: "Vida",
        image: vidaImg.src,
      },
      {
        name: "Orfandad",
        image: orfandadImg.src,
      },
      {
        name: "Accidentes\n Personales",
        image: accidenteImg.src,
      },
      {
        name: "Vida Deudor",
        image: deudorImg.src,
      },
      {
        name: "Desempleo",
        image: desempleoImg.src,
      },
    ],
  },
  executivesContact: [
    {
      name: "Ivonne Luján",
      job: "Directora de Suscripción",
      email: "ilujan@ancora.com.mx",
      number: "+52 (55) 8077 3151",
    },
    {
      name: "Johanna Munguía",
      job: "Coord. de Suscripción Beneficios",
      email: "jmunguia@ancora.com.mx",
      number: "+52 (55) 4555 6867",
    },
    {
      name: "Xóchitl García",
      email: "xgarcia@ancora.com.mx",
      job: "Ejecutiva de Suscripción",
      number: "+52 (55) 5523 1100",
    },
  ],
};

export default es;
