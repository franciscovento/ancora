import routes from "../../routes";
import menuProducts from './menuProducts'
const menuItemsMobile = [
  {
    name: {
      es: "Nosotros",
      en: "About us"
    },
    submenu: [
      {
        name: {
          es: "Red de Aliados",
          en: "Partners"
        },
        link: routes.nosotros.red_de_aliados,
      },
      {
        name: {
          es: "Trabaja con nosotros",
          en: "Work with us"
        },
        link: routes.nosotros.trabaja_con_nosotros,
      },
    ],
  },
  {
    name: {
      es: "Cultura Ancora",
      en: "Who we are"
    },
    submenu: [
      {
        name: {
          es: "Nuestra Historia",
          en: "Our history"
        },
        link: routes.nosotros.cultura_ancora.nuestra_historia,
      },
      {
        name: {
          es: "Cultura y Valores",
          en: "Our culture"
        },
        link: routes.nosotros.cultura_ancora.cultura_y_valores,
      },
      {
        name: {
          es: "Responsabilidad Social",
          en: "Social responsability"
        },
        link: routes.nosotros.cultura_ancora.responsabilidad_social,
      },
    ],
  },
  {
    name: {
      es: "Productos",
      en: "Products"
    },
    submenu: [
      {
        name: {
          es: "Todos",
          en: "All"
        },
        link: routes.productos.todos,
      },
        ...menuProducts
    ],
  },
  {
    name: {
      es: "Servicios",
      en: "Services"
    },
    submenu: [
      {
        name: {
          es: "Todos",
          en: "All"
        },
        link: routes.servicios.todos,
      },
      {
        name: {
          es: "Consultoría de Riesgos",
          en: "Risk Consulting"
        },
        link: routes.servicios.consultoria_de_riesgos,
      },
      {
        name: {
          es: "Servicios de Ingeniería",
          en: "Engineering Services"
        },
        link: routes.servicios.servicios_de_ingenieria,
      },
      {
        name: {
          es: "Gestión de Reclamaciones",
          en: "Claims Management"
        },
        link: routes.servicios.gestion_de_reclamaciones,
      },
      {
        name: {
          es: "Prevención de Salud y Wellness",
          en: "Health Prevention and Wellness"
        },
        link: routes.servicios.prevencion_de_salud_y_wellness,
      },
    ],
  },
];
export default menuItemsMobile