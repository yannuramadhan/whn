const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/dashboard"],
    exact: true,
    component: "Dashboard",
  },
  {
    path: ["/login"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/dashboard/artikel"],
    exact: true,
    component: "Artikel",
  },
  {
    path: ["/dashboard/product"],
    exact: true,
    component: "Product",
  },
  {
    path: ["/productlist"],
    exact: true,
    component: "ProductList",
  },
  {
    path: ["/artikellist"],
    exact: true,
    component: "ArtikelList",
  },
];

export default routes;
