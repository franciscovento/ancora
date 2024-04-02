import consultoriaRiesgosImg from "../../../../assets/img/services/consultoria-de-riesgos.png";
import gestionReclamacionesImg from "../../../../assets/img/services/gestion-de-reclamaciones.png";
import prevencionSaludImg from "../../../../assets/img/services/prevencion-salud-wellness.png";
import serviciosIngenieriaImg from "../../../../assets/img/services/servicios-de-ingenieria.png";

const es = {
  title: "Services",
  description:
    "We provide a clear and transparent view for you to choose what best suits your needs.",
  services: [
    {
      title: "Risk Consulting",
      url: "/servicios/consultoria-de-riesgos",
      image: consultoriaRiesgosImg.src,
    },
    {
      title: "Claims Management",
      url: "/servicios/gestion-de-reclamaciones",
      image: gestionReclamacionesImg.src,
    },
    {
      title: "Health Prevention & Wellness",
      url: "/servicios/prevencion-de-salud-y-wellness",
      image: prevencionSaludImg.src,
    },
    {
      title: "Engineering Services",
      url: "/servicios/servicios-de-ingenieria",
      image: serviciosIngenieriaImg.src,
    },
  ],
};

export default es;
