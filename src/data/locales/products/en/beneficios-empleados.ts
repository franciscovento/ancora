import medicoImg from "../../../../assets/img/products/thumbnails/medico.png";
import contenidoImg from "../../../../assets/img/products/thumbnails/contenido.png";
import wellnessImg from "../../../../assets/img/products/thumbnails/wellness.png";
import beneficiosImg from "../../../../assets/img/products/thumbnails/beneficios.png";
import cashflow from "../../../../assets/img/products/thumbnails/cashflow.png";
import doctorImg from "../../../../assets/svg/doctor.svg";
import vidaImg from "../../../../assets/svg/vida.svg";
import orfandadImg from "../../../../assets/svg/orfandad.svg";
import deudorImg from "../../../../assets/svg/deudor.svg";
import desempleoImg from "../../../../assets/svg/desempleo.svg";
import accidenteImg from "../../../../assets/svg/accidente.svg";

const es = {
  title: "Employee Benefits",
  short_description:
    "We take care of protecting your Human Capital comprehensively in terms of Life, Major Medical Expenses, Minor Medical Expenses, and Personal Accidents.",
  services: {
    title: "ANCORA’s Value Proposition",
    description: `
      At <strong>ANCORA</strong>, we use our experience as a leading consultant in Employee Benefits programs, combining the expertise of our underwriters and the most innovative actuarial models for the study and design of these programs. We deeply analyze the characteristics and needs of the company in order to offer personalized advice tailored to each client, with the best strategies that allow for tax, financial, accounting, and human capital advantages.
      <br /><br />
      We provide advice, consultancy, and delivery of recommendations on your current insurance programs, looking for alternatives that complement and maximize the benefits you offer to all your collaborators, always seeking cost containment for the company.
    `,
    items: [
      {
        title: "Health and Medical Assessment",
        description:
          "We have a network of in-house doctors responsible for the review, assessment, support, and care of our clients in the event of a claim.",
        image: medicoImg.src,
      },
      {
        title: "Content Generation",
        description:
          "We maintain strategic alliances with the Faculty of Medicine of the Universidad Panamericana and with the Clínica Universidad de Navarra, a leading hospital in Spain and Europe. They offer <strong>ANCORA</strong> firsthand exclusive and highly valuable content for all our clients and collaborators.",
        image: contenidoImg.src,
      },
      {
        title: "Wellness",
        description:
         `We have an area specialized in the management and implementation of prevention and wellness programs; who, in conjunction with our strategic allies, offer a unique solution in the market to detect, analyze, and prevent diseases and ensure the comprehensive well-being of all our clients. 
         <br /><br />
         We offer training, talks, webinars, and personalized health campaigns, making tangible the insurance benefits that the company offers. The above results in an improvement in the quality of life and in the technical outcomes of the insurance programs, maintaining their viability over time.`,
        image: wellnessImg.src,
      },
      {
        title: "Flexible Benefits",
        description:
          "We have the ability to operate and offer flexible benefit schemes to our clients, so that tailor-made benefits can be generated. Our technological platforms allow for the management of personalized insurance programs, premium collection, and online review of policies.",
        image: beneficiosImg.src,
      },
      {
        title: "Cash Flows",
        description:
          "We prepare actuarial studies and loss management programs (Self-insurance or Cash Flows), managing their operation and maximizing their profitability. Likewise, we structure additional protection coverages for these schemes, such as Excess and/or Stop Loss coverages, to safeguard against potential deviations that may arise.",
        image: cashflow.src,
      },
    ],
  },
  products: {
    title: "Products",
    items: [
      {
        name: "Major and Minor\n Medical Expenses",
        image: doctorImg.src,
      },
      {
        name: "Life",
        image: vidaImg.src,
      },
      {
        name: "Orphanhood",
        image: orfandadImg.src,
      },
      {
        name: "Personal \n accidents",
        image: accidenteImg.src,
      },
      {
        name: "Debtor's Life Insurance",
        image: deudorImg.src,
      },
      {
        name: "Unemployment",
        image: desempleoImg.src,
      },
    ],
  },
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
};

export default es;
