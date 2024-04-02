import clasicoImg from "../../../../assets/img/products/cars-thumbnails/clasico.png";
import camiones from "../../../../assets/img/products/cars-thumbnails/camiones.png";
import cashFlow from "../../../../assets/img/products/cars-thumbnails/cash-flow.png";
import autoMotocicleta from "../../../../assets/img/products/cars-thumbnails/auto-y-motocicleta.png";
import contratista from "../../../../assets/img/products/cars-thumbnails/contratista.png";
import empleados from "../../../../assets/img/products/cars-thumbnails/empleados.png";
import flotilla from "../../../../assets/img/products/cars-thumbnails/flotilla.png";
import motocicleta from "../../../../assets/img/products/cars-thumbnails/motocicleta.png";
import nomina from "../../../../assets/img/products/cars-thumbnails/nomina.png";
import utilitarios from "../../../../assets/img/products/cars-thumbnails/utilitarios.png";

const es = {
  title: "Autos y Equipo Pesado",
  short_description:
    "Administramos flotas de automóviles, motocicletas, camiones, tractocamiones y equipo pesado, con toda una infraestructura tecnológica para la gestión de pólizas y atención especializada de siniestros.",
  value_proposal: {
    title: "Propuesta de Valor ANCORA",
    description: `
      Contamos con alianzas estratégicas que nos permiten ofrecer asesoría para el manejo a la defensiva y evaluación de procesos, buscando la integridad de los conductores y la disminución de accidentes viales.
      <br/><br/>
      Tenemos amplia experiencia en la creación de programas especializados para todo tipo de flotas y giros, desde uso particular, utilitario, mensajería, reparto, aplicaciones On- demand, entre otros.
      <br/><br/>
      Operamos esquemas tradicionales de seguro en todas sus coberturas, teniendo la capacidad para plantear estudios actuariales de administración de pérdidas, operación de Cash Flows y autoseguros, entre otros esquemas no tradicionales.
    `,
  },
  products: {
    title: "Nuestros Productos",
    items: [
      {
        name: "Autos clásicos y de alto valor",
        image: clasicoImg.src,
      },
      {
        name: "Flotilla de autos utilitarios",
        image: utilitarios.src,
      },
      {
        name: "Camiones y Tractocamiones",
        image: camiones.src,
      },
      {
        name: "Motocicletas",
        image: motocicleta.src,
      },
      {
        name: "Flotilla Empleados (Fuerza de Venta)",
        image: flotilla.src,
      },
      {
        name: "Descuento por nómina",
        image: nomina.src,
      },
      {
        name: "Equipo de contratistas",
        image: contratista.src,
      },
      {
        name: "Flotilla empleados (Uso Particular)",
        image: empleados.src,
      },
      {
        name: "Planes de Autoseguro y administración de Cash Flows",
        image: cashFlow.src,
      },
      {
        name: "Autos y Motocicletas de uso personal, utilitario",
        image: autoMotocicleta.src,
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
      name: "Fanny Lumbreras",
      job: "Gerente Unidad de Autos",
      email: "flumbreras@ancora.com.mx",
      number: "+52 (55) 8548 7332",
    },
  ],
};

export default es;
