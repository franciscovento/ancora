import routes from '../../../../../routes';
import services1 from '../../../../assets/img/services1.png';
import services2 from '../../../../assets/img/services2.png';
import services3 from '../../../../assets/img/services3.png';
const en = {
  hero: {
    title:
      "Insurance, surety bond and claim management specialists",
    headline: "Risk Boutique Broker",
  },
  experienceAndKnowledge: {
    title: "Our experience and expertise",
    description: `
    We are leaders in high complexity programs, underwriting financial lines, bonds, and employee benefits.
    <br/><br/>
    We offer you alternatives in risk management and claim handling. All with an exclusive approach tailored to your needs.
    `,
    items: [
      {
        title: "Insurance",
        description:
          "We offer insurance solutions tailored to your unique circumstances, regardless of complexity.",
        image: services1.src,
        url: routes.productos.todos,
        buttonText: "Explore"
      },
      {
        title: "Bonds",
        description:
          "We provide you with the best support to guarantee your operations to ensure the success of your projects.",
        image: services2.src,
        url: routes.productos.fianzas_y_garantias,
        buttonText: "Explore"
      },
      {
        title: "Consulting",
        description:
          "We provide you with clear and comprehensive analysis so that you can choose what best suits your needs.",
        image: services3.src,
        url: routes.servicios.todos,
        buttonText: "Explore"
      },
    ],
  },
  benefits: {
    title: "Why Ancora?",
    description: `
    At <b>ANCORA</b>, we have a team of experts and trained professionals who operate every day with passion and a spirit of service.
    <br/><br/>
    We establish alliances with the main local and international markets. We are supported by a network of brokers, lawyers, and specialists that enables us to offer global consultancy, with the highest standards of service and expertise that each risk requires.
    `,
    button1: "Our Story",
    button2: "Culture & Values",
    items: [
      {
        title: "Multinational\nPrograms",
        headline: "",
        description: `
        The <b>ANCORA</b> Multinational Program is aimed at companies that, due to expansion or operational strategy, require assets or operations abroad.
        <br/><br/>
        We are members of the international UNIBA Partners network, so we offer personalized service and attention from our allies in more than 130 countries
      `,
        link: "Explore",
      },
      {
        title: "Ancora University",
        headline: "Continued Education",
        description: `
        The <strong>ANCORA</strong> University was born out of the need to have technically trained and comprehensively educated Human Capital, aligned with the philosophy, values, objectives and strategies of the company.
        <br/><br/> 
        Its purpose is to contribute to the continuous growth of our collaborators by structuring and systematizing training plans based on their needs. Having trained and skilled personnel allows us to provide high-quality service to all our clients.        
      `,
        link: "Explore",
      },
    ],
  },
  brochure: {
    title: "Download Brochure",
    description:
      "Download our brochure to learn more about us and our products.",
    spanish: "Spanish",
    english: "English",
  },
  partners: {
    title: "Ancora, proud member of",
    headline: "Partners and Associations",
  },
  contact: {
    title: "Let’s talk, we are here to help",
    headline: "Contact Us",
    description:
      "Complete the following form and we will be happy to contact you as soon as possible.",
    form: {
      select: {
        name: "Inquiry:",
        options: [
          "Choose an option...",
          "> Affinity",
          "> Agriculture and Livestock",
          "> Cars and Heavy Equipment",
          "> Aviation and Space",
          "> Employee Benefits",
          "> Cyber",
          "> Energy and Natural Resources",
          "> Surety",
          "> Financial Lines",
          "> Marine and Cargo",
          "> Civil Works and Installation",
          "> Multinational Programs",
          "> Property & Casualty",
          "> Credit Insurance",
          "> Individual Insurance",
          "> Otro...",
        ],
      },
      name: "Full Name",
      company: "Company Name (if applicable)",
      email: "Email",
      phone: "Phone",
      message: "How can we help you?",
      submit: "Send",
      captcha: "Check the box",
      mandatory: "Mandatory fields",
      placeHolder: "Write here",
    },
  },
};

export default en;
