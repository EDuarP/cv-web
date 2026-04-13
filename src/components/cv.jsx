import "./cv.css";
import pp from "../assets/pp.jpg";
import Navbar from "./navbar.jsx";
import sql from "../assets/sql.png";
import python from "../assets/python.png";
import powerbi from "../assets/powe-bi.png";
import powerapps from "../assets/powerapp.png";
import powerautomate from "../assets/power-automate.png";
import visualstudio from "../assets/visual-studio.png";
import iconreact from "../assets/react.svg";
import fastapi from "../assets/fastapi-seeklogo.png";
import circulo from "../assets/Ellipse 2.svg";
import { motion } from "motion/react";

export default function Cv() {

    return ( 
    <><Navbar />
    <motion.div className="page">
        <aside className="sidebar info">
            <motion.img src={pp} alt="Pp" className="Pp" layoutId="pp" 
            initial={false} transition={{ duration: 0.6, ease: "easeInOut" }}     
            exit={{ opacity: 0}}/>
            <h3>Eduardo J. Duarte Peña</h3>
            <p>Colombia</p>
            <div className="info">
                <a href="mailto:eduardo.jose881@gmail.com">Email</a>
                <a> - </a>
                <a href="https://www.linkedin.com/in/eduardo-duarte-penna/">LinkedIn</a>
            </div>
            <p></p>
            <a
                href="/HV.pdf"
                download="CV_Eduardo_Duarte.pdf"
                className="btn primary"
                >
                Download CV
            </a>

            <div className="social">
                <img src={python} className="logos" alt="Python" />
                <img src={sql} className="logos" alt="SQL" />
                <img src={powerbi} className="logos" alt="Power BI" />
                <img src={visualstudio} className="logos" alt="VS Code" />
            </div>
            <div className="social">
                <img src={iconreact} className="logos" alt="React" />
                <img src={fastapi} className="logos" alt="FastAPI" />
                <img src={powerapps} className="logos" alt="Power Apps" />
                <img src={powerautomate} className="logos" alt="Power Automate" />
            </div>
        </aside>
        <motion.main className="cv-container" initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: -20 }}
            transition={{ duration: 0.5 }}>
        <div className="cv">
        <div className="content">
            <h2>Education</h2>
            <ul>
                <li><strong>Universidad Santo Tomás, Colombia</strong> – B.Sc. in Mechatronics Engineering (2019–2025)</li>
                <li><strong>Coursera – Google Data Analytics Specialization</strong> (2023)</li>
            </ul>

            <h2>Professional Experience</h2>

            <h3>Space-Eyes — Machine Learning Engineer</h3>
            <p className="date">Oct 2025 – Present</p>
            <ul>
                <li>Designed and implemented an end-to-end RF data acquisition and processing pipeline in Python, capturing wideband IQ signals and generating spectrograms for robust signal analysis.</li>
                <li>Developed a real-time drone detection and triangulation system using Raspberry Pi, integrating ML models with specialized RF hardware (SDRs, GPSDO, directional antennas) for accurate localization.</li>
                <li>Defined and documented mathematical foundations for RF-based triangulation, ensuring reproducibility and precision across diverse operational scenarios.</li>
                <li>Implemented a resilient MQTT-based distributed communication architecture, achieving stable telemetry transmission up to 5 km under challenging RF conditions.</li>
                <li>Built a scalable backend using FastAPI with structured APIs for real-time RF data interaction and monitoring.</li>
                <li>Leveraged Microsoft Azure for training and optimizing ML models, improving detection performance and enabling scalable experimentation workflows.</li>
                <li>Led the transition from MVP to Tier-1 system architecture, defining system tiers and implementing improvements in scalability, reliability, and modularity.</li>
            </ul>

            <h3>ELVA AI — Machine Learning Engineer</h3>
            <p className="date">Aug 2025 – Sept 2025</p>
            <ul>
                <li>Trained a model to classify Wi-Fi, LTE, and DVB-T signals from IQ samples, optimized for resource-constrained devices.</li>
                <li>Automated city-level reports including confusion matrices and interactive visualizations.</li>
                <li>Implemented authentication in AKS with Azure AD, improving cloud deployment security.</li>
                <li>Reduced storage costs by 20% through disk optimization and retention policies in Azure.</li>
            </ul>

            <h3>TAYRONAMA SAS — Automation Developer & Data Analytics</h3>
            <p className="date">Mar 2025 – Jul 2025</p>
            <ul>
                <li>Developed a Python application for pig traceability, integrating data acquisition through serial communication.</li>
                <li>Processed and analyzed data using Pandas, generating automated reports and Power BI dashboards.</li>
                <li>Implemented automated report delivery via WhatsApp API, improving client communication efficiency.</li>
            </ul>

            <h3>Merck Sharp & Dohme (MSD) — Innovation & Technology Intern - Data Analytics</h3>
            <p className="date">Jul 2024 – Feb 2025</p>
            <ul>
                <li>Saved more than 30 hours per month by optimizing training processes through data analysis.</li>
                <li>Developed a KPI monitoring system in Power BI to ensure performance quality.</li>
                <li>Implemented solutions using Power Apps and Power Automate, improving operational efficiency.</li>
                <li>Processed large datasets using Python, SQL, and machine learning libraries.</li>
            </ul>

            <h3>Universidad Santo Tomás — Data Scientist / Junior Researcher</h3>
            <p className="date">Jun 2023 – Nov 2023</p>
            <ul>
                <li>Built machine learning models to predict public transportation routes.</li>
                <li>Developed a Power BI dashboard with urban mobility insights for Bucaramanga.</li>
                <li>Scientific publication: <em>Advances in solutions on public transportation problems with AI</em>.</li>
            </ul>

            <h2>Courses and Certifications</h2>
            <ul>
                <li><strong>2024:</strong> Process Improvement, Harvard ManageMentor</li>
                <li><strong>2023:</strong> Data Science & AI, MinTIC</li>
                <li><strong>2023:</strong> Machine Learning Fundamentals, DataCamp</li>
                <li><strong>2023:</strong> Implementing AI Solutions in Business, DataCamp</li>
                <li><strong>2023:</strong> Databases and SQL for Data Science, Coursera</li>
                <li><strong>2023:</strong> Deep Learning in Python, DataCamp</li>
                <li><strong>2022:</strong> Python for Data Science, Coursera</li>
            </ul>

            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Programming:</strong> Python, SQL, React, FastAPI</li>
                <li><strong>Machine Learning:</strong> Machine Learning, Deep Learning, Signal Classification, Model Optimization, PyTorch</li>
                <li><strong>RF & Signal Processing:</strong> IQ Signal Processing, Spectrogram Generation, RF Spectrum Analysis, SDR, bladeRF</li>
                <li><strong>Data & Analytics:</strong> Data Analysis, Pandas, Data Visualization, Power BI</li>
                <li><strong>Systems & Infrastructure:</strong> MQTT Distributed Systems, Data Pipelines, Edge Computing, Cloud Deployment (Azure, AKS)</li>
                <li><strong>Tools:</strong> Power BI, Power Apps, Power Automate, Git</li>
                <li><strong>Methodologies:</strong> CRISP-DM, Process Automation</li>
            </ul>

            <h2>Awards</h2>
            <ul>
                <li><strong>2023:</strong> 1st Place, CienTIoN – Research and Innovation Category</li>
                <li><strong>2023:</strong> 3rd Place, Huawei ICT Competition - Cloud Track</li>
            </ul>

            <h2>Languages</h2>
            <ul>
                <li><strong>Spanish:</strong> Native</li>
                <li><strong>English:</strong> B2</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>Sebastián Murcia – General Manager, Tayronama SAS – +57 321 6680277</li>
                <li>Iván Lis – Safety Data Manager, MSD – +57 310 7735259</li>
                <li>Carlos Pimentel – Research Professor, Universidad Santo Tomás – +57 316 2373049</li>
            </ul>
            </div>
            </div>
    </motion.main>
          <motion.img src={circulo} alt="circulo" className="circulo"  layoutId="circulo1" transition={{ duration: 0.6, ease: "easeInOut" }} 
          initial={{ opacity: 0.4 }}   
            animate={{ opacity: 0.4 }}   
            exit={{ opacity: 0}}/>

          <motion.img src={circulo} alt="circulo2" className="circulo2" layoutId="circulo2" transition={{ duration: 0.6, ease: "easeInOut" }}
          initial={{ opacity: 0.4 }}   
            animate={{ opacity: 0.4 }}   
            exit={{ opacity: 0}} />

          <motion.img src={circulo} alt="circulo3" className="circulo3"  layoutId="circulo3" transition={{ duration: 0.6, ease: "easeInOut" }}
          initial={{ opacity: 0.4 }}   
            animate={{ opacity: 0.4 }}   
            exit={{ opacity: 0}}/>

          <motion.img src={circulo} alt="circulo4" className="circulo4"  layoutId="circulo4" transition={{ duration: 0.6, ease: "easeInOut" }}
          initial={{ opacity: 0.4 }}   
            animate={{ opacity: 0.4 }}   
            exit={{ opacity: 0}}/>
    </motion.div>
    </>
  );
}