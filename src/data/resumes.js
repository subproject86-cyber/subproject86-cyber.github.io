import { Globe, Cpu, Smartphone, Database, Zap, PenTool, Layout, Server, Wifi } from 'lucide-react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaVuejs, FaJava,
    FaPython, FaRaspberryPi, FaDocker, FaFigma
} from "react-icons/fa";
import {
    SiTailwindcss, SiMysql, SiMongodb, SiFlutter, SiAndroidstudio,
    SiAdobexd, SiRoboflow, SiTensorflow, SiOpencv, SiStreamlit,
    SiArduino, SiCplusplus, SiNodered
} from "react-icons/si";

// Images


import listAi from '../assets/๋J/ai/Segment.jpg';
import listAi2 from '../assets/๋J/ai/Segment ai2.png';
import blueberryYield from '../assets/๋J/ai/Prediction of Wild Blueberry Yield.png';

import listMobile from '../assets/๋J/web/Listmobile.png';
import listWeb from '../assets/๋J/web/Listweb.png';
import listWeb2 from '../assets/๋J/web/Listweb2.png';

import listRobot from '../assets/๋J/robot/ListRobot.png';

import smartMushroom from '../assets/๋J/Iot/Smart Mushroom Farm.jpg';
import Alarm from '../assets/๋J/Iot/Alarm กินยา.jpg';
import iotNeon from '../assets/๋J/Iot/Iot neon.png';
import wasteCabinet from '../assets/๋J/Iot/Metal bottle Detecting cabinet.jpg';
import Pi from '../assets/๋J/Iot/Pi home assitant esp32.jpg';
import Temp from '../assets/๋J/Iot/Tempmushroom.jpg';
import Ui from '../assets/๋J/web/UI.png';

import cyberLearning from '../assets/Tae/web/CyberLearningPlatform.png';
import financialDashboard from '../assets/Tae/web/FinancialManagement.png';
import sensorDataSimulation from '../assets/Tae/web/SensorSimulation.png';
import ipcamera from '../assets/Tae/iot/Ipcamera.jpg';



export const profileData = {
    brand: "YourSkill",
    tagline: "Bridging Software, IoT, and AI",
    description: "A collaborative portfolio combining the strengths of Full Stack Development, IoT Engineering, and Artificial Intelligence.",
    about: "We are a duo of passionate developers from Thailand, combining deep expertise in Computer Science, Robotics, and Web Technologies. Our unified goal is to deliver end-to-end digital solutions that just work.",
    services: [
        {
            title: "Web Development",
            description: "Scalable web apps using React, Node.js, and modern frameworks.",
            icon: Globe
        },
        {
            title: "Mobile Application",
            description: "Cross-platform mobile solutions with Flutter and Native technologies.",
            icon: Smartphone
        },
        {
            title: "AI & Data",
            description: "Intelligent systems, Machine Learning models, and predictive analytics.",
            icon: Database
        },
        {
            title: "IoT Solutions",
            description: "Connected hardware, sensors, and smart automation systems.",
            icon: Cpu
        }
    ],
    skills: {
        web: [
            { name: "ReactJS", level: 90, icon: "FaReact" },
            { name: "Vue.js", level: 85, icon: "FaVuejs" },
            { name: "Node.js", level: 90, icon: "FaNodeJs" },
            { name: "Django", level: 85, icon: "FaDjango" },
            { name: "Odoo", level: 85, icon: "SiOdoo" },
            { name: "MUI", level: 95, icon: "SiMUI" },
            { name: "Tailwind", level: 95, icon: "SiTailwindcss" },
            { name: "TypeScript", level: 90, icon: "SiTypescript" },
            { name: "MySQL", level: 88, icon: "SiMysql" },
            { name: "MongoDB", level: 85, icon: "SiMongodb" }


        ],
        application: [
            { name: "Flutter", level: 85, icon: "SiFlutter" },
            { name: "React Native", level: 85, icon: "FaReact" },
            { name: "Android Studio", level: 80, icon: "SiAndroidstudio" },
            { name: "Figma", level: 85, icon: "FaFigma" },
            { name: "Adobe XD", level: 80, icon: "SiAdobexd" }
        ],
        ai: [
            { name: "Python", level: 90, icon: "FaPython" },
            { name: "YOLOv8", level: 85, icon: "SiRoboflow" },
            { name: "PyTorch", level: 75, icon: "SiPytorch" },
            { name: "OpenCV", level: 80, icon: "SiOpencv" },
            { name: "Streamlit", level: 85, icon: "SiStreamlit" }
        ],
        iot: [
            { name: "Arduino", level: 90, icon: "SiArduino" },
            { name: "Raspberry Pi", level: 85, icon: "FaRaspberryPi" },
            { name: "C/C++", level: 80, icon: "SiCplusplus" },
            { name: "Docker", level: 80, icon: "FaDocker" },
            { name: "Node-RED", level: 75, icon: "SiNodered" }
        ]
    },
    projects: [

        {
            title: "AI Mushroom Cultivation IoT",
            description: "Smart system integrating sensors and Computer Vision (YOLOv8) to monitor temperature, humidity, and mushroom growth.",
            tech: ["Python", "IoT", "YOLOv8", "Roboflow"],
            image: listAi
        },
        {
            title: "AI Mushroom Growing IoT",
            description: "Smart system integrating sensors and Computer Vision (YOLOv8) to monitor temperature, humidity, and mushroom growth.",
            tech: ["Python", "IoT", "YOLOv8", "Roboflow"],
            image: listAi2
        },
        {
            title: "Blueberry Yield Prediction",
            description: "Kaggle kernel using XGBoost and pickle to forecast wild blueberry yield, deployed via Streamlit.",
            tech: ["Python", "XGBoost", "Streamlit"],
            image: blueberryYield
        },
        {
            title: "Mushroom Temperature Monitor",
            description: "Created a dedicated Mushroom Temperature Monitor to log and display real-time environmental data for agricultural optimization.",
            tech: ["ReactJS", "Node.js", "MySQL", "Node-RED"],
            image: listWeb
        },
        {
            title: "List mobile",
            description: "List mobile application for warehouse management with user interface and user experience design.",
            tech: ["Flutter", "Java", "Android Studio"],
            image: listMobile
        },
        {
            title: "Web Application AEKI",
            description: "Web application AEKI for warehouse management with user interface and user experience design.",
            tech: ["ReactJS", "Node.js", "Node.js"],
            image: listWeb2
        },
        {
            title: "Cybersecurity Learning Platform",
            description: "A web-based platform simulating real-world cyber threat scenarios for user training. Thesis project.",
            tech: ["ReactJS", "Node.js", "Docker", "MySQL"],
            image: cyberLearning
        },
        {
            title: "Financial Management Dashboard",
            description: "Complete UI/UX design and implementation stock and bill module with CRUD operations and REST API.",
            tech: ["React", "TypeScript", "Node.js", "MongoDB"],
            image: financialDashboard
        },

        {
            title: "Sensor Data Simulation Web App",
            description: "Developed a web application to store sensor data from tower systems and export CSV file for data log.",
            tech: ["ReactJS", "Node.js", "MySQL"],
            image: sensorDataSimulation
        },
        {
            title: "Robot Tracking System",
            description: "Joy PS2-controlled robot that tracks lines and performs acrobatics. Uses Arduino Nano and mobile control.",
            tech: ["C++", "Arduino", "Robotics"],
            image: listRobot
        },
        {
            title: "Smart Mushroom Farm",
            description: "IoT project using ESP32 to detect mushroom growth and temperature.",
            tech: ["ESP32", "C++", "Sensors"],
            image: smartMushroom
        },
        {
            title: "Temp Mushroom Farm",
            description: "IoT project using Metter to detect temperature and humidity.",
            tech: ["ESP32", "C++", "Sensors"],
            image: Temp
        },
        {
            title: "Waste Sorting Smart Cabinet",
            description: "IoT project using ESP32 to detect and sort plastic vs metal bottles automatically.",
            tech: ["ESP32", "C++", "Sensors"],
            image: wasteCabinet
        },
        {
            title: "Alarm System",
            description: "IoT project using ESP32 to detect motion and send notifications.",
            tech: ["ESP32", "C++", "Sensors"],
            image: Alarm
        },
        {
            title: "Smart Home System",
            description: "IoT project using Raspberry Pi to control home appliances.",
            tech: ["Raspberry Pi", "Python", "Home Assistant"],
            image: Pi
        },
        {
            title: "Ip Camera Object Detection",
            description: "IoT project using Raspberry Pi to detect objects in real-time.",
            tech: ["Raspberry Pi", "Python", "OpenCV"],
            image: ipcamera
        },
        {
            title: "Smart Lamp Application",
            description: "IoT project using ESP32 to control smart lighting systems.",
            tech: ["ESP32", "C++", "Sensors"],
            image: iotNeon
        },
        {
            title: "UX/UI another project",
            description: "Ux/UI design and prototyping.",
            tech: ["Adobe XD", "Figma", "UI/UX", "Prototyping"],
            image: Ui
        }
    ]
};
