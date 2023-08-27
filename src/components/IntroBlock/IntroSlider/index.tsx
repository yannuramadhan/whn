import React from 'react';
import ImageSlider from './imageslider';

import image1 from '../../../assets/images/slider/visi.jpg';
import image2 from '../../../assets/images/slider/produk1.jpg';
import image3 from '../../../assets/images/slider/produk2.jpg';
import image4 from '../../../assets/images/slider/artikel1.jpg';
import image5 from '../../../assets/images/slider/artikel2.jpg';

const Intro = () => {
  const vision = { imageUrl: image1, imageLink: "/visionmission" };
  const produk = [
    { imageUrl: image2, imageLink: "/productlist" },
    { imageUrl: image3, imageLink: "/productlist" },
  ];

  const artikel = [
    { imageUrl: image4, imageLink: "/articlelist" },
    { imageUrl: image5, imageLink: "/articlelist" },
  ];
  
  const randomProdukIndex = Math.floor(Math.random() * produk.length);
  let randomProduk = produk[randomProdukIndex];

  const randomArtikelIndex = Math.floor(Math.random() * artikel.length);
  let randomArtikel = artikel[randomArtikelIndex];

  return (
    
    <ImageSlider images={[vision, randomProduk, randomArtikel]}>
      {/* Jika Anda ingin menampilkan konten tambahan di bawah slider */}
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <h1>Slider</h1>
        <p></p>
      </div> */}
    </ImageSlider>
  );
};



export default Intro;
