import clasicoImg from "../../../../assets/img/products/cars-thumbnails/clasico.png";
import camiones from "../../../../assets/img/products/cars-thumbnails/camiones.png";
import cashFlow from "../../../../assets/img/products/cars-thumbnails/cash-flow.png";
import autoMotocicleta from "../../../../assets/img/products/cars-thumbnails/auto-y-motocicleta.png";
import contratista from "../../../../assets/img/products/cars-thumbnails/contratista.png";
import empleados from "../../../../assets/img/products/cars-thumbnails/empleados.png";
import flotilla from "../../../../assets/img/products/cars-thumbnails/flotilla.png";
import motocicleta from "../../../../assets/img/products/cars-thumbnails/motocicleta.png";
import nomina from "../../../../assets/img/products/cars-thumbnails/nomina.png";
import utilitarios from "../../../../assets/img/products/cars-thumbnails/utilitarios.png";

const es = {
  title: "Cars and Heavy Equipment",
  short_description:
    "We manage fleets of cars, motorcycles, trucks, semi-trucks, and heavy equipment, with a complete technological infrastructure for policy management and specialized attention for claims.",
  value_proposal: {
    title: "ANCORA’s Value Proposition",
    description: `
    We have strategic alliances that allow us to offer advice on cautious driving and process evaluation, seeking responsible behavior of drivers and the reduction of road accidents.
    <br /><br />
    We have extensive experience in creating specialized programs for all types of fleets and sectors, from private use, utility, courier, delivery, On-demand applications, among others.
    <br /><br />
    We operate traditional insurance schemes in all their coverages, having the ability to propose actuarial studies on loss management, Cash Flow operations, and self-insurance, among other non-traditional schemes.
    
    `,
  },
  products: {
    title: "Our Products",
    items: [
      {
        name: "Collectible Cars and Cars of high value",
        image: clasicoImg.src,
      },
      {
        name: "Car Fleets",
        image: utilitarios.src,
      },
      {
        name: "Trucks and Tractors",
        image: camiones.src,
      },
      {
        name: "Motorcycles",
        image: motocicleta.src,
      },
      {
        name: "Fleets & Employees (Sales Force)",
        image: flotilla.src,
      },
      {
        name: "Payroll Deduction",
        image: nomina.src,
      },
      {
        name: "Contract Equipment",
        image: contratista.src,
      },
      {
        name: "Fleets & Employees (Personal Use)",
        image: empleados.src,
      },
      {
        name: "Car Insurance and cash flow management",
        image: cashFlow.src,
      },
      {
        name: "Cars and Motorcycles for personal use",
        image: autoMotocicleta.src,
      },
    ],
  },
  executivesContact: [
    {
      name: "Ivonne Luján",
      job: "Chief Benefits Underwriter",
      email: "Chief Benefits Underwriter",
      number: "+52 (55) 8077 3151",
    },
    {
      name: "Fanny Lumbreras",
      job: "Automobile Unit Manager",
      email: "flumbreras@ancora.com.mx",
      number: "+52 (55) 8548 7332",
    },
  ],
};

export default es;
