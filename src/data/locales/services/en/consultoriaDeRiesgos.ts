import beneficiosEmpleadosImg from "../../../../assets/img/services/thumbnails/beneficios-empleados.png";
import dañosImg from "../../../../assets/img/services/thumbnails/danos.png";
import fianzasImg from "../../../../assets/img/services/thumbnails/fianzas.png";
import lineasFinancieras from "../../../../assets/img/services/thumbnails/lineas-financieras.png";

const es = {
  title: "Risk Consulting",
  description: "Trust us to guide you towards informed decisions and effective risk-management strategies.",
  services: {
    title: "Types of Services",
    description:
      "We have a team of experts dedicated to providing personalised solutions to protect you and your assets.",
    items: [
      {
        name: "Employee Benefits",
        description:
          "We thoroughly analyse your company’s characteristics and needs for tailor-made desired benefits by means of the best strategies offering tax, financial, accounting, and human capital advantages. <br /> <br />  We provide consultancy for your existing policies, seeking alternatives aligned with your employees’ actual requirements, and leading to cost reductions.",
        image: beneficiosEmpleadosImg.src,
      },
      {
        name: "Property & Casualty",
        description:
          "Emergency assistance services can also be added, offering professional personnel services in case of a covered emergency. We can help you establish an insurance and assistance plan tailored to your risk needs by understanding the threats you face. <br><br>Our advisory team provides the support you need to, after analysing your business, make a better selection of insurance policies to protect your assets and mitigate financial losses. We also assist you through every step of the unfortunate claims your business may encounter.",
        image: dañosImg.src,
      },
      {
        name: "Financial Lines",
        description:
          "We provide specialized consultancy in Financial Lines for both domestic and international clients, as well as across different jurisdictions. We assist clients in filling out questionnaires, provide advice on arising questions, and supplement the information by proactively knowing the most relevant points of this underwriting.<br /> <br /> For each of our clients and with each of their policies, we perform a comprehensive risk analysis, considering the current environment and their specific industry to obtain the best policy terms and conditions, tailor-made and with a fair premium. We generate and agree upon handwritten texts through non-standard contracts.",
        image: lineasFinancieras.src,
      },
      {
        name: "Bond",
        description:
          "We offer advice, management, and protection in guarantees to allow our clients to safeguard their projects’ interests in order to promote the comprehensive development of their companies.",
        image: fianzasImg.src,
      },
    ],
  },
};

export default es;
