import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageSlider from './imageslider';
import image1 from '../../../assets/images/slider/visi.jpg';

interface Product {
  id: string;
  foto: any;
  // tambahkan properti lain sesuai kebutuhan
}

interface Article {
  id: string;
  foto: any;
  // tambahkan properti lain sesuai kebutuhan
}

const Intro = () => {
  const [randomProduct, setRandomProduct] = useState('');
  const [randomArtikel, setRandomArtikel] = useState('');
  const vision = {"imageUrl":image1,"imageLink":"/visionmission"};

  useEffect(() => {
    // Ambil gambar produk
    axios.get('https://api.whnmandiri.co.id/products')
      .then(response => {
        const produkImages = response.data.map((product:Product) => ({
          imageUrl: `https://api.whnmandiri.co.id/${product.foto}`,
          imageLink: `/productdetail/${product.id}`,
        }));
        const randomProdukIndex = Math.floor(Math.random() * produkImages.length);
        setRandomProduct(JSON.stringify(produkImages[randomProdukIndex]));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.get('https://api.whnmandiri.co.id/articles')
      .then(response => {
        const artikelImages = response.data.map((article:Article) => ({
          imageUrl: `https://api.whnmandiri.co.id/${article.foto}`,
          imageLink: `/articledetail/${article.id}`,
        }));
        const randomArtikelIndex = Math.floor(Math.random() * artikelImages.length);
        setRandomArtikel(JSON.stringify(artikelImages[randomArtikelIndex]));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // ... Ambil gambar artikel ...

  }, []);

  return (
    
    <ImageSlider images={[vision, randomProduct && JSON.parse(randomProduct), randomArtikel && JSON.parse(randomArtikel)]}>
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
