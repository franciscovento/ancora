import coberturaImg from "../../../../assets/img/shared/cobertura.png";
import experienciaImg from "../../../../assets/img/shared/experiencia.png";
import solucionesImg from "../../../../assets/img/shared/soluciones.png";

const en = {
  title: "Claims Management",
  description: "We are your expert ally when it comes to handling a claims request.",
  propuesta_valor: {
    title: "ANCORA’s Value Proposition",
    description:
      "At <strong>ANCORA</strong> we provide support and guidance in the event of a claim. We have a specialized team with over 20 years of experience, advocating and advising insurers and reinsurers in claims, currently safeguarding the interests of our clients.",
    items: [
      {
        name: "Coverage",
        description:
          "We establish coverage, whether the claim is valid or not, having first-hand knowledge of the main issues concerning policy wording and interpretation.",
        image: coberturaImg.src,
      },
      {
        name: "Experience",
        description:
          "We have extensive experience in participating in mediations and arbitrations, both domestic and international, and litigations related to indemnification in accordance with the policy terms.",
        image: experienciaImg.src,
      },
      {
        name: "Solutions",
        description:
          "Our experts have the necessary tools to advise policyholders from the moment a claim is filed.",
        image: solucionesImg.src,
      },
    ],
  },
};
export default en;
