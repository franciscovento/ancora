import routes from '../../../../../routes';
import services1 from '../../../../assets/img/services1.png';
import services2 from '../../../../assets/img/services2.png';
import services3 from '../../../../assets/img/services3.png';

const es = {
  hero: {
    title:
      "Especialistas en seguros, garantías y gestión de reclamaciones",
    headline: "Broker Boutique de Riesgos",
  },
  experienceAndKnowledge: {
    title: "Nuestra experiencia y conocimiento",
    description: `Somos líderes en programas de alta complejidad, líneas financieras, fianzas y beneficios para empleados.
    <br/><br/>
    Te ofrecemos alternativas en administración de riesgos y gestión de
    reclamaciones. Todo con un enfoque exclusivo y adaptado a tus
    necesidades.
    `,
    items: [
      {
        title: "Seguros",
        description:
          "Ofrecemos  soluciones  de seguros  adaptadas  a  tus circunstancias  únicas,  incluso las más complejas.",
        image: services1.src,
        url:routes.productos.todos,
        buttonText: "Conoce más"
      },
      {
        title: "Fianzas",
        description:
          "Te  brindamos  el  mejor respaldo para garantizar tus operaciones  y  asegurar  el éxito de tus proyectos.",
        image: services2.src,
        url: routes.productos.fianzas_y_garantias,
        buttonText: "Conoce más"
      },
      {
        title: "Asesorías",
        description:
          "Te proporcionamos una visión clara y transparente para que elijas lo que más se adecúe a tus necesidades.",
        image: services3.src,
        url: routes.servicios.todos,
        buttonText: "Conoce más"
      },
    ],
  },
  benefits: {
    title: "¿Por qué ANCORA?",
    description: `
    En <b>ANCORA</b>, contamos con un equipo de profesionales experto y capacitado que día con día realiza sus acciones con pasión y espíritu de servicio.
    <br/><br/>
    Generamos Alianzas con los principales mercados locales e internacionales y contamos con una red de brókers, abogados y especialistas que nos permiten ofrecer una asesoría global, con los estándares más altos de servicio y especialidad que cada riesgo necesite.
    `,
    button1: "Nuestra Historia",
    button2: "Cultura y Valores",
    items: [
      {
        title: "Programas\nMultinacionales",
        headline: "",
        description: `
  
      El Programa Multinacional de <strong>ANCORA</strong> está dirigido a empresas que por expansión o estrategia operativa requieren de activos u operaciones en el extranjero.
      <br/><br/>
      Somos miembros de la red internacional UNIBA Partners, por lo que ofrecemos servicio y atención personalizada de nuestros corresponsales en más de 130 países.
    
      `,
        link: "Conoce más",
      },
      {
        title: "Universidad ANCORA",
        headline: "EDUCACIÓN CONTINUA",
        description: `
          La <strong>Universidad ANCORA</strong> nace ante la necesidad de contar con Capital Humano capacitado técnicamente y formado integralmente, alineado a la filosofía, los valores, los objetivos y estrategias de la empresa.
          <br/><br/>
          Tiene la finalidad de contribuir en el crecimiento continuo de nuestros colaboradores, estructurando y sistematizando los planes de formación y capacitación con base en sus necesidades. El tener personal formado y capacitado nos permite brindar un servicio con calidad y calidez a todos nuestros clientes.
      `,
        link: "Conoce más",
      },
    ],
  },
  brochure: {
    title: "Folleto Informativo",
    description:
      "Descarga nuestro folleto para saber más sobre nosotros y nuestros productos.",
    spanish: "Español",
    english: "Inglés",
  },
  partners: {
    title: "Ancora, orgulloso miembro de",
    headline: "PARTNERS Y ASOCIACIONES",
  },
  contact: {
    title: "Hablemos, estamos para servirte.",
    headline: "Contáctanos",
    description:
      "Completa el siguiente formulario y con gusto nos pondremos en contacto contigo lo antes posible.",
    form: {
      select: {
        name: "Consulta sobre:",
        options: [
          "Selecciona alguna opción...",
          "> Affinity",
          "> Agrícola y Ganadero",
          "> Autos y Equipo Pesado",
          "> Aviación y Espacio",
          "> Beneficios para Empleados",
          "> Cyber ",
          "> Energy y R. Naturales",
          "> Fianzas y Garantías",
          "> Líneas Financieras",
          "> Obra Civil y Montaje",
          "> Marine y Carga",
          "> Programas Multinacionales",
          "> Property & Casualty",
          "> Seguro de Crédito",
          "> Seguros Individuales",
          "> Otro...",
        ],
      },
      name: "Nombre Completo",
      company: "Nombre de la empresa (en su caso)",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "¿Cómo podemos ayudarte?",
      submit: "Enviar",
      captcha: "Marca la casilla",
      mandatory: "Campos obligatorios",
      placeHolder: "Escribe aquí",
    },
  },
};

export default es;
