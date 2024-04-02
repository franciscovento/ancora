import obraCivilImg from '../../../../assets/img/shared/obra-civil.png';
import responsabilidadCivilImg from '../../../../assets/img/shared/responsabilidad-civil.png';
import alertaSvg from '../../../../assets/svg/alerta.svg';
import edificioSvg from '../../../../assets/svg/edificio.svg';
import herramientaSvg from '../../../../assets/svg/herramienta.svg';
import ladrillosSvg from '../../../../assets/svg/ladrillos.svg';
import mezcladoraSvg from '../../../../assets/svg/mezcladora.svg';
import trabajadorSvg from '../../../../assets/svg/trabajador.svg';

const es = {
  title: "Civil Works and Installation",
  short_description: "We are experts in underwriting Civil Works and Civil Liability in Construction policies; which provide coverage for the project in all its phases. ",
  purpose_value: {
    title: "Value Proposition ANCORA",
    description: "We have extensive experience in managing large infrastructure projects, as well as the insurance coverage and guarantees required by various financing vehicles, managing the entire insurance structure in compliance with contractual requirements. We work with construction companies, project owners, investment funds, real estate investment trusts (FIBRAS), capital development certificates (CKD's), among others."
  },
  services: [{
    title: "Insurance for Civil Works and Installation",
    image: obraCivilImg.src,
    description: `
      <p>
        Designed for civil works of builders or property owners exposed to multiple risks during the various stages of construction that take place at the construction site.
      <br /><br />
      There are four main types of assets where coverage is essential:
      </p>
      <ul class="list-disc ml-5 text-anc-text py-4">
      <li>
      Building or civil work, the final object of the construction project.
      </li>
      <li>Construction materials on the construction site.</li>
      <li>
      Machinery and equipment that will be part of the civil construction project.
      </li>
      <li>Temporary or provisional constructions or buildings.</li>
    </ul>
    `,
  },{
    title: "Civil Liability and Construction",
    image: responsabilidadCivilImg.src,
    description: `
      Covers damages caused to a third party or injuries sustained by construction workers during the construction process. 
    `
  }],
  products: {
    title: "Products",
    middle: "civil liability",
    top: [
      {
        name: 'Construction\n (All Risks)',
        icon: edificioSvg.src,
      },
      {
        name: 'Public\n Construction',
        icon: ladrillosSvg.src,
      },
      {
        name: 'Construction\n Delays',
        icon: alertaSvg.src,
      },
    ],
    bottom: [
      {
        name: 'Constructions\n (Open Cover)',
        icon: herramientaSvg.src,
      },
      {
        name: 'Construction\n for Specific\n Projects',
        icon: mezcladoraSvg.src,
      },
      {
        name: 'Civil Liability (Umbrella)',
        icon: trabajadorSvg.src,
      },
    ]
  },
  executivesContact: [
    {
      name: "Luis Horacio Moreno",
      job: "Property & Casualty Manager",
      email: "hmoreno@ancora.com.mx",
      number: "+52 (55) 4140 2840",
    },
    {
      name: "Edwin Ruiz",
      job: "FinPro and P&C Account Executive",
      email: "eruiz@ancora.com.mx",
      number: "+52 (55) 3662 9700",
    },
  ]
}

export default es;