import React, { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ArtikelDetailBlock = lazy(() => import("../../components/ArtikelDetailBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface Artikel {
  id: string;
  judul: string;
  deskripsi: string;
  foto: string;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [artikel, setArtikel] = useState<Artikel>({
  id: "",
  judul: "",
  deskripsi: "",
  foto: ""
});

  useEffect(() => {
    // Fetch the article data based on the provided ID
    fetch(`https://api.whnmandiri.co.id/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        setArtikel(data);
      })
      .catch(error => console.error('Error fetching article data:', error));
  }, [id]);

  return (
    <>
      <IntroBlock id="intro" />
      <Header />
      <Container>
        <ScrollToTop />
        <ArtikelDetailBlock
          title={artikel.judul}
          content={artikel.deskripsi}
          id={artikel.id}
          foto={artikel.foto}
        />
      </Container>
      <Footer />
    </>
  );
};

export default ArticleDetail;
