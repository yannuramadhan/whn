import { lazy } from "react";

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ArtikelBlock = lazy(() => import("../../components/Backend/ArtikelBlock"));

const Artikel = () => {
  return (
    <>
        <ArtikelBlock />
        <Navbar />
   </> 
  );
};

export default Artikel;
