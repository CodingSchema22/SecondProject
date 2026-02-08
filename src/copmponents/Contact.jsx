import { motion } from "framer-motion";
const Contact = () =>{
    return(
        <>
     <section id="contact">
  <motion.div
    id="cont-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div id="contact">
      <div id="full">

        <motion.div
          className="image"
          id="relate"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="img2.jpg" alt="Contact" />
        </motion.div>

      <form className="contact-form">

  <div className="form-group">
    <label>Email</label>
    <br/>
    <input type="email" placeholder="Enter your email" />
    <br/>
  </div>

 <div className="form-group">
    <label>Message</label>
    <br/>
    <input type="message" placeholder="Enter your message" id="msg"/>
    <br/>
  </div>

  <div className="btn">
    <button type="submit">Submit</button>
  </div>
</form>


      </div>
    </div>
  </motion.div>
</section>

        </>
    )
}
// export default Contact
export default Contact;