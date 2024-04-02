import dentistaImg from '../../../../assets/img/shared/dentista.png';
import familyImg from '../../../../assets/img/shared/family.png';
import medicoImg from '../../../../assets/img/shared/medico.png';
import peopleHappyImg from '../../../../assets/img/shared/people-happy.png';
import viajeImg from '../../../../assets/img/shared/viaje.png';

const en = {
  title:  "Individual Insurance",
  short_description: "We take care of what matters most: life, health, and your own or your loved ones’ assets.",
  description: `
    At <strong>ANCORA</strong>, we have a team of specialists dedicated 100% to serving all our individual clients. For us, each person is unique and requires individual attention. So don’t hesitate to reach out to us: we will help you find the best solution to your specific needs
    <br /><br />
    We take care of your life, health, and assets, so you can focus on living and enjoying time with your family and loved ones, knowing that ANCORA has your back and protects you. Our team of professionals will assist and advise you on the various products available in the market:
  `,
  products: [
    {
      title: "Life Insurance",
      image: peopleHappyImg.src,

      description: `
      <ul class="list-disc ml-5 text-anc-text">
        <li>Ordinary Life Insurance</li>
        <li>Endowment</li>
        <li>Savings</li>
        <li>Retirement</li>
        <li>Education</li>
        <li>Investment</li>
      </ul>
      `
    },
    {
      title: "Major Medical Expenses",
      image: medicoImg.src,
      description: `
        <p>
          Protect your assets and those of your family from unforeseen events that may affect your health. Whether from accident or illness, your major medical expenses insurance will safeguard your finances and cover the costs associated with hospitalisation, medical fees, medications, therapies, and other expenses related to given health conditions.
          <br /><br />
          We offer products with national and international coverage, as well as access to different levels of hospitals, medical fees, and more. Get in touch with us, and we will help you find the plan that best suits your needs.
        </p>
      `
    },
    {
      title: "Dental and Vision",
      image: dentistaImg.src,
      description: `
        <p>
          We have partnerships with the best dental and vision insurance companies.
          <br /><br />
          You may have access to a network of over 3,000 dental and vision professionals to address all your dental and vision needs.
        </p>
      `
    },
    {
      title: "Home and Car",
      image: familyImg.src,
      description: `
        <p>
          We also take care of your assets, so we offer excellent products to protect your car and home. <strong>ANCORA</strong> has access to the main local car insurance markets, so you will find with us and—at the best price—the most attractive coverage for your needs.
          <br /><br />
          Whether you own or rent the property where you live, we have the best coverage to give you peace of mind, knowing that your assets are protected against potential incidents.
        </p>
      `
    },
    {
      title: "Travel",
      image: viajeImg.src,
      description: `
        <p>
          Travel and explore any country in the world knowing that you are protected and backed by <strong>ANCORA</strong>. We have partnerships with international providers and insurers who guarantee compliance with the requirements that various embassies and tourism ministries impose on foreign visitors to their countries. Whether it is a leisure or business trip, whether you are staying for a day or a year, we have the best options to protect you whilst traveling.
        </p>
      `
    }
  ],
  executivesContact: [
    {
      name: "Contact Centre",
      job: "Customer Service",
      email: "contacto@ancora.com.mx",
      number: "+52 (55) 5523 1100",
      icon: "phone",
    },
    {
      name: "Fernando Vargas",
      job: "Special Accounts Manager",
      email: "fvargas@ancora.com.mx",
      number: "+52 (55) 6111 6895",
    },
  ],
}

export default en;