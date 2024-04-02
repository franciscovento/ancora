import ambulanceImg from "../../../../assets/img/services/thumbnails/ambulance.png";
import conferenceImg from "../../../../assets/img/services/thumbnails/conference.png";
import doctorImg from "../../../../assets/img/services/thumbnails/doctor.png";
import policeImg from "../../../../assets/img/services/thumbnails/police.png";
import injectionImg from "../../../../assets/img/services/thumbnails/injection.png";
import laptopImg from "../../../../assets/img/services/thumbnails/laptop.png";

const es = {
  title: "Prevención de la Salud y Wellness",
  short_description: "Nuestro valor agregado ANCORA",
  description: `En <strong>ANCORA</strong>, no solo brindamos el mejor servicio a nuestros clientes, también los cuidamos y
    consentimos llevándoles Servicios de Salud Preventiva, así como potenciar los beneficios que
    pueden obtener al requerir de algún Proveedor de Salud.`,
  beneficiosIncluidos: {
    title: "Beneficios Incluidos",
    items: [
      {
        image: ambulanceImg.src,
        description: "Detección de necesidades con base a la siniestralidad",
      },
      {
        image: conferenceImg.src,
        description: "Conferencias sobre Salud Mental, Nutrición y Bienestar",
      },
      {
        image: doctorImg.src,
        description: "Campañas de Salud con Médicos Especialistas",
      },
      {
        image: policeImg.src,
        description: "Campañas de Servicios Incorporados a tu Póliza",
      },
      {
        image: injectionImg.src,
        description: "Campañas de Vacunación",
      },
      {
        image: laptopImg.src,
        description: "Conferencias y Webinars de Interés Común",
      },
    ],
  },
  alianzasEstrategicas: {
    title: "Alianzas Estratégicas con Proveedores",
    description: ` 
    Gracias al análisis de estudios estadísticos creamos convenios directos con proveedores de mayor usabilidad en las pólizas de nuestros clientes.
    <br /> <br />
    Lo anterior con el objetivo de que obtengan beneficios tangibles como descuentos, upgrade de
    servicios, calidad y sobre todo calidez en su atención.
    <br /><br/>
    Nuestras alianzas incluyen hospitales, clínicas, laboratorios y servicios auxiliares.
    `,
  },
  hospitales: "Hospitales",
  servicios_auxiliares: "Servicios Auxiliares",
  laboratorios: "Laboratorios",
  executiveContacts: [
    {
      name: "Luis Muciño",
      job: "Subdirector Servicios Estratégicos al Cliente y Salud Preventiva",
      email: "lmucino@ancora.com.mx",
      number: "+52 (55) 3660 1804",
    },
    {
      name: "Verónica Gallardo",
      job: "Head de Prevención en Salud Corporativa",
      email: "vgallardo@ancora.com.mx",
      number: "+52 (55) 8041 4579",
    },
  ]
};

export default es;
