import campoImg from "../../../../assets/img/shared/campo.png";
import campoInversionImg from "../../../../assets/img/shared/inversion-campo.png";

const es = {
  title: "Agricultural and Livestock",
  short_description:
    "We provide protection against unpredictable climate and its impacts on crop and animal production.",
  description:
    "The goal is to guarantee investments in Agriculture and Livestock, providing tools to prevent the producer's loss of capital in the event of a claim.",
  insurance_types: {
    title: "Types of Insurances",
    items: [
      {
        title: "Direct Damage",
        headline: "FOR CROPS RELYING ON IRRIGATION",
        image: campoImg.src,
        description: `
      <div
        class="flex flex-col gap-4 [&>span>strong]:uppercase text-sm text-anc-text"
      >
        <span>
          <strong>COVERS:</strong> Direct and indirect investment costs to the crop.
        </span>
        <span>
          <strong>INCLUDES:</strong> The technological package for the Crop Production Cycle.
        </span>
        <span>
          <strong>DAMAGE ASSESSMENT:</strong>
          <ul class="list-disc list-outside ml-3">
            <li>Progress of the investment at the time of the incident.</li>
            <li>
            Compensation before harvest or cutting if the damage exceeds the agreed deductible.
            </li>
          </ul>
        </span>
      </div>
      `,
      },
      {
        title: "Return on Investment",
        headline: "FOR SEASONAL CROPS",
        image: campoInversionImg.src,
        description: `
      <div
        class="flex flex-col gap-4 [&>span>strong]:uppercase text-sm text-anc-text"
      >
      <span>
        <strong>COVERS:</strong> Average rural yield.
      </span>
      <span>
        <strong>INCLUDES:</strong>
        <ul class="list-disc list-outside ml-3">
          <li>Historical yields of the area</li>
          <li>Price per ton or kilograms of production.</li>
        </ul>
      </span>
      <span>
        <strong>DAMAGE ASSESSMENT:</strong> Compensation is provided if the guaranteed production is less than what is obtained at the time of cutting or in estimates prior to the harvest if the damage exceeds the agreed deductible.
      </span>
    </div>
      `,
      },
    ],
  },
  insurable_risks: {
    title: "Insured Risks",
    description:
      "These risks vary depending on the type of activity and the specific conditions of the region, but some common examples of insurable risks in agriculture and livestock include:",
    items: [
      {
        title: "Direct Damage",
        headline: "FOR CROPS RELYING ON IRRIGATION",
        list: [
          "Fire",
          "Hail",
          "Frost",
          "Floods",
          "Hurricanes",
          "Strong Winds",
          "Ground Collapse"
        ],
      },
      {
        title: "Return on Investment",
        headline: "FOR SEASONAL CROPS",
        list: [
          "Drought",
          "Excessive Humidity",
          "Low Temperatures",
          "Heatwaves",
          "Pests and Plagues",
          "Diseases",
        ],
      },
    ],
  },
  executivesContact: [
    {
      name: "Luis Horacio Moreno",
      job: "Property & Casualty Manager",
      email: "hmoreno@ancora.com.mx",
      number: "+52 (55) 4890 5013",
    },
  ],
};

export default es;
