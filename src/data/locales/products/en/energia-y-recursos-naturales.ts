import mineriaImg from "../../../../assets/svg/mineria.svg";
import nuclearImg from "../../../../assets/svg/nuclear.svg";
import renovableImg from "../../../../assets/svg/renovable.svg";
import excavadoraImg from "../../../../assets/svg/excavadora.svg";
import camion from "../../../../assets/svg/camion.svg";
import downstream from "../../../../assets/svg/downstream.svg";

const es = {
  title: "Energy and Natural Resources",
  short_description:
    "We provide insurance solutions for upstream, midstream, and downstream businesses, refineries, pipelines, terminals, tank farms, chemical fertilizer plants, among others.",
  description: `
    <strong>ANCORA's</strong> experience and its team's expertise in covering risks within the energy industry make it one of the brokers with the highest technical knowledge in the region.
    <br /><br />
    We have a team of highly recognized professionals, as well as technical specialists, certified engineers, adjusters, and specialized lawyers, all of them at the service of our clients.
    <br /><br />
    Given the complexity of the risks faced by companies in the energy sector, working with a broker with technical knowledge and specialized market relationships for this industry is crucial, making ANCORA your best choice.
    <br /><br />
    Our clients and experience in underwriting programs for companies in the energy sector allow us to offer our expertise to the entire industry, such as:
  `,
  itemsTop: [
    {
      name: "Mining",
      icon: mineriaImg.src,
    },
    {
      name: "Nuclear Energy and Electricity",
      icon: nuclearImg.src,
    },
    {
      name: "Renewable Energy",
      icon: renovableImg.src,
    },
  ],
  itemsBottom: [
    {
      name: "Upstream",
      icon: excavadoraImg.src,
    },
    {
      name: "Midstream",
      icon: camion.src,
    },
    {
      name: "Downstream",
      icon: downstream.src,
    },
  ],
  section: {
    title: "Specialized Services",
    description: `The services that <strong>ANCORA</strong> and its specialists offer to companies operating in this industry are:`,
    list: [
      "Design and placement of insurance programs.",
      "Risk consulting.",
      "Contract review.",
      "Bonds and Guarantees.",
      "Catastrophe Modeling.",
      "Consulting for project development.",
      "Engineering services for risk prevention and mitigation.",
      "Claims advisory.",
    ],
  },
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
};

export default es;
