import riesgosImg from "../../../../assets/img/services/thumbnails/riesgos.png";
import inspeccionImg from "../../../../assets/img/services/thumbnails/inspeccion.png";
import planesAccion from "../../../../assets/img/services/thumbnails/planes-accion.png";
import calificacionImg from "../../../../assets/img/services/thumbnails/calificacion.png";
import avaluosImg from "../../../../assets/img/services/thumbnails/avaluos.png";
import capacitacionYTalleres from "../../../../assets/img/services/thumbnails/capacitacion-y-talleres.png";

const es = {
  title: "Servicios de Ingeniería",
  description:
    "Confía en nosotros para guiarte hacia decisiones informadas y estrategias de servicios de ingeniería",
  services: {
    title: "Tipos de Servicios",
    items: [
      {
        name: "Análisis de Riesgos",
        image: riesgosImg.src,
        description: `<p>Realizamos análisis de riesgos y entrega de informes, los cuales se ajustan a los requerimientos del cliente, incluyendo, entre otras cosas, la siguiente información: </p> <br /> 
        <ul class="text-anc-text list-disc ml-5 text-sm">
          <li>Resumen Ejecutivo</li>
          <li>Descripción de la Empresa</li>
          <li>Análisis de Riesgo</li>
          <li>Pérdidas Máximas</li>
          <li>Recomendaciones para mejora del Riesgo.</li>
        </ul>
        `,
      },
      {
        name: "Visitas de Inspección",
        image: inspeccionImg.src,
        description: `
        <p>Realizamos visitas de inspección de riesgos en solitario o en conjunto con las aseguradoras,
        entregando reportes de resultados, estudios termográficos con drones, cámaras termográficas y
        termógrafos certificados NIVEL 1.</p>
        <p>Estas inspecciones con el área de ingeniería se pueden extender al seguro de transportes de carga,
        además de que apoyamos en proveer el monitoreo continuo punto a punto, evaluación de rutas y
        evaluación de empresas transportistas subcontratadas.</p>
        `,
      },
      {
        name: "Planes de Acción y Recomendaciones",
        image: planesAccion.src,
        description: `
        <div class="flex flex-col gap-4">
          <p>
          Teniendo en cuenta los resultados del análisis realizado, se establece el plan de acción. Este plan
          de mejoramiento busca que el cliente logre alcanzar niveles óptimos de riesgo, estableciendo
          mejores prácticas y estandarización de las operaciones.
          <b>ANCORA</b> pone a su disposición un esquema de recomendaciones las cuales están enfocadas en
          períodos diferentes de ejecución:
          </p>
          <ul class="text-anc-text text-sm list-disc ml-5">
            <li>TIPO A: menor a 45 días. </li>
            <li>TIPO B: entre 46 y 90 días.</li>
            <li>TIPO C: entre 91 y 180 días.</li>
          </ul>
          <p>
          Todos los planes de acción se implementan en la medida que se vayan superando las diferentes
          etapas de ejecución, ya que el propósito final es alcanzar niveles bajos de exposición siempre y
          cuando vayan asociados en proteger los bienes e intereses de nuestro cliente.
          </p>
        </div>
        `,
      },
      {
        name: "Calificación",
        image: calificacionImg.src,
        description: `
        <p>
        <b>ANCORA</b> pone a su disposición su metodología de calificación, la cual ha sido avalada por varias
        aseguradoras en Latinoamérica. Con la metodología de calificación incorporada, <b>ANCORA</b> realiza la
        comparación entre riesgos de giros similares, comparando sus niveles de protección y exposición,
        con esto, se puede catalogar a los asegurados con mejores estándares.
        <br /> <br />
        Este método se compone con una medición cuantitativa segmentada en 10 grandes rubros
        integrados por 60 variables lo cual permite que un suscriptor tenga mejores herramientas para
        tomar decisiones al momento de tomar un riesgo o establecer condiciones en sus propuestas de
        cotización.
        </p>
        `,
      },
      {
        name: "Avalúos",
        image: avaluosImg.src,
        description: `
          <p> 
          Apoyamos en la generación de avalúos para determinar sumas aseguradas y valores de reposición nuevos de los activos a asegurar.
          </p>
        `,
      },
      {
        name: "Capacitación y Talleres",
        image: capacitacionYTalleres.src,
        description: `
          <p>
          A través del entrenamiento, se logra la sensibilización a todo tipo de personal frente a los riesgos
          involucrados en su actividad. Lo anterior, con el propósito que puedan controlar los riesgos y
          minimizar las pérdidas, desde cada actividad que realiza cada funcionario que asiste a cada charla.
          <br /> <br />
          Las sesiones se realizan de forma presencial o virtual.
          </p>
        `,
      },
    ],
  },
};

export default es;
