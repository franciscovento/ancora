import cascoImg from "../../../../assets/img/products/thumbnails/casco-de-guerra.png";
import responsabilidadImg from "../../../../assets/img/products/thumbnails/responsabilidad-civil.png";

const es = {
  title: "Aviation and Space",
  short_description:
    "We have the support of technical underwriting experts in all the risks of the Aerospace sector, with over 15 years of experience.",
  services: {
    description:
      "Our team of specialists offers services for different risks in the aerospace industry, including:",
    items: [
      "General aviation, corporate jets, and helicopter operators.",
      "Drone operation for personal, recreational, or operational use.",
      "Commercial aviation, cargo operators, and aircraft leasing.",
      "Airports and operators, manufacturers of products and infrastructure related to the aerospace industry.",
      "Satellite operators, launch operators, manufacturers, and suppliers related to the space industry.",
    ],
  },
  products: {
    title: "Our Products",
    description: `
      Our alliance with the main aviation markets globally and with the most relevant underwriters in the market gives us unique adaptability and negotiation capabilities.
      <br /><br />
      There is a significant number of coverages we can offer according to the particular needs of each risk:
    
    `,
    itemsImage: [
      {
        title: "Hull and War Hull Risk",
        description:
          "Covers material damage to the aircraft from various risks and during risky maneuvers.",
        image: cascoImg.src,
      },
      {
        title: "Liability Coverage",
        description:
          "It covers material damages or bodily injuries caused to third parties by the use of the aircraft. This includes damage to property, medical expenses for passengers and crew, among others.",
        image: responsabilidadImg.src,
      },
    ],
    itemsText: [
      {
        title: "Airport Liability Coverage",
        description:
          "Coverage for any damage caused to airport facilities (runways, taxiways, aprons, the terminal building, parking lots, etc.",
      },
      {
        title: "Hangarkeepers Liability",
        description:
          "Coverage for damages that the aircraft may cause to the hangar, as well as those that the hangar and its operators cause to the aircraft. This includes Product Liability, as well as aircraft maintenance activities.",
      },
    ],
  },
  section: {
    title: "Comprehensive Coverage",
    description:
      "We have access to specialized markets for the space industry, offering coverages such as:",
    list: [
      "Satellite manufacturing ",
      "Satellite testing and integration ",
      "Transit Satellite pre-launch and takeoff ",
      "Life in orbit",
      "Civil Liability",
      "Business Interruption (BI) immediate use for all our clients.",
    ],
  },
  executivesContact: [
    {
      name: "Martha Vega",
      job: "International Desk Manager",
      email: "mvega@ancora.com.mx",
      number: "+52 (55) 7908 4516",
    },
  ],
};

export default es;
