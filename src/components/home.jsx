import "./home.css";
import pp from "../assets/pp.jpg";
import logo_linkedin from "../assets/linkedin-logo.svg";
import logo_github from "../assets/github-logo.svg";
import logo_mail from "../assets/mail-logo.svg";
import ciention from '../assets/certificados/ciention.jpg';
import datasciencemintic from '../assets/certificados/datasciencemintic.jpg';
import googledataanalytics from '../assets/certificados/googledataanalytics.jpg';
import huawei from '../assets/certificados/huawei.jpg';
import iasolutions from '../assets/certificados/iasolutions.jpg';
import incko from '../assets/certificados/incko.jpg';
import innovador from '../assets/certificados/innovador.jpg';
import joveninvestigador from '../assets/certificados/joveninvestigador.jpg';
import processimprovement from '../assets/certificados/processimprovement.jpg';
import worksantoto from '../assets/certificados/worksantoto.jpg';
import Carousel from "./carousel.jsx";
import circulo from "../assets/Ellipse 2.svg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const images = [
  ciention,
  datasciencemintic,
  googledataanalytics,
  huawei,
  iasolutions,
  incko,
  innovador,
  joveninvestigador,
  processimprovement,
  worksantoto,
];

export default function Home() {

  return (
    <>
    <main className="home">
      <motion.section className="hero"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        transition={{ duration: 0.5 }}>
        <div className="hero-left">
          <motion.img
            src={pp}
            alt="Eduardo Duarte"
            className="profile-img"
            layoutId="pp" transition={{ duration: 0.6, ease: "easeInOut" }} 
            exit={{ opacity: 0}}
            initial={false}
          />
        </div>
        <div className="hero-right">
          <h1>Hi, I'm <span>Eduardo Duarte</span></h1>
          <p className="role">Machine Learning Engineer | RF Systems | Data Science</p>
          <p className="bio">
            Mechatronics Engineer specialized in building intelligent systems that bridge hardware and software. 
            Currently focused on <strong>distributed drone detection</strong> using RF signal processing and machine learning. 
            Experienced in end-to-end development: from data acquisition and signal processing to backend APIs and real-time visualization.
          </p>
          <p>Here you'll find my CV and some projects I've worked on.</p>
          <div className="cta">
            <Link to="/cv" className="btn primary">View CV</Link>
            <Link to="/projects" className="btn secondary" viewTransition>Projects</Link>
          </div>

          <div className="social">
            <a href="mailto:eduardo.jose881@gmail.com?subject=Contact">
                <img 
                src={logo_mail} 
                className="logo_mail" 
                alt="Email" />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-duarte-penna/">
                <img 
                src={logo_linkedin} 
                className="logo_linkedin"
                alt="LinkedIn" />
            </a>
            <a href="https://github.com/EDuarP">
                <img 
                src={logo_github} 
                className="logo_red"
                alt="GitHub" />
            </a>
          </div>
        </div>
      </motion.section>
      <motion.img src={circulo} alt="circulo" className="circulo"  layoutId="circulo1" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}} />

      <motion.img src={circulo} alt="circulo2" className="circulo2" layoutId="circulo2" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo3" className="circulo3" 
      layoutId="circulo3" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo4" className="circulo4" 
      layoutId="circulo4" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>
    </main>
    
    <div className="w-full max-w-7xl mx-auto px-4 py-8 certificates-section">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 certificados">Certificates ↓</h1>
      <div className="mb-8">
        <Carousel images={images} />
      </div>
    </div>
    </>
  );
}