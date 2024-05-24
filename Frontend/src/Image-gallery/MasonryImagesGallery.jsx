// Inside MasonryImagesGallery.jsx

import React from 'react';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImage';
import './MasonryImagesGallery.css';

const MasonryImagesGallery = ({ initialDisplayCount }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 992: 3, 994: 4 }} >
      {galleryImages.slice(0, initialDisplayCount).map((item, index) => (
        <div key={index} className='masonryImage'>
          <img className='masonry_img' src={item} alt="" />
        </div>
      ))}
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
