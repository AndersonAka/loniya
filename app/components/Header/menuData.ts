const menuData = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    subMenu: [
      {
        title: "Audit de conformité",
        path: "/services/audit-conformite",
      },
      {
        title: "Bilan de sécurité",
        path: "/services/bilan-securite",
      },
      {
        title: "Accompagnement de projet",
        path: "/services/accompagnement",
      },
      {
        title: "Sensibilisation en sécurité TI",
        path: "/services/sensibilisation",
      },
      {
        title: "Formation en sécurité TI",
        path: "/services/formation",
      },
    ],
  },
  {
    id: 3,
    title: "À propos",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
