import obraCivilImg from '../../../../assets/img/shared/obra-civil.png';
import responsabilidadCivilImg from '../../../../assets/img/shared/responsabilidad-civil.png';
import alertaSvg from '../../../../assets/svg/alerta.svg';
import edificioSvg from '../../../../assets/svg/edificio.svg';
import herramientaSvg from '../../../../assets/svg/herramienta.svg';
import ladrillosSvg from '../../../../assets/svg/ladrillos.svg';
import mezcladoraSvg from '../../../../assets/svg/mezcladora.svg';
import trabajadorSvg from '../../../../assets/svg/trabajador.svg';

const es = {
  title: "Obra Civil y Montaje",
  short_description: "Somos expertos en la suscripción de pólizas de Obra Civil y Responsabilidad Civil en Construcción; mismas que dan cobertura a la obra en todas sus fases.",
  purpose_value: {
    title: "Propuesta de Valor ANCORA",
    description: "Tenemos una amplia experiencia en la administración de grandes proyectos de infraestructura, así como de las necesidades de cobertura de seguros y garantías que requieren los distintos vehículos de financiamiento, gestionando toda la estructura aseguradora en compliance con los requerimientos contractuales que se requiera. Trabajamos con empresas constructoras, dueños de proyectos, fondos de inversión, FIBRAS, CKD’s, entre otros."
  },
  services: [{
    title: "Seguro de Obra Civil y Montaje",
    image: obraCivilImg.src,
    description: `
      <p>
      Está diseñado para las obras civiles de constructores o propietarios al
      encontrarse expuestas a múltiples peligros durante las diferentes etapas
      de construcción que se llevan a cabo en el lugar mismo donde quedarán de
      forma permanente.
      <br /><br />
      Hay cuatro principales tipos de bienes cuyo aseguramiento es
      indispensable:
      </p>
      <ul class="list-disc ml-5 text-anc-text text-sm py-4">
      <li>
        Edificación u obra civil, objeto final del proyecto de construcción.
      </li>
      <li>Materiales de Construcción en el sitio obra.</li>
      <li>
        Maquinaria y equipo que formarán parte del proyecto de obra civil.
      </li>
      <li>Construcciones o edificaciones provisionales o temporales.</li>
    </ul>
    `,
  },{
    title: "Responsabilidad Civil en Construcción",
    image: responsabilidadCivilImg.src,
    description: `
    Hace frente a los daños ocasionados a una tercera persona o al mismo trabajador durante el desarrollo de la actividad de construcción o promoción.
    `
  }],
  products: {
    title: "Productos",
    middle: "RESPONSABILIDAD CIVIL",
    top: [
      {
        name: 'Obra Civil\n (Todo Riesgo)',
        icon: edificioSvg.src,
      },
      {
        name: 'Obra Civil\n Abierta',
        icon: ladrillosSvg.src,
      },
      {
        name: 'Retraso en la\n puesta en marcha',
        icon: alertaSvg.src,
      },
    ],
    bottom: [
      {
        name: 'Construción \n (Open Cover)',
        icon: herramientaSvg.src,
      },
      {
        name: 'Construcción para\n Proyectos\n Específicos',
        icon: mezcladoraSvg.src,
      },
      {
        name: 'R.C (Umbrella)',
        icon: trabajadorSvg.src,
      },
    ]
  },
  executivesContact: [
    {
      name: "Luis Horacio Moreno",
      job: "Gerente de P&C y Riesgos",
      email: "hmoreno@ancora.com.mx",
      number: "+52 (55) 4890 5013",
    },
    {
      name: "Edwin Ruiz",
      job: " Ejecutivo de FinPro y P&C",
      email: "eruiz@ancora.com.mx",
      number: "+52 (55) 3662 9700",
    },
  ]
}

export default es;