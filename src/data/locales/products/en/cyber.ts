import hackerImg from "../../../../assets/img/shared/hacker.png";
const es = {
  title: "Cyber Security",
  short_description:
    "We protect your business in the digital age. Given the growing threat of cyberattacks, we ensure the security of your data and the continuity of your operations.",
  coverage: {
    title: "Coverage",
    description: `
    We cover various risks associated with data protection and the legislation that regulates its handling, as well as vulnerabilities that a digital system may have and the associated expenses.
    <br /><br />
    Likewise, coverage extensions are available to cover the costs resulting from cyber extortions (ransomware), denial of service attacks, and the loss of profits associated with the time during which the intrusion prevented the company from operating.
    <br /><br />
    Our network of partners enables us to offer specialized technical advice in cybersecurity, regulatory compliance, business continuity plans, and cybersecurity risk control and mitigation schemes.
    `,
  },
  products: [
    {
      title: "Civil Liability and Damages",
      image: hackerImg.src,
      description:
        "The insurance covers liability arising from the leak of sensitive third-party information and the insured's own damages resulting from an information breach event, with specific coverages including:",
      list: [
        "Database reconstruction",
        "Extortion",
        "Monitoring costs",
        "Forensic investigation",
        "Fines and penalties imposed by authorities due to third-party information leak",
        "Reputation management and recovery expenses",
        "Damages caused by the publication of content on the website and social media.",
        "Payment Card Industry Data Security Standard (PCI DSS) compliance.",
      ],
    },
  ],
  executivesContact: [
    {
      name: "Liliana Calvo",
      job: "Head of Financial Lines",
      email: "lcalvo@ancora.com.mx",
      number: "+52 (55) 7995 3960",
    },
    {
      name: "Edwin Ruiz",
      job: "Ejecutivo de FinPro y P&C",
      email: "eruiz@ancora.com.mx",
      number: "+52 (55) 3662 9700",
    },
  ],
};

export default es;
