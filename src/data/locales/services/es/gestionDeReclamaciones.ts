import coberturaImg from "../../../../assets/img/shared/cobertura.png";
import experienciaImg from "../../../../assets/img/shared/experiencia.png";
import solucionesImg from "../../../../assets/img/shared/soluciones.png";

const es = {
  title: "Gestión de Reclamaciones",
  description: "Somos tu aliado ante cualquier reclamación",
  propuesta_valor: {
    title: "Propuesta de Valor ANCORA",
    description:
      "En <strong>ANCORA</strong> brindamos acompañamiento y asesoría en caso de un siniestro, contamos con un equipo especializado con más de 20 años de experiencia, defendiendo y asesorando a las    Aseguradoras y Reaseguradoras en los siniestros, y ahora velando por los intereses de nuestros clientes.",
    items: [
      {
        name: "Cobertura",
        description:
          "Establecemos cobertura, procedencia o no del siniestro; conociendo de primera mano las principales problemáticas existentes en los textos e interpretación de las pólizas.",
        image: coberturaImg.src,
      },
      {
        name: "Experiencia",
        description:
          "Contamos con amplia experiencia participando en mediaciones, y arbitrajes tanto nacionales como internacionales y litigios concernientes a la indemnización de acuerdo con lo pactado en la póliza.",
        image: experienciaImg.src,
      },
      {
        name: "Soluciones",
        description:
          "Nuestros expertos cuentan con las herramientas necesarias para asesorar a los asegurados desde el primer momento en que se presenta un siniestro.",
        image: solucionesImg.src,
      },
    ],
  },
};
export default es;
