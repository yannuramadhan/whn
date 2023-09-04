const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/visionmission"],
    exact: true,
    component: "VisionMission",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
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
    path: ["/dashboard/articles"],
    exact: true,
    component: "Articles",
  },
  {
    path: ["/dashboard/products"],
    exact: true,
    component: "Products",
  },
  {
    path: ["/dashboard/users"],
    exact: true,
    component: "Users",
  },
  {
    path: ["/productlist"],
    exact: true,
    component: "ProductList",
  },
  {
    path: ["/productdetail/:id"],
    exact: true,
    component: "ProductDetail",
  },
  {
    path: ["/articlelist"],
    exact: true,
    component: "ArticleList",
  },
  {
    path: ["/articledetail/:id"],
    exact: true,
    component: "ArticleDetail",
  },
];

export default routes;
