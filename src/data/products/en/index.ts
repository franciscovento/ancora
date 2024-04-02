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
      "We offer special coverage at a low cost for groups of people who share common characteristics and interests.",
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
    name: "Agricultural and Livestock",
    thumbnail: agricola.src,
    link: "/productos/agricola-y-ganadero",
    description:
      "Brindamos protección contra la incertidumbre climática y afectaciones a la producción de cultivos y animales.",
    image: agricolaImg.src,
    short_description:
      "We offer coverage of risks related to climate that could affect crops or livestock",
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
    name: "Cars and Heavy Equipment",
    thumbnail: autos.src,
    link: "/productos/autos-y-equipos-pesados",
    description:
      "We protect the vehicles of your company, regardless of the type of usage or the business model.",
    image: autosImg.src,
    short_description:
      "We protect the vehicles of your company, regardless of the type of usage or the business model.",
    executivesContact: [
      {
        name: "Ivonne Luján",
        job: "Chief Benefits Underwriter",
        email: "ilujan@ancora.com.mx",
        number: "+52 (55) 8077 3151",
      },
      {
        name: "Fanny Lumbreras",
        job: "Automobile Unit Manager",
        email: "flumbreras@ancora.com.mx",
        number: "+52 (55) 8548 7332",
      },
    ],
  },
  {
    name: "Aviation and Space",
    thumbnail: aviacion.src,
    link: "/productos/aviacion-y-espacio",
    description:
      "Contamos con el respaldo de expertos técnicos de suscripción en todos los riesgos del sector Aeroespacial, con más de 15 años de experiencia.",
    image: aviacionImg.src,
    short_description:
      "We insure commercial as well as private planes, their passengers and potential damages caused to 3rd parties.",
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
    name: "Employee Benefits",
    thumbnail: beneficios.src,
    link: "/productos/beneficios-empleados",
    description:
      "Nos encargamos de proteger tu Capital Humano de manera integral en Vida, Gastos Médicos Mayores, Menores y Accidentes Personales.",
    image: beneficiosImg.src,
    short_description:
      "We take care of your Human Capital by providing Life and Health insurance as well as coverage for major medical expenses and personal accidents. ",
    executivesContact: [
      {
        name: "Ivonne Luján",
        job: "Chief Benefits Underwriter",
        email: "ilujan@ancora.com.mx",
        number: "+52 (55) 8077 3151",
      },
      {
        name: "Johanna Munguía",
        job: "Head of Employee Benefits",
        email: "jmunguia@ancora.com.mx",
        number: "+52 (55) 4555 6867",
      },
      {
        name: "Xóchitl García",
        email: "xgarcia@ancora.com.mx",
        job: "Employee Benefits Executive",
        number: "+52 (55) 5523 1100",
      },
    ],
  },
  {
    name: "Cyber Security",
    thumbnail: cyber.src,
    link: "/productos/cyber",
    description:
      "Protegemos tu negocio en la era digital. Con la creciente amenaza de ciberataques, garantizamos la seguridad de tus datos y la continuidad de tus operaciones.",
    image: cyberImg.src,
    short_description:
      "We protect your business in the digital era. Given the increased threats to cyber security, we help you protect your data and the continuity of your operations.",
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
    name: "Energy and Natural Resources",
    thumbnail: energy.src,
    link: "/productos/energia-y-recursos-naturales",
    description:
      "Brindamos soluciones de protección en negocios upstream, midstream y downstream, refinerías, gaseoductos, terminales y granjas de tanques, plantas de fertilizantes químicos, entre otros.",
    image: energyImg.src,
    short_description:
      "We offer solutions for upstream, midstream, and downstream businesses including refineries, pipelines, terminals, storage tanks, chemical plants, among others.",
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
    name: "Surety",
    thumbnail: finanzas.src,
    link: "/productos/fianzas-y-garantias",
    description:
      "Expertos en asesoramiento, estructuración e innovación en soluciones para fianzas en todas sus etapas.",
    image: finanzasImg.src,
    short_description:
      "We offer consulting, management, and protection via guarantees shielding the interests of our clients to ensure continued growth of their companies.",
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
    name: "Financial Lines",
    thumbnail: lineasFinancieras.src,
    link: "/productos/lineas-financieras",
    description:
      "ANCORA es líder en la administración y gestión de programas de Líneas Financieras en la región.",
    image: lineasFinancierasImg.src,
    short_description:
      "We are leaders in offering consulting and solutions to companies, their employees and leadership teams, in order to offer coverage for the diverse and complex responsibilities they encounter.",
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
    name: "Marine and Cargo",
    thumbnail: marine.src,
    link: "/productos/marine-y-carga",
    description:
      "Protege tus bienes y mercancías durante su traslado terrestre, marítimo y aéreo ya sea en territorio nacional o internacional.",
    image: marineImg.src,
    short_description:
      "We offer personalized and worldwide coverage for merchandise regardless of mode of transportation. ",
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
    name: "Civil Works and Installation",
    thumbnail: obraCivil.src,
    link: "/productos/obra-civil-y-montaje",
    description:
      "Somos expertos en la suscripción de pólizas de Obra Civil y Responsabilidad Civil en Construcción; mismas que dan cobertura a la obra en todas sus fases.",
    image: obraCivilImg.src,
    short_description:
      "We are experts in enabling coverage for Civil Constructions and Liability, ensuring coverage at any phase of development.",
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
    name: "Multinational Programs",
    thumbnail: multinacionales.src,
    link: "/productos/programas-multinacionales",
    description:
      "Gestionamos integralmente tu programa de seguros en todos los países donde llevas a cabo operaciones, brindándote protección a nivel internacional con atención local.",
    image: multinacionalesImg.src,
    short_description:
      "We manage insurance programs in any country you operate in, offering international protection and local client attention.",
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
      "We help you identify the key risks and civil liability that you could be exposed to due to your operations and activities.",
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
    name: "Credit Insurance",
    thumbnail: seguroCredito.src,
    link: "/productos/seguro-de-credito",
    description:
      "Asesorías, gestión y protección mediante garantías que permiten a nuestros clientes blindar los intereses de sus proyectos con la finalidad de favorecer el desarrollo integral de sus empresas.",
    image: seguroCreditoImg.src,
    short_description:
      "We offer consulting, management, and protection via guarantees shielding the interests of our clients to ensure continued growth of their companies.",
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
    name: "Private Insurance",
    thumbnail: seguroIndividual.src,
    link: "/productos/seguros-individuales",
    description:
      "Cuidamos lo que más importa, vida, salud y patrimonio, propio o de tus seres queridos. ",
    image: seguroIndividualImg.src,
    short_description:
      "We protect what matters most: Your Life, health, personal assets, as well as your loved ones. ",
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
