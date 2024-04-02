import campoImg from "../../../../assets/img/shared/campo.png";
import campoInversionImg from "../../../../assets/img/shared/inversion-campo.png";

const es = {
  title: "Agrícola y Ganadero",
  short_description:
    "Brindamos protección contra la incertidumbre climática y afectaciones a la producción de cultivos y animales.",
  description:
    "El objetivo es garantizar la inversión en el campo, actuando como un instrumento para evitar la descapitalización del productor ante la ocurrencia de un siniestro.",
  insurance_types: {
    title: "Tipos de Seguro",
    items: [
      {
        title: "Daño Directo",
        headline: "PARA CULTIVOS CON MODALIDAD DE RIESGO",
        image: campoImg.src,
        description: `
      <div
        class="flex flex-col gap-4 [&>span>strong]:uppercase text-sm text-anc-text"
      >
        <span>
          <strong>Cubre:</strong> Costos directos e indirectos de inversión al
          cultivo
        </span>
        <span>
          <strong>Contempla:</strong> El paquete tecnologico Ciclo de Producción
          de Cultivo
        </span>
        <span>
          <strong>Evaluación del daño:</strong>
          <ul class="list-disc list-outside ml-3">
            <li>Avance de la inversión al momento del siniestro.</li>
            <li>
              Indemnizaciones antes de la cosecha o corte si el daño rebasa el
              deducible pactado.
            </li>
          </ul>
        </span>
      </div>
      `,
      },
      {
        title: "Rendimiento de la inversión",
        headline: "PARA CULTIVOS CON MODALIDAD DE TEMPORAL",
        image: campoInversionImg.src,
        description: `
      <div
        class="flex flex-col gap-4 [&>span>strong]:uppercase text-sm text-anc-text"
      >
      <span>
        <strong>Cubre:</strong> El Rendimiento medio rural.
      </span>
      <span>
        <strong>Contempla:</strong>
        <ul class="list-disc list-outside ml-3">
          <li>Rendimiento histórico de la zona.</li>
          <li>Precio por tonelada o kilo de producción.</li>
        </ul>
      </span>
      <span>
        <strong>Evaluación del daño:</strong> Se indemniza si la producción
        garantizada es menor a la obtenida al momento del corte o en
        estimacions previas a la cosecha si el daño rebasa el deducible
        Pactado.
      </span>
    </div>
      `,
      },
    ],
  },
  insurable_risks: {
    title: "Riesgos Asegurables",
    description:
      "Estos riesgos varían según el tipo de actividad y las condiciones específicas de la región, pero algunos ejemplos comunes de riesgos asegurables en la agricultura y la ganadería incluyen:",
    items: [
      {
        title: "Daño directo",
        headline: "PARA CULTIVOS CON MODALIDAD DE RIESGO",
        list: [
          "Incendio",
          "Granizo",
          "Helada",
          "Inundación",
          "Huracán, Vientos Fuertes",
          "Falta de piso",
        ],
      },
      {
        title: "Rendimiento a la inversión",
        headline: "PARA CULTIVOS CON MODALIDAD DE TEMPORAL",
        list: [
          "Sequía",
          "Exceso de Humedad",
          "Bajas Temperaturas",
          "Onda Cálida",
          "Plagas y Depredadores",
          "Enfermedades",
          "Con una o más de Daño Directo",
        ],
      },
    ],
  },
  executivesContact: [
    {
      name: "Luis Horacio Moreno",
      job: "Gerente de P&C y Riesgos",
      email: "hmoreno@ancora.com.mx",
      number: "+52 (55) 4890 5013",
    },
  ],
};

export default es;
