import dentistaImg from '../../../../assets/img/shared/dentista.png';
import familyImg from '../../../../assets/img/shared/family.png';
import medicoImg from '../../../../assets/img/shared/medico.png';
import peopleHappyImg from '../../../../assets/img/shared/people-happy.png';
import viajeImg from '../../../../assets/img/shared/viaje.png';

const es = {
  title:  "Seguros Individuales",
  short_description: "Cuidamos lo que más importa, vida, salud y patrimonio, propio o de tus seres queridos. ",
  description: `
    En <strong>ANCORA</strong> contamos con un equipo de especialistas 100%
    dedicado a la atención de todos nuestros clientes individuales. Para
    nosotros cada persona es un mundo y requiere de una atención única, por lo
    que no dudes en acercarte con nosotros, te ayudaremos a encontrar la mejor
    solución que se adecúe a tus necesidades particulares.
    <br /><br />
    Cuidamos tu vida, salud y patrimonio, de manera que te preocupes en vivir y
    disfrutar con tu familia y seres queridos, ya que <strong>ANCORA</strong> te
    respalda y protege. Nuestro equipo de profesionales te ayudará y asesorará
    en los distintos productos que existen en el mercado:
  `,
  products: [
    {
      title: "Seguros de Vida",
      image: peopleHappyImg.src,

      description: `
      <ul class="list-disc ml-5 text-anc-text">
        <li>Ordinarios de Vida</li>
        <li>Dotales</li>
        <li>Ahorro</li>
        <li>Retiro</li>
        <li>Educacionales</li>
        <li>Inversión</li>
      </ul>
      `
    },
    {
      title: "Gatos Médicos Mayores",
      image: medicoImg.src,
      description: `
        <p>
          Protege tu patrimonio y el de tu familia ante imprevistos que puedan
          afectar tu salud. Ya sea en un accidente o enfermedad, tu seguro de
          gastos médicos blindará tus finanzas y se hará cargo de los costos
          asociados a hospitalización, honorarios médicos, medicamentos, terapias
          y demás gastos asociados al padecimiento.
          <br /><br />
          Contamos con productos de cobertura nacional e internacional, así como acceso
          a distintos niveles de hospitales, honorarios médicos, etc. Acércate con
          nosotros y te ayudaremos a encontrar el plan que más se adapte a tus necesidades.
        </p>
      `
    },
    {
      title: "Dental y Vision",
      image: dentistaImg.src,
      description: `
        <p>
          Contamos con alianzas con las mejores aseguradoras dentales y de visión.
          <br /><br />
          Tienes acceso a una red de más de 3,000 consultorios y profesionistas
          para atender todas tus necesidades dentales y de visión.
        </p>
      `
    },
    {
      title: "Casa y Auto",
      image: familyImg.src,
      description: `
        <p>
          Cuidamos también de tu patrimonio, por lo que contamos con excelentes
          productos para proteger tu automóvil y hogar.
          <strong>ANCORA</strong> tiene acceso a los principales mercados locales
          de seguro de auto, por lo que con nosotros encontrarás la cobertura más
          atractiva a tus necesidades y al mejor precio.
          <br /><br />
          No importa si eres dueño del inmueble donde vives o rentas, tenemos las
          mejores coberturas para que duermas tranquilo sabiéndote protegido ante
          los posibles incidentes que pueda sufrir tu patrimonio.
        </p>
      `
    },
    {
      title: "Travel",
      image: viajeImg.src,
      description: `
        <p>
          Viaja y conoce cualquier país del mundo sabiéndote protegido y
          respaldado por <strong>ANCORA</strong>. Tenemos alianzas con proveedores
          y aseguradoras internacionales que garantizan el cumplimiento de los
          requerimientos que las distintas Embajadas y Ministerios de Turismo
          exigen a los visitantes extranjeros que visitan su país. Ya sea que se
          trate de un viaje de placer o negocio, que estés un día o un año,
          tenemos las mejores alternativas para protegerte durante tus viajes.
        </p>
      `
    }
  ],
  executivesContact: [
    {
      name: "Contact Center",
      job: "Atención al cliente",
      email: "contacto@ancora.com.mx",
      number: "+52 (55) 5523 1100",
      icon: "phone",
    },
    {
      name: "Fernando Vargas",
      job: "Gerente de Cuentas Especiales",
      email: "fvargas@ancora.com.mx",
      number: "+52 (55) 6111 6895",
    },
  ],
}

export default es;