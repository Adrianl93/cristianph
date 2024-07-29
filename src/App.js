import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnlineCourses from './components/OnlineCourses'; 
import Home from './components/Home'; 
import NavBar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';

import './App.css';

const projectData = {
    colors: {
        primary: "#a47b5e",
        secondary: "#f7dbb0",
        accent: "#393237",
        backHome: "#be9380",
        back1: "#d4b39f",
        back2:"#ead4bf",
        back3: "#f5dfb0"
    },
    navBar: {
        home: "Home",
        sections: [
            { id: "section1", label: "Fotografía" },
            { id: "section2", label: "Cursos" },
            { id: "section3", label: "Contacto" }
        ]
    },
    sections: [
        {
            id: "home",
            title: "Bienvenido al Curso de Fotografía",
            description: "Aprende los fundamentos de la fotografía profesional. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus, arcu nec facilisis scelerisque, lectus dolor commodo urna, et eleifend dui ipsum sed massa. Donec ultrices libero at leo tristique, id dictum ligula sodales. Sed sodales molestie ligula vel facilisis. Aliquam congue sem eget urna congue, eu lobortis dui hendrerit. Aenean id accumsan urna. Donec nec turpis sem. Nunc quis sodales sapien, at faucibus nibh. Nulla congue justo vitae ligula luctus, rutrum luctus sapien placerat. Maecenas vehicula massa vitae diam malesuada varius. Sed aliquet condimentum sem ut blandit. Pellentesque vitae urna at ipsum convallis dapibus vitae ac lectus. Phasellus at pellentesque enim.",
            image: foto1,
            backgroundColor: "#be9380"
        },
        {
            id: "section1",
            title: "Fotografía",
            description: "Contenido de la primera sección. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: foto2,
            backgroundColor: "#d4b39f",
            images: [foto1, foto2, foto3, foto4,foto1, foto2, foto3, foto4,foto1, foto2, foto3, foto4,foto1, foto2, foto3, foto4] 
        },
        {
            id: "section2",
            title: "Cursos",
            description: "Contenido de la segunda sección. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            image: foto3,
            backgroundColor: "#ead4bf",
            courseStartDate: '2024-08-03T10:00:00', // Fecha del curso
            contact: {
                whatsapp: "https://wa.me/3584601279", // Asegúrate de que el número de WhatsApp está definido aquí
                message: "Hola Cristian!! quiero inscribirme a tu curso"
            }
        },
        {
            id: "section3",
            title: "Contacto",
            description: "",
            image: foto4,
            backgroundColor: "#f5dfb0",
        
            form: {
                namePlaceholder: "Nombre",
                emailPlaceholder: "Email",
                messagePlaceholder: "Mensaje",
                submitButtonLabel: "Enviar"
            }
        }
    ],
    footer: {
        email: "mailto:email@example.com",
        whatsapp: "https://wa.me/3584601279",
        instagram: "https://www.instagram.com/cristianbarizonephotography"
    },
    onlineCourses:  { 
        curso1: {
            id:1,
            title: 'Curso 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat habitasse netus quam tristique montes nec torquent pharetra, id ut nulla vehicula lectus odio pretium nisl luctus vulputate dui eleifend diam ultricies natoque. Egestas semper dis hendrerit penatibus est varius gravida magnis ut congue scelerisque, nostra sociis libero quam habitant sodales sed platea fringilla. Non nascetur scelerisque vitae penatibus felis eget volutpat tincidunt magnis suscipit.',
            whatsappMessage: 'Hola, estoy interesado en el Curso 1',
        },
        curso2: {
            id:2,
            title: 'Curso 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat habitasse netus quam tristique montes nec torquent pharetra, id ut nulla vehicula lectus odio pretium nisl luctus vulputate dui eleifend diam ultricies natoque. Egestas semper dis hendrerit penatibus est varius gravida magnis ut congue scelerisque, nostra sociis libero quam habitant sodales sed platea fringilla. Non nascetur scelerisque vitae penatibus felis eget volutpat tincidunt magnis suscipit.',
            whatsappMessage: 'Hola, estoy interesado en el Curso 2',
        },
        curso3: {
            id:3,
            title: 'Curso 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat habitasse netus quam tristique montes nec torquent pharetra, id ut nulla vehicula lectus odio pretium nisl luctus vulputate dui eleifend diam ultricies natoque. Egestas semper dis hendrerit penatibus est varius gravida magnis ut congue scelerisque, nostra sociis libero quam habitant sodales sed platea fringilla. Non nascetur scelerisque vitae penatibus felis eget volutpat tincidunt magnis suscipit.',
            whatsappMessage: 'Hola, estoy interesado en el Curso 3',
        },
        curso4: {
            id:4,
            title: 'Curso 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit consequat habitasse netus quam tristique montes nec torquent pharetra, id ut nulla vehicula lectus odio pretium nisl luctus vulputate dui eleifend diam ultricies natoque. Egestas semper dis hendrerit penatibus est varius gravida magnis ut congue scelerisque, nostra sociis libero quam habitant sodales sed platea fringilla. Non nascetur scelerisque vitae penatibus felis eget volutpat tincidunt magnis suscipit.',
            whatsappMessage: 'Hola, estoy interesado en el Curso 4',
        }
    }
};



function App() {
    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', projectData.colors.primary);
        document.documentElement.style.setProperty('--secondary-color', projectData.colors.secondary);
        document.documentElement.style.setProperty('--accent-color', projectData.colors.accent);
    }, []);

    return (
        <Router>
            <div className="App">
                <NavBar data={projectData.navBar} />
                <Routes>
                    {/* Ruta para la página principal */}
                    <Route path="/" element={<Home data={projectData} />} />

                    {/* Ruta para la página de Cursos Online */}
                    <Route path="/OnlineCourses" element={<OnlineCourses data={projectData} />} />

                    {/* Rutas para las secciones */}
                    {projectData.sections.map((section) => (
                        <Route key={section.id} path={`/${section.id}`} element={<Section data={section} />} />
                    ))}

                    {/* Ruta por defecto o 404 */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
                <Footer data={projectData.footer} />
            </div>
        </Router>
    );
}

export default App;
