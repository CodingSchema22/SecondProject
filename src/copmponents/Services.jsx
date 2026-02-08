import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "fa-brands fa-react",
    title: "MERN Stack Development",
    desc: "I am a passionate MERN Stack developer skilled in building dynamic, full-stack web applications using modern technologies"
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Responsive Website",
    desc: "I am a passionate MERN Stack developer skilled in building dynamic, full-stack web applications using modern technologies"
  },
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    desc: "I am a passionate MERN Stack developer skilled in building dynamic, full-stack web applications using modern technologies"
  }
];

const Services = () => {
  return (
    <section id="Services">
    
        <div className="services">
      <h2>My Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
                    <motion.div
                         key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
          >
          <div className="service-crd" key={index}>
            <div className="service-info">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            </div>
          </div>
           </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;