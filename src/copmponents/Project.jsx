import { motion } from "framer-motion";
const services = [
  {
    icon: "fa-brands fa-react",
    title: "MERN Stack Development",
    desc: "Developed a tech e-commerce site with Add to Cart and role-based dashboards.",
    img: "/img2.jpg"
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Responsive Website",
    desc: "Building modern, responsive websites with smooth UI and clean layouts.",
    img: "/img2.jpg"
  },
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    desc: "Creating fast, interactive UIs using React, animations, and best UX practices.",
    img: "/img2.jpg"
  }
];

const Porject = () => {
  return (
    <section id="Projects">
      <div className="services">
        <h2>My Projects</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
                <div className="service-info">
                <div className="img">
              <img src={service.img} alt={service.title} />
              </div>
              <div className="about">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              </div>
              <div className="btn">
                <button>See details</button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Porject;
