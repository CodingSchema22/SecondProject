import { motion } from "framer-motion";

const About = () => {
  return (
       <section id="hero" className="cont" >
      <div className="main-cont">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="total">
<div className="heading" id="head-2">
  <h3>
 <i>
   Who I am
 </i>
</h3>
 <h1>
  <i>I am a Frontend Web Developer </i></h1>
<p id="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur libero voluptatibus voluptate accusantium pariatur doloribus quos! Consequatur, provident nulla? Provident earum veniam, numquam temporibus dolor atque nostrum consequatur explicabo! Porro?</p>
<hr></hr>

{/* <h1>
  <i>I am a Frontend Web Developer </i></h1>
<p>I make complex designs easily</p> */}
<div className="btn">
    <button>Download Resume</button>
</div>
</div>
<div className="info">
  <div className="bo-1">Name <br></br>Fatima</div>
  <div className="bo-1">Location <br></br>Lahore</div>
  <div className="bo-1">Email <br></br>fahadjutt109</div>
</div>
</div>
    
 </motion.div>

      <motion.div
        className="image" id="imge"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="img2.jpg" alt="Hero" />

      </motion.div> 
      </div>
    </section>
);
};

export default About;