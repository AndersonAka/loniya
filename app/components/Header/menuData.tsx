import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "A propos",
    path: "/#features",
    newTab: false,
  },
  ,
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 42,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 42,
        title: "FAQ Page",
        path: "/faq",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Grid 2 Page",
        path: "/blogs-2",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/auth/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/auth/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Mail Success Page",
        path: "/mail-success",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/docs",
    newTab: false,
  }
];
export default menuData;
