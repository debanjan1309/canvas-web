import React from 'react'

import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import Subtitle from '../shared/subtitle';

import { Col, Container, Row } from 'reactstrap'



const Gallery = () => {
  

   return (
      <>
      <section className='fifth'>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery_title'>Our Pride Our Work</h2>
            </Col>

            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      </>
   )
}

export default Gallery; 