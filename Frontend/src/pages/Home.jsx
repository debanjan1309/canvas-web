import React from 'react';
import '../style/Home.css';
import { Container, Row, Col } from 'reactstrap';
import galleryImages from '../Image-gallery/galleryImage';
import Subtitle from './../shared/subtitle';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';

const Home = () => {
  const initialDisplayCount = 12;
  return (
    <section>
      <section className='first'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Want to Explore Beauty?'} />
                </div>
                <h2> Welcome to the number one home painting and Interior Designing company in Kolkata,
                  Your very own </h2>
                <h1>
                  <span>CANVAS</span>
                </h1>

              </div>
            </Col>

            <Col lg='2'>
              <div className='hero_img-box mt-2'>
                <img src="https://st.hzcdn.com/simgs/pictures/living-rooms/interior-design-contemporary-comfort-dkor-interiors-inc-interior-designers-miami-fl-img~64915284033b188f_14-4894-1-abadee4.jpg" alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-4'>
                <img src="https://i.pinimg.com/originals/d1/c7/1d/d1c71d363d9e8a2fbf1713287a23f255.jpg" alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-5'>
                <img src="https://th.bing.com/th/id/OIP.hP2oKJSpMTFWjQlZnhMiVgHaGK?rs=1&pid=ImgDetMain" alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='third'>
        <section className="contact-section">
          <div className="contact-section-content">
            <h2>Contact us now, and get a confirm call from our executive within 24 hrs. Let's plan your dream house together.</h2>
            <a href="/contact-us" className="contact-button">Contact Us</a>
          </div>
        </section>
      </section>

      <section className='second'>
        <Container>
          <Row>
            <Col lg='4'>
              <div className='card'>
                <img
                  src='https://th.bing.com/th/id/R.be42bac0372e9455e80382703a1de6d4?rik=ZFZxt9t8gCS%2fQw&riu=http%3a%2f%2fwww.krupainterio.com%2fwp-content%2fuploads%2f2019%2f06%2fFalse-Ceiling-designing-in-Changanacherry.jpg&ehk=PnJ0ZtDFVlh8PCzY0mFGumoT5DKxtYmS%2f7OByBlELNE%3d&risl=&pid=ImgRaw&r=0'
                  className='card-img-top'
                  alt='Card Image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>False Ceiling</h5>
                  <p className='card-text'>
                    Explore our stunning false ceiling designs that elevate
                    your home interiors.
                  </p>
                  <div className="inquiry-buttons">
                    <a href="/contact-us" className="inquiry-button">Inquire Now</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <div className='card'>
                <img
                  src='https://www.thespruce.com/thmb/ZhC6e2qA-JJFOR18vZCL9BNzMVo=/3456x2304/filters:fill(auto,1)/172156932-56a49f303df78cf772834e5a.jpg'
                  className='card-img-top'
                  alt='Card Image'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Home Painting</h5>
                  <p className='card-text'>
                    Transform your living space with our professional home
                    painting services.
                  </p>
                  <div className="inquiry-buttons">
                    <a href="/contact-us" className="inquiry-button">Inquire Now</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='fifth'>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery_title'>Our Pride Our Work</h2>
            </Col>

            <Col lg='12'>
            <MasonryImagesGallery images={galleryImages} initialDisplayCount={initialDisplayCount} />
              <a href="/gallery" className="view-all-button">View All</a>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Home;
