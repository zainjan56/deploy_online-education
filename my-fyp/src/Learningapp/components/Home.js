import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { GiSkills } from 'react-icons/gi';
import { GiSpellBook } from 'react-icons/gi';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import picture from "./images/carousel1.png";
import pictureTwo from "./images/carousel2.svg";
import pictureThree from "./images/carousel3.jpg";
import homeIcon from "./images/learning2.png";
import Header from './Header';
import Footer from "./Footer";

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
        <div className='col-sm-3 missionCol'>
          <div className='mission'>
            <div className='missionOnline'><i><FaLaptop size={30} color='green'/></i>
            <h6>Free Of Cost Courses</h6>
            <p>Our all courses are available free of cost and anyone can enroll themselves and to polish their skills.</p>
            </div>
          </div>
        </div>
        <div className='col-sm-3 missionCol'>
        <div className='mission'>
        <div className='missionOnline'><i><GiWorld size={30} color='green'/></i>
            <h6>Worldwide Accessible</h6>
            <p>Anyone from any part of the world can access all our courses.</p>
            </div>
        </div>
        </div>
        <div className='col-sm-3 missionCol'>
        <div className='mission'>
        <div className='missionOnline'><i><GiSkills size={30} color='green'/></i>
            <h6>Skills Assessment</h6>
            <p>Anyone can take quizzes in different courses to assess and improve their skills on our Online Education Platform.</p>
            </div>
        </div>
        </div>
        <div className='col-sm-3 missionCol'>
        <div className='mission'>
        <div className='missionOnline'><i><GiSpellBook size={30} color='green'/></i>
            <h6>Exams</h6>
            <p>By completing different courses, students will be able to pass different job exams and interviews.</p>
            </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home
