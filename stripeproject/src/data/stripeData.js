import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const products = {
  links: [
    {
      pageHeader: "products",
      label: "payment",
      icon: <FaCreditCard />,
      url: "/products",
    },
    {
      pageHeader: "products",
      label: "terminal",
      icon: <FaCreditCard />,
      url: "/products",
    },
    {
      pageHeader: "products",
      label: "connect",
      icon: <FaCreditCard />,
      url: "/products",
    },
  ],
};
const developers = {
  links: [
    {
      pageHeader: "developers",
      label: "plugins",
      icon: <FaBook />,
      url: "/products",
    },
    {
      pageHeader: "developers",
      label: "libraries",
      icon: <FaBook />,
      url: "/products",
    },
    {
      pageHeader: "developers",
      label: "help",
      icon: <FaBook />,
      url: "/products",
    },
    {
      pageHeader: "developers",
      label: "billing",
      icon: <FaBook />,
      url: "/products",
    },
  ],
};
const company = {
  links: [
    {
      pageHeader: "company",
      label: "about",
      icon: <FaBriefcase />,
      url: "/products",
    },
    {
      pageHeader: "company",
      label: "customers",
      icon: <FaBriefcase />,
      url: "/products",
    },
  ],
};
const sublinks = [products, developers, company];

export default sublinks;
export { products, developers, company };
