import buqueSvg from '../../../../assets/svg/buque.svg';
import handsSvg from '../../../../assets/svg/hands.svg';
import toolsSvg from '../../../../assets/svg/tools.svg';
import transportSvg from '../../../../assets/svg/transport.svg';

const en = {
  title: "Marine and Cargo Insurance",
  short_description: "Protect your goods and merchandise during their transportation by land, sea, and air, whether within national or international territory.",
  section_1: {
    title: "Why Choose Us?",
    description: `
      We understand the importance of the transportation of goods and services for supply chains and for maintaining the lifestyle we have. Insurance originated from these types of risk, which is why ANCORA carries its name, aiming to honour the branch that gave rise to this important industry.
      <br /><br />
     Whether you are a cargo transport operator, manage a logistics company, or are involved in international trade, ANCORA offers customized solutions to the entire chain of intermediaries that ensure the transportation of goods worldwide, providing coverage aligned with the specific risks faced by each company.
    `
  },
  section_2: {
  title: "VALUE PROPOSITION",
  description: `
    We have extensive experience in underwriting these risks, as well as access to international markets specialized in providing capacity for this type of coverage.
    <br /><br />
    We have designed and operated some of Mexico’s most representative programmes, not only creating the best risk transfer scheme but also providing loss management and administration advisory services, contributing to the reduction of claims.
  `
},
  services: {
    title: "Services",
    description: "Our expertise goes beyond the journey of goods; we can also offer you:",
    items: [{
      icon: buqueSvg.src,
      text: "Protection for the hull and machinery of vessels"
    }, {
      icon: handsSvg.src,
      text: "Public and Product Liability (P&I)"
    }, {
      icon: toolsSvg.src,
      text: "Property Damage Coverage"
    }, {
      icon: transportSvg.src,
      text: "Liability Insurance for Railway and Air Companies"
    }]
  },
    executivesContact: [
    {
      name: "Martha Vega",
      job: "International Desk Manager",
      email: "mvega@ancora.com.mx",
      number: "+52 (55) 7908 4516",
    },
    {
      name: "Luis Horacio Moreno",
      job: "Property & Casualty Manager",
      email: "hmoreno@ancora.com.mx",
      number: "+52 (55) 4890 5013",
    },
    {
      name: "Edwin Ruiz",
      job: "FinPro and P&C Account Executive",
      email: "eruiz@ancora.com.mx",
      number: "+52 (55) 3662 9700",
    },
  ],
}

export default en;