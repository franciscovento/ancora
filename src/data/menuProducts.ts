export interface Product { name: {es: string, en:string}; link: string; }
import routes from '../../routes'

const products: Product[] = [
  { name: {
    es: "Affinity",
    en: "Affinity"
  }, link: routes.productos.affinity },
  { name: {
    es: "Agrícola y Ganadero",
    en: "Agriculture and Livestock"
  }, link: routes.productos.agricola_y_ganadero },
  { name: {
    es: "Autos y Equipos Pesados",
    en: "Cars and Heavy Equipment"
  }, link: routes.productos.autos_y_equipos_pesados },
  { name: {
    es: "Aviación y Espacio",
    en: "Aviation and Space"
  }, link: routes.productos.aviacion_y_espacio },
  { name: {
    es: "Beneficios Empleados",
    en: "Employee Benefits"
  }, link: routes.productos.beneficios_empleados },
  { name: {
    es: "Cyber",
    en: "Cyber"
  }, link: "/productos/cyber" },
  { name: {
    es: "Energy y R. Naturales",
    en: "Energy and Natural Resources"
  }, link: routes.productos.energia_y_recursos_naturales },
  { name: {
    es: "Fianzas y Garantías",
    en: 'Surety'
  }, link: routes.productos.fianzas_y_garantias },
  { name: {
    es: "Líneas Financieras",
    en: "Financial Lines"
  }, link: routes.productos.lineas_financieras},
  { name: {
    es: "Obra Civil y Montaje",
    en: "Civil Works and Installation"
  }, link: routes.productos.obra_civil_y_montaje },
  { name: {
    es: "Marine & Carga",
    en: "Marine & Cargo"
  }, link: routes.productos.marine_y_carga },
  { name: {
    es: "Programas Multinacionales",
    en: 'Multinational Programs'
  }, link: routes.productos.programas_multinacionales },
  { name: {
    es: "Property & Casualty",
    en: "Property & Casualty"
  }, link: routes.productos.property_and_casualty },
  { name: {
    es: "Seguro de Crédito",
    en: "Credit Insurance"
  }, link: routes.productos.seguro_de_credito },
  { name: {
    es:  "Seguros Individuales",
    en: "Individual Insurance"
  }, link: routes.productos.seguros_individuales },
];

export default products;
