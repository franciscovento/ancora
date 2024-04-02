import ambulanceImg from "../../../../assets/img/services/thumbnails/ambulance.png";
import conferenceImg from "../../../../assets/img/services/thumbnails/conference.png";
import doctorImg from "../../../../assets/img/services/thumbnails/doctor.png";
import policeImg from "../../../../assets/img/services/thumbnails/police.png";
import injectionImg from "../../../../assets/img/services/thumbnails/injection.png";
import laptopImg from "../../../../assets/img/services/thumbnails/laptop.png";

const es = {
  title: "Health and Wellness Prevention",
  short_description: "Our Added Value at ANCORA",
  description: `At <strong>ANCORA</strong>, we not only provide the best service to our clients, but we also take care of them by offering Preventive Health Services and enhancing the benefits they can obtain from healthcare providers.`,
  beneficiosIncluidos: {
    title: "Included Benefits",
    items: [
      {
        image: ambulanceImg.src,
        description: "Needs assessment based on claims history",
      },
      {
        image: conferenceImg.src,
        description: "Conferences on Mental Health, Nutrition, and Well-being",
      },
      {
        image: doctorImg.src,
        description: "Health Campaigns with Specialist Physicians",
      },
      {
        image: policeImg.src,
        description: "Campaigns for Services Included in Your Policy",
      },
      {
        image: injectionImg.src,
        description: "Vaccination Campaigns",
      },
      {
        image: laptopImg.src,
        description: "Conferences and Webinars about Common Interests",
      },
    ],
  },
  alianzasEstrategicas: {
    title: "Strategic Alliances with Vendors",
    description: ` 
     Through the analysis of statistical studies, we establish direct agreements with more user-friendly providers for our clients’ policies.
    <br /> <br />
    The goal is to provide tangible benefits such as discounts, service upgrades, quality, and, above all, warmth in customer service.
    <br /><br/>
    Our alliances include hospitals, clinics, laboratories, and ancillary services.
    `,
  },
  hospitales: "Hospitals",
  servicios_auxiliares: "Ancillary Services",
  laboratorios: "Laboratories",
  executiveContacts: [
    {
      name: "Luis Muciño",
      job: "Deputy Director of Customer Strategic Services and Preventive Health",
      email: "lmucino@ancora.com.mx",
      number: "+52 (55) 3660 1804",
    },
    {
      name: "Verónica Gallardo",
      job: "Head of Corporate Health Prevention",
      email: "vgallardo@ancora.com.mx",
      number: "+52 (55) 8041 4579",
    },
  ]
};

export default es;
