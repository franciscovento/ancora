import affinity from "../../../assets/img/products/thumbnails/affinity.png";
import agricola from "../../../assets/img/products/thumbnails/agricola-y-ganaderia.png";
import autos from "../../../assets/img/products/thumbnails/autos-y-equipo-pesado.png";
import aviacion from "../../../assets/img/products/thumbnails/aviacion-y-espacio.png";
import beneficios from "../../../assets/img/products/thumbnails/beneficios-empleados.png";
import cyber from "../../../assets/img/products/thumbnails/cyber.png";
import energy from "../../../assets/img/products/thumbnails/energy.png";
import finanzas from "../../../assets/img/products/thumbnails/finanzas.png";
import lineasFinancieras from "../../../assets/img/products/thumbnails/lineas-financieras.png";
import marine from "../../../assets/img/products/thumbnails/marine-y-carga.png";
import obraCivil from "../../../assets/img/products/thumbnails/obra-civil.png";
import multinacionales from "../../../assets/img/products/thumbnails/programas-multinacionales.png";
import property from "../../../assets/img/products/thumbnails/property-casualty.png";
import seguroCredito from "../../../assets/img/products/thumbnails/seguro-credito.png";
import seguroIndividual from "../../../assets/img/products/thumbnails/seguros-individuales.png";
import affinityImg from "../../../assets/img/products/affinity.png";
import agricolaImg from "../../../assets/img/products/agricola-y-ganaderia.png";
import autosImg from "../../../assets/img/products/autos-y-equipo-pesado.png";
import aviacionImg from "../../../assets/img/products/aviacion-y-espacio.png";
import beneficiosImg from "../../../assets/img/products/beneficios-empleados.png";
import cyberImg from "../../../assets/img/products/cyber.png";
import energyImg from "../../../assets/img/products/energy.png";
import finanzasImg from "../../../assets/img/products/finanzas.png";
import lineasFinancierasImg from "../../../assets/img/products/lineas-financieras.png";
import marineImg from "../../../assets/img/products/marine-y-carga.png";
import obraCivilImg from "../../../assets/img/products/obra-civil.png";
import multinacionalesImg from "../../../assets/img/products/programas-multinacionales.png";
import propertyImg from "../../../assets/img/products/property-casualty.png";
import seguroCreditoImg from "../../../assets/img/products/seguro-credito.png";
import seguroIndividualImg from "../../../assets/img/products/seguros-individuales.png";
import type ExecutiveContact from "../../../utils/interfaces/ExcecutiveContact.interface";

export interface Product {
  name: string;
  image: string;
  link: string;
  description: string;
  thumbnail: string;
  short_description: string;
  executivesContact: ExecutiveContact[];
}

const products: Product[] = [
  {
    name: "Affinity",
    thumbnail: affinity.src,
    link: "/productos/affinity",
    description:
      "Los seguros de afinidad ofrecen productos específicos a las características de un grupo o partner,satisfaciendo necesidades particulares de cobertura, distribución y cobranza.",
    image: affinityImg.src,
    short_description:
      "Ofrecemos coberturas específicas a bajo costo para grupos de personas que comparten características o intereses comunes.",
    executivesContact: [
      {
        name: "Marilú Aguirre",
        job: "Project Manager Affinity",
        email: "gamurell@ancora.com.mx",
        number: "+52 (55) 4505 6665",
      },
    ],
  },
  {
    name: "Agrícola y Ganadero",
    thumbnail: agricola.src,
    link: "/productos/agricola-y-ganadero",
    description:
      "Brindamos protección contra la incertidumbre climática y afectaciones a la producción de cultivos y animales.",
    image: agricolaImg.src,
    short_description:
      "Brindamos protección contra la incertidumbre climática y afectaciones a la producción de cultivos y animales.",
    executivesContact: [
      {
        name: "Luis Horacio Moreno",
        job: "Gerente de P&C y Riesgos",
        email: "hmoreno@ancora.com.mx",
        number: "+52 (55) 4890 5013",
      },
    ],
  },
  {
    name: "Autos y Equipo Pesado",
    thumbnail: autos.src,
    link: "/productos/autos-y-equipos-pesados",
    description:
      "Administramos flotas de automóviles, motocicletas, camiones, tractocamiones y equipo pesado, con toda una infraestructura tecnológica para la gestión de pólizas y atención especializada de siniestros.",
    image: autosImg.src,
    short_description:
      "Protegemos los vehículos de tu empresa sin importar el uso que le des o el giro del negocio.",
    executivesContact: [
      {
        name: "Ivonne Luján",
        job: "Directora de Suscripción",
        email: "ilujan@ancora.com.mx",
        number: "+52 (55) 8077 3151",
      },
      {
        name: "Fanny Lumbreras",
        job: "Gerente Unidad de Autos",
        email: "flumbreras@ancora.com.mx",
        number: "+52 (55) 8548 7332",
      },
    ],
  },
  {
    name: "Aviación y Espacio",
    thumbnail: aviacion.src,
    link: "/productos/aviacion-y-espacio",
    description:
      "Contamos con el respaldo de expertos técnicos de suscripción en todos los riesgos del sector Aeroespacial, con más de 15 años de experiencia.",
    image: aviacionImg.src,
    short_description:
      "Aseguramos aeronaves privadas y comerciales, así como a sus ocupantes y los daños causados a terceros.",
    executivesContact: [
      {
        name: "Martha Vega",
        job: "International Desk Manager",
        email: "mvega@ancora.com.mx",
        number: "+52 (55) 7908 4516",
      },
    ],
  },
  {
    name: "Beneficios Empleados",
    thumbnail: beneficios.src,
    link: "/productos/beneficios-empleados",
    description:
      "Nos encargamos de proteger tu Capital Humano de manera integral en Vida, Gastos Médicos Mayores, Menores y Accidentes Personales.",
    image: beneficiosImg.src,
    short_description:
      "Nos encargamos de proteger tu Capital Humano de manera integral en Vida, Gastos Médicos Mayores y Accidentes Personales.",
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
  },
  {
    name: "Cyber",
    thumbnail: cyber.src,
    link: "/productos/cyber",
    description:
      "Protegemos tu negocio en la era digital. Con la creciente amenaza de ciberataques, garantizamos la seguridad de tus datos y la continuidad de tus operaciones.",
    image: cyberImg.src,
    short_description:
      "Protegemos tu negocio en la era digital. Con la creciente amenaza de ciberataques, garantizamos la seguridad de tus datos y la continuidad de tus operaciones.",
    executivesContact: [
      {
        name: "Liliana Calvo",
        job: "Head de Líneas Financieras",
        email: "lcalvo@ancora.com.mx",
        number: "+52 (55) 7995 3960",
      },
      {
        name: "Edwin Ruiz",
        job: " Ejecutivo de FinPro y P&C",
        email: "eruiz@ancora.com.mx",
        number: "+52 (55) 3662 9700",
      },
    ],
  },
  {
    name: "Energy y R. Naturales",
    thumbnail: energy.src,
    link: "/productos/energia-y-recursos-naturales",
    description:
      "Brindamos soluciones de protección en negocios upstream, midstream y downstream, refinerías, gaseoductos, terminales y granjas de tanques, plantas de fertilizantes químicos, entre otros.",
    image: energyImg.src,
    short_description:
      "Brindamos soluciones de protección en negocios upstream, midstream y downstream, refinerías, gaseoductos, terminales y granjas de tanques, plantas de fertilizantes químicos, entre otros.",
    executivesContact: [
      {
        name: "Jorge Salas Benito",
        email: "jsalasb@ancora.com.mx",
        number: "+52 (55) 5523 1100",
        job: "Managing Partner",
        icon: "phone",
      },
      {
        name: "Martha Vega",
        job: "International Desk Manager",
        email: "mvega@ancora.com.mx",
        number: "+52 (55) 7908 4516",
      },
    ],
  },
  {
    name: "Fianzas y Garantías",
    thumbnail: finanzas.src,
    link: "/productos/fianzas-y-garantias",
    description:
      "Expertos en asesoramiento, estructuración e innovación en soluciones para fianzas en todas sus etapas.",
    image: finanzasImg.src,
    short_description:
      "Brindamos asesoría, gestión y protección mediante garantías que permiten a nuestros clientes blindar los intereses de sus proyectos con la finalidad de favorecer el desarrollo integral de sus empresas.",
    executivesContact: [
      {
        name: "Marisol Barajas",
        job: "Head de Fianzas, Cauciones y Garantías",
        email: "mbajaras@ancora.com.mx",
        number: "+52 (55) 5143 0502",
      },
    ],
  },
  {
    name: "Líneas Financieras",
    thumbnail: lineasFinancieras.src,
    link: "/productos/lineas-financieras",
    description:
      "ANCORA es líder en la administración y gestión de programas de Líneas Financieras en la región.",
    image: lineasFinancierasImg.src,
    short_description:
      "Somos líderes en ofrecer la mejor asesoría y soluciones para proteger a tu empresa, profesionistas y directivos; por las diversas y complejas responsabilidades a las que están expuestos.",
    executivesContact: [
      {
        name: "Liiana Calvo",
        job: "Head de Líneas Financieras",
        email: "lcalvo@ancora.com.mx",
        number: "+52 (55) 7995 3960",
      },
      {
        name: "Edwin Ruiz",
        job: " Ejecutivo de FinPro y P&C",
        email: "eruiz@ancora.com.mx",
        number: "+52 (55) 3662 9700",
      },
    ],
  },
  {
    name: "Marine y Carga",
    thumbnail: marine.src,
    link: "/productos/marine-y-carga",
    description:
      "Protege tus bienes y mercancías durante su traslado terrestre, marítimo y aéreo ya sea en territorio nacional o internacional.",
    image: marineImg.src,
    short_description:
      "Ofrecemos coberturas personalizadas para cubrir el traslado de mercancía en cualquier parte del mundo y a través de cualquier medio de transporte.",
    executivesContact: [
      {
        name: "Martha Vega",
        job: "International Desk Manager",
        email: "mvega@ancora.com.mx",
        number: "+52 (55) 7908 4516",
      },
      {
        name: "Luis Horacio Moreno",
        job: "Gerente de P&C y Riesgos",
        email: "hmoreno@ancora.com.mx",
        number: "+52 (55) 4890 5013",
      },
      {
        name: "Edwin Ruiz",
        job: " Ejecutivo de FinPro y P&C",
        email: "eruiz@ancora.com.mx",
        number: "+52 (55) 3662 9700",
      },
    ],
  },
  {
    name: "Obra Civil y Montaje",
    thumbnail: obraCivil.src,
    link: "/productos/obra-civil-y-montaje",
    description:
      "Somos expertos en la suscripción de pólizas de Obra Civil y Responsabilidad Civil en Construcción; mismas que dan cobertura a la obra en todas sus fases.",
    image: obraCivilImg.src,
    short_description:
      "Somos expertos en la suscripción de pólizas de Obra Civil y Responsabilidad Civil Construcción; mismas que dan cobertura a la obra en todas sus fases.",
    executivesContact: [
      {
        name: "Luis Horacio Moreno",
        job: "Gerente de P&C y Riesgos",
        email: "hmoreno@ancora.com.mx",
        number: "+52 (55) 4890 5013",
      },
      {
        name: "Edwin Ruiz",
        job: " Ejecutivo de FinPro y P&C",
        email: "eruiz@ancora.com.mx",
        number: "+52 (55) 3662 9700",
      },
    ],
  },
  {
    name: "Programas Multinacionales",
    thumbnail: multinacionales.src,
    link: "/productos/programas-multinacionales",
    description:
      "Gestionamos integralmente tu programa de seguros en todos los países donde llevas a cabo operaciones, brindándote protección a nivel internacional con atención local.",
    image: multinacionalesImg.src,
    short_description:
      "Gestionamos integralmente tu programa de seguros en todos los países donde llevas a cabo operaciones, brindándote protección a nivel internacional con atención local.",
    executivesContact: [
      {
        name: "Martha Vega",
        job: "International Desk Manager",
        email: "mvega@ancora.com.mx",
        number: "+52 (55) 7908 4516",
      },
    ],
  },
  {
    name: "Property & Casualty",
    thumbnail: property.src,
    link: "/productos/property-and-casualty",
    description:
      "Te ayudamos a identificar los principales riesgos, así como la responsabilidad civil a la que puedas verte expuesto por el desarrollo de tus actividades",
    image: propertyImg.src,
    short_description:
      "Te ayudamos a identificar los principales riesgos, así como la responsabilidad civil a la que puedas verte expuesto por el desarrollo de tus actividades.",
    executivesContact: [
      {
        name: "Luis Horacio Moreno",
        job: "Gerente de P&C y Riesgos",
        email: "hmoreno@ancora.com.mx",
        number: "+52 (55) 4890 5013",
      },
      {
        name: "Edwin Ruiz",
        job: " Ejecutivo de FinPro y P&C",
        email: "eruiz@ancora.com.mx",
        number: "+52 (55) 3662 9700",
      },
    ],
  },
  {
    name: "Seguro de Crédito",
    thumbnail: seguroCredito.src,
    link: "/productos/seguro-de-credito",
    description:
      "Asesorías, gestión y protección mediante garantías que permiten a nuestros clientes blindar los intereses de sus proyectos con la finalidad de favorecer el desarrollo integral de sus empresas.",
    image: seguroCreditoImg.src,
    short_description:
      "Brindamos asesoría, gestión y protección mediante garantías que permiten a nuestros clientes blindar los intereses de sus proyectos con la finalidad de favorecer el desarrollo integral de sus empresas.",
    executivesContact: [
      {
        name: "Marisol Barajas",
        job: "Head de Fianzas, Cauciones y Garantías",
        email: "mbarajas@ancora.com.mx",
        number: "+52 (55) 5143 0502",
      },
    ],
  },
  {
    name: "Seguros individuales",
    thumbnail: seguroIndividual.src,
    link: "/productos/seguros-individuales",
    description:
      "Cuidamos lo que más importa, vida, salud y patrimonio, propio o de tus seres queridos. ",
    image: seguroIndividualImg.src,
    short_description:
      "Cuidamos lo que más importa, vida, salud y patrimonio, propio o de tus seres queridos",
    executivesContact: [
      {
        name: "Contact Center",
        job: "Atención al cliente",
        email: "contacto@ancora.com.mx",
        number: "+52 (55) 5523 1100",
      },
      {
        name: "Fernando Vargas",
        job: "Gerente de Cuentas Especiales",
        email: "fvargas@ancora.com.mx",
        number: "+52 (55) 6111 6895",
      },
    ],
  },
];

export default products;
