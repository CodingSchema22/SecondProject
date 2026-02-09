import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <section id="hero">
      <div className="main-cont">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
<div className="heading">
<h3>
  <i>
    Hi There!
  </i>
</h3>
<h1>
  <i>I am a Frontend Web Developer </i>
  </h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non doloribus cupiditate maxime labore, sint quam ad fugit sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam non doloribus cupiditate maxime labore, sint quam ad fugit sit.
</p>
{/* <div className="info">
  <div className="bo-1">hi</div>
  <div className="bo-1">hi</div>
  <div className="bo-1">hi</div>
  <div className="bo-1">hi</div>
</div> */}
<div className="btn">
    <button>Contact Me</button>
    <button>Contact Me</button>

</div>
</div>
    
</motion.div>

      <motion.div
        className="hexagon"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="img2.jpg" alt="Hero" />

      </motion.div>
      </div>
    </section>
    </>
  );
};

export default Hero;