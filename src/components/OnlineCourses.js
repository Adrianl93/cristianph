import React from 'react';
import '../styles/OnlineCourses.css';

const CourseItem = ({ title, description, whatsappMessage }) => {
    const handleClick = () => {
        window.open(`https://wa.me/3584601279?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    return (
        <div className="course-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleClick} className="whatsapp-button">
                Enviar mensaje
            </button>
        </div>
    );
};

const OnlineCourses = ({ data }) => {
    const courses = [
        {
            title: data.onlineCourses.curso1.title,
            description: data.onlineCourses.curso1.description,
            whatsappMessage: data.onlineCourses.curso1.whatsappMessage
        },
        {
            title: data.onlineCourses.curso2.title,
            description: data.onlineCourses.curso2.description,
            whatsappMessage: data.onlineCourses.curso2.whatsappMessage
        },
        {
            title: data.onlineCourses.curso3.title,
            description: data.onlineCourses.curso3.description,
            whatsappMessage: data.onlineCourses.curso3.whatsappMessage
        },
        {
            title: data.onlineCourses.curso4.title,
            description: data.onlineCourses.curso4.description,
            whatsappMessage: data.onlineCourses.curso4.whatsappMessage
        }
    ];

    return (
        <div className="courses-container"> 
            <div className="courses-online">
                <h1>Cursos Online</h1>
                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <CourseItem
                            key={index}
                            title={course.title}
                            description={course.description}
                            whatsappMessage={course.whatsappMessage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OnlineCourses;
