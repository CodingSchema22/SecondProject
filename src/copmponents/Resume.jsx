import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="Resume">
      <motion.div
        id="cont-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div id="res">
          <div className="resume">
            <h1 id="hea">Resume</h1>

            {/* TAB BAR */}
            <div className="bar">
              <h2
                className={activeTab === "education" ? "active" : ""}
                onClick={() => setActiveTab("education")}
              >
                Education
              </h2>

              <div className="vertical-line"></div>

              <h2
                className={activeTab === "skills" ? "active" : ""}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </h2>
            </div>

            {/* CONTENT */}
            <AnimatePresence mode="wait">
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  className="eductions"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="boxes"> <p className="date">2018-19</p> <h2>Completed Matriculation</h2> <p>The Quest High School Completed matriculation in 2018-2019, eager to explore new educational opportunities</p> </div>
                   <div className="boxes"> <p className="date">2018-19</p> <h2>Completed Matriculation</h2> <p>The Quest High School Completed matriculation in 2018-2019, eager to explore new educational opportunities</p> </div>

                  <div className="boxes"> <p className="date">2018-19</p> <h2>Completed Matriculation</h2> <p>The Quest High School Completed matriculation in 2018-2019, eager to explore new educational opportunities</p> </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  className="skills"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                    {/* <div className="rating">
                        
                        <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                     <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                        <div className="div">
                 </div>   
                 <div className="div">
                 </div>   
                  <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                 <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                        <div className="div">
                 </div>   
                 <div className="div">
                 </div>   
                  <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                  <div className="rate-name">
                    <h3>HTML</h3>
                     <p>80%</p>
                     </div>
                        <div className="div">
                 </div>
                  <div className="div">
                 </div>    
                   
                     </div> */}
<div class="rating">
  <div class="rate-name">
    <span>HTML</span>
    <span>90%</span>
  </div>
  <div class="div" data-skill="90"></div>

  <div class="rate-name">
    <span>CSS</span>
    <span>85%</span>
  </div>
  <div class="div" data-skill="85"></div>

  <div class="rate-name">
    <span>JavaScript</span>
    <span>75%</span>
  </div>
  <div class="div" data-skill="75"></div>
</div>


                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
