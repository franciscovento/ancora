import cascoImg from "../../../../assets/img/products/thumbnails/casco-de-guerra.png";
import responsabilidadImg from "../../../../assets/img/products/thumbnails/responsabilidad-civil.png";

const es = {
  title: "Aviación y Espacio",
  short_description:
    "Contamos con el respaldo de expertos técnicos de suscripción en todos los riesgos del sector Aeroespacial, con más de 15 años de experiencia.",
  services: {
    description:
      "Nuestro equipo de especialistas ofrece servicio a distintos riesgos de la industria aeroespacial, incluyendo:",
    items: [
      "Aviación general, jets corporativos y operadores de helicópteros",
      "Operación de drones para uso personal, recreativo u operacional.",
      "Aviación comercial, operadores de carga y arrendamiento de aeronaves",
      "Aeropuertos y sus operadores, fabricantes de productos e infraestructura relacionada con la industria aeroespacial",
      "Operadores de satélites, agencias de lanzamiento, fabricantes y proveedores relacionados con la industria espacial",
    ],
  },
  products: {
    title: "Nuestros Productos",
    description: `
      Nuestra alianza con los principales mercados de aviación a nivel global y con los suscriptores más relevantes del mercado, nos dan una capacidad de respuesta y negociación única.
      <br/><br/>
      Existe un número importante de coberturas que podemos ofrecer de acuerdo a la necesidad particular de cada riesgo, destacando las siguientes:
    `,
    itemsImage: [
      {
        title: "Casco y Casco de Guerra",
        description:
          "Cubre los daños materiales de la aeronave por diversos riesgos y en sus diferentes maniobras.",
        image: cascoImg.src,
      },
      {
        title: "Responsabilidad Civil (RC)",
        description:
          "Ampara los daños materiales o lesiones corporales ocasionados a terceros por el uso de la aeronave. Incluye daños a propiedad, gastos médicos a pasajeros y tripulantes, entre otros.",
        image: responsabilidadImg.src,
      },
    ],
    itemsText: [
      {
        title: "Responsabilidad Civil Aeroportuaria",
        description:
          "Cobertura para cualquier daño que se ocasione a las instalaciones del aeropuerto (pistas, calles de rodaje, plataformas, el edificio de la terminal, los estacionamientos, etc.)",
      },
      {
        title: "Responsabilidad Civil Hangares",
        description:
          "Cobertura a los daños que la aeronave ocasione al Hangar, así como aquellos que el Hangar y sus operadores ocasionen a la aeronave. Incluye Responsabilidad Civil Productos, así como las actividades de mantenimiento a aeronaves.",
      },
    ],
  },
  section: {
    title: "Amplia Cobertura",
    description:
      "Contamos con acceso a mercados especializados para la industria espacial, ofreciendo coberturas como:",
    list: [
      "Fabricación de satélites",
      "Prueba e integración de satélites",
      "Tránsito",
      "Prelanzamiento y despegue de satélite",
      "Vida en órbita",
      "Responsabilidad Civil",
      "Pérdida de Negocio (BI) uso inmediato de todos nuestros clientes",
    ],
  },
  executivesContact: [
    {
      name: "Martha Vega",
      job: "International Desk Manager",
      email: "mvega@ancora.com.mx",
      number: "+52 (55) 7908 4516",
    },
  ],
};

export default es;
