import beneficiosEmpleadosImg from "../../../../assets/img/services/thumbnails/beneficios-empleados.png";
import dañosImg from "../../../../assets/img/services/thumbnails/danos.png";
import fianzasImg from "../../../../assets/img/services/thumbnails/fianzas.png";
import lineasFinancieras from "../../../../assets/img/services/thumbnails/lineas-financieras.png";

const es = {
  title: "Consultoría de Riesgos",
  description:
    "Confía en nosotros para guiarte hacia decisiones informadas y estrategias de gestión de riesgos efectivas.",
  services: {
    title: "Tipos de Servicio",
    description:
      "Contamos con un equipo de expertos dedicado a proporcionarte soluciones personalizadas para protegerte a ti y tus activos.",
    items: [
      {
        name: "Beneficios para empleados",
        description:
          "Analizamos a profundidad las características y necesidades de tu empresa, para poder adecuar el beneficio que se desea implementar, con las mejores estrategias que permitan tener ventajas fiscales, financieras, contables y de capital humano. <br /> <br />  Te damos asesoría a tus pólizas existentes, buscando alternativas que se ajusten a los requerimientos reales de tus colaboradores y que conduzcan a una disminución en los costos.",
        image: beneficiosEmpleadosImg.src,
      },
      {
        name: "Daños",
        description:
          "Nuestro equipo de asesores te brindan el apoyo que requieres para, previo análisis de tu negocio, tener una mejor contratación de los seguros que protejan tus bienes patrimoniales y mitiguen pérdidas financieras, además te acompañamos en todos y cada uno de los siniestros que lamentablemente sufra tu negocio.",
        image: dañosImg.src,
      },
      {
        name: "Líneas Financieras",
        description:
          "Damos consultoría especializada en Líneas Financieras a clientes nacionales e internacionales, así como en distintas jurisdicciones. Acompañamos a los clientes en el llenado de los cuestionarios, asesoramiento sobre dudas que surjan y complementamos la información conociendo a priori los puntos más relevantes de esta suscripción.<br /> <br /> Para cada uno de nuestros clientes y con cada una de sus pólizas, se realiza un análisis global del riesgo, lo que está sucediendo en el entorno y en su sector en específico para obtener los mejores términos y condiciones de la póliza, que sea hecha a la medida y con una prima justa. Se generan y        acuerdan textos manuscritos mediante contratos de no adhesión.",
        image: lineasFinancieras.src,
      },
      {
        name: "Fianzas",
        description:
          "Brindamos asesoría, gestión y protección en garantías para permitir a nuestros clientes blindar los intereses de sus proyectos con la finalidad de favorecer el desarrollo integral de sus empresas.",
        image: fianzasImg.src,
      },
    ],
  },
};

export default es;
