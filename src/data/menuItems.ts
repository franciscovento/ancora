import products from "./menuProducts";
import routes from '../../routes'

const menuItems = [
  {
    name: {
      es: "Inicio",
      en: "Home"
    },
    link: routes.inicio,
  },
  {
    name: {
      es: "Nosotros",
      en: "About Us"
    },
    link: "",
    submenu: [
      {
        name: {
          es: "Cultura Ancora",
          en: "Who We Are"
        },
        
        link: "",
        submenu: [
          {
            name: {
              es: "Nuestra Historia",
              en: "Our History"
            
            },
            link: routes.nosotros.cultura_ancora.nuestra_historia,
          },
          {
            name: {
              es: "Cultura y Valores",
              en: "Our Culture"
            
            },
            link: routes.nosotros.cultura_ancora.cultura_y_valores,
          },
          {
            name: {
              es: "Responsabilidad Social",
              en: "Social Responsability"
            
            },
            
            link: routes.nosotros.cultura_ancora.responsabilidad_social,
          },
        ],
      },
      {
        name: {
          es: "Red de Aliados",
          en: "Partners"
        
        },
        link: routes.nosotros.red_de_aliados,
      },
      {
        name: {
          es: "Trabaja con Nosotros",
          en: "Work with Us"
        },
        link: routes.nosotros.trabaja_con_nosotros,
      },
    ],
  },
  {
    name: {
      es: "Productos",
      en: "Products"
    },
    link: routes.productos.todos,
    submenu: products,
  },
  {
    name: {
      es: "Servicios",
      en: "Services"
    },
    link: routes.servicios.todos,
    submenu: [
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

export default menuItems;
