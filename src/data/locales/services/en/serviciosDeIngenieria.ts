import riesgosImg from "../../../../assets/img/services/thumbnails/riesgos.png";
import inspeccionImg from "../../../../assets/img/services/thumbnails/inspeccion.png";
import planesAccion from "../../../../assets/img/services/thumbnails/planes-accion.png";
import calificacionImg from "../../../../assets/img/services/thumbnails/calificacion.png";
import avaluosImg from "../../../../assets/img/services/thumbnails/avaluos.png";
import capacitacionYTalleres from "../../../../assets/img/services/thumbnails/capacitacion-y-talleres.png";

const en = {
  title: "Engineering Services",
  description:
    "Trust us to guide you towards informed decisions and engineering service strategies",
  services: {
    title: "Types of Services",
    items: [
      {
        name: "Risk Analysis",
        image: riesgosImg.src,
        description: `<p>We conduct risk analyses and deliver reports tailored to the client’s requirements, including, among other things, the following information: </p> <br /> 
        <ul class="text-anc-text list-disc ml-5 text-sm">
          <li>Executive Summary</li>
          <li>Company Description</li>
          <li>Risk Analysis</li>
          <li>Maximum Losses</li>
          <li>Recommendations for Risk Improvement.</li>
        </ul>
        `,
      },
      {
        name: "Inspection Visits",
        image: inspeccionImg.src,
        description: `
        <p>We carry out risk inspection visits either alone or in conjunction with insurance companies, providing result reports, thermographic studies using drones, thermal cameras, and LEVEL-1 certified thermographers.</p>
        <p>These engineering inspections can extend to cargo transport insurance, and we also assist in providing continuous point-to-point monitoring, route evaluation, and assessment of subcontracted transportation companies.</p>
        `,
      },
      {
        name: "Action Plans and Recommendations",
        image: planesAccion.src,
        description: `
        <div class="flex flex-col gap-4">
          <p>
            Considering the results of the analysis conducted, an action plan is established. This improvement plan aims to help the client achieve optimal risk levels by establishing best practices and standardising operations.
            <b>ANCORA</b> offers a scheme of recommendations focused on different execution periods:
          </p>
          <ul class="text-anc-text text-sm list-disc ml-5">
            <li>TYPE A: less than 45 days.</li>
            <li>TYPE B: between 46 and 90 days.</li>
            <li>TYPE C: between 91 and 180 days.</li>
          </ul>
          <p>
            All action plans are implemented as different execution stages are overcome, as the ultimate goal is to achieve low levels of exposure as long as they are associated with protecting the assets and interests of our client.
          </p>
        </div>
        `,
      },
      {
        name: "Rating",
        image: calificacionImg.src,
        description: `
        <p>
          <b>ANCORA</b> provides its rating methodology, which has been endorsed by several insurers in Latin America. With the incorporated rating methodology, ANCORA compares risks of similar industries, comparing their levels of protection and exposure. This allows policyholders to be categorised through better standards.
          <br /> <br />
          This method consists of a quantitative measurement segmented into 10 major categories consisting of 60 variables, providing an underwriter with better tools to make decisions when taking on risk or establishing conditions in their estimate proposals.
        </p>
        `,
      },
      {
        name: "Appraisals",
        image: avaluosImg.src,
        description: `
          <p> 
            We assist in generating appraisals to determine insured sums and new replacement values of assets to be insured.
          </p>
        `,
      },
      {
        name: "Training and Workshops",
        image: capacitacionYTalleres.src,
        description: `
          <p>
            Through training, we raise awareness among all types of personnel about the risks involved in their activities. The purpose is to enable them to control risks and minimise losses from every task performed by each employee attending each session.
          <br /> <br />
            Sessions can be conducted in person or remotely.
          </p>
        `,
      },
    ],
  },
};

export default en;
