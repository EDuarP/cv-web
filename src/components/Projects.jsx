import React from "react";
import Cardproject from "./cardproject";
import morpheus1 from "../assets/proyectos/morpheus1.jpg";
import morpheus2 from "../assets/proyectos/morpheus2.jpg";
import morpheus3 from "../assets/proyectos/morpheus3.jpg";
import ciencia1 from "../assets/proyectos/ciencia1.png";
import ciencia2 from "../assets/proyectos/ciencia2.png";
import ciencia3 from "../assets/proyectos/ciencia3.png";
import rpa1 from "../assets/proyectos/RPA1.png";
import rpa2 from "../assets/proyectos/RPA2.png";
import rpa3 from "../assets/proyectos/RPAGif.gif";
import venta1 from "../assets/proyectos/venta1.jpg";
import venta2 from "../assets/proyectos/venta2.jpg";
import venta3 from "../assets/proyectos/venta3.gif";
import cerdo1 from "../assets/proyectos/cerdo1.jpg";
import cerdo2 from "../assets/proyectos/cerdo2.jpg";
import cerdo3 from "../assets/proyectos/cerdo3.jpg";
import "./Projects.css";
import Navbar from "./navbar";
import circulo from "../assets/Ellipse 2.svg";
import { motion } from "motion/react";

const imagesMorpheus = [morpheus1, morpheus2, morpheus3];
const images1 = [rpa1, rpa2, rpa3];
const images2 = [ciencia2, ciencia3, ciencia1];
const images3 = [venta1, venta2, venta3];
const images4 = [cerdo2, cerdo3, cerdo1];

export default function Projects() {
  
  return (
    <>
    <Navbar />
    <main className="projects">
        <motion.div initial={{ y: 20 }}
        animate={{ y: 0 }}
        exit={{ y: -20 }}
        transition={{ duration: 0.5 }}>
      <h1>Projects</h1>
      <div className="bg-white/20 backdrop-blur-md border-white/30 rounded-2xl shadow-lg p-10 max-w-6xl mx-auto">
      
      <Cardproject 
        Title={"MORPHEUS - Distributed Drone Detection System"} 
        Description={"Real-time drone detection and triangulation system using RF signals. The project implements a distributed architecture with multiple nodes (Raspberry Pi + SDR) for signal acquisition, ML-based classification on spectrograms, DOA estimation with MVDR beamforming, and geographic triangulation. Features a FastAPI backend, React frontend, and MQTT for node coordination. Currently deployed and operational."} 
        Tools={"Python, PyTorch, FastAPI, React, MQTT, bladeRF, Raspberry Pi, Azure ML"} 
        Images={imagesMorpheus}> 
      </Cardproject>

      <Cardproject 
        Title={"Pig Weighing Management System"} 
        Description={"Integral management system for pig processing plants. Automatically records weight at different stages, stores data in a centralized database, and generates PDF reports. Includes WhatsApp API notifications and BarTender integration for printing identification bracelets. Improves efficiency and enables strategic decision-making."} 
        Tools={"Python, Tkinter Designer, Pandas, CSV, Raspberry Pi 4, Figma, WhatsApp API, SMB"} 
        Images={images4}> 
      </Cardproject>

      <Cardproject 
        Title={"Sales Management SPA with Commissions"} 
        Description={"Single Page Application for a technical test using Bootstrap and FastAPI. Records sales in CSV, integrates them into a normalized MySQL database, and generates individual and team PDF reports. Includes Power BI dashboard for centralized visualization. Automatic commission calculation with bonus and penalty rules."} 
        Tools={"Bootstrap, FastAPI, MySQL, Power BI, CSV, PDF Reports"} 
        Images={images3}> 
      </Cardproject>

      <Cardproject Title={"Task & Role Assignment App in Power Apps"} Description={"Application that facilitates monthly work assignments, calculating work weeks with a single button. Designed for a company with different areas sharing rotating staff. Users can visualize where people are assigned and request reassignment via email through an integrated Power Automate flow."} Tools={"Power Apps, Power Automate, SharePoint"} Images={images1}> </Cardproject>

      <Cardproject Title={"Data Science in Public Transportation"} Description={"Applied the data science methodology (Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation) to analyze and model public transportation routes in Bucaramanga. Discovered that KNeighborsRegressor was the best ML technique for route prediction."} Tools={"Python, Power BI, Machine Learning"} Images={images2}> </Cardproject>
      </div>
        </motion.div>
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

      <motion.img src={circulo} alt="circulo" className="circulo11"  layoutId="circulo11" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}} />

      <motion.img src={circulo} alt="circulo2" className="circulo12" layoutId="circulo22" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo3" className="circulo13" 
      layoutId="circulo33" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>

      <motion.img src={circulo} alt="circulo4" className="circulo14" 
      layoutId="circulo44" transition={{ duration: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0.4 }}   
      animate={{ opacity: 0.4 }}   
      exit={{ opacity: 0}}/>
    </main>
    
    </>
  );
}