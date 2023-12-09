import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import picture from "./images/carousel1.png";
import pictureTwo from "./images/carousel2.svg";
import pictureThree from "./images/carousel3.jpg";
import homeIcon from "./images/learning2.png";
import Header from './Header';
import Footer from "./Footer";
import courseOne from '../components/images/course1.jpg'
import courseTwo from '../components/images/course2.jpg'
import courseThree from '../components/images/course3.jpg'
import courseFour from '../components/images/course4.jpg'

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const Home = () => {
 
  return (
    <div>
    <Header />
    <div className='container-fluid homePage'>
      <div className='row'>
      <div className='col-sm-4 homeCol'>
        <p className='lefthomeTitle'>Popular Online Courses</p>
        <img src={homeIcon} alt='homeicon' className='lefttitleImage'/>
        <h1 className='lefthomeMessage'>The New Way To Learn Properly In With Us!</h1>
        <Link className="nav-link" to="/register">
        <button className='getstartedBtn'>Get Started</button>
        </Link>
      </div>
      <div className='col-sm-8 homeCol'>
      <Carousel data-bs-theme="dark" className='myCarousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picture}
          alt="First slide"
          width={150}
          height={380}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pictureTwo}
          alt="Second slide"
          width={150}
          height={380}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pictureThree}
          alt="Third slide"
          width={150}
          height={380}
        />
      </Carousel.Item>
    </Carousel>
      </div>
      </div>

      <div className='row'>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4 h-200'>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={courseOne}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Free Of Cost Courses</MDBCardTitle>
            <MDBCardText>
            Our all courses are available free of cost and anyone can enroll themselves and to polish their skills.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={courseTwo}
            alt='...'
            position='top'
            className='cardFeature'
          />
          <MDBCardBody>
            <MDBCardTitle>Worldwide Accessible</MDBCardTitle>
            <MDBCardText>
            Anyone from any part of the world can access all our courses without any charges and start their learning journey.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={courseThree}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Skills Assessment</MDBCardTitle>
            <MDBCardText>
            Anyone can take quizzes in different courses to assess and improve their skills on our Online Education Platform.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src={courseFour}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Exams</MDBCardTitle>
            <MDBCardText>
            By completing different courses, students will be able to pass different job exams and interviews.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home
