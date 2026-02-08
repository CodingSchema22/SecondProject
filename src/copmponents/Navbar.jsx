// const Nav = () => {
//   return (
//     <div className="box">
//       <div className="logo">
//         <h2><i>THEPRO</i></h2>
//       </div>

//       <div className="nav">
//         <a href="#hero">Home</a>
//         {/* <a href="#about">About</a> */}
//         <a href="#Services">Services</a>
//         <a href="#Resume">Resume</a>
//         <a href="#Projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </div>
//   );
// };

// export default Nav;





































import { useState } from "react";
// import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="box">
      <div className="logo">
       <h2><i>THEPRO</i></h2>
     </div>

      {/* Hamburger / Cross Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`nav ${menuOpen ? "active" : ""}`}>
                <a href="#hero">Home</a>
        {/* <a href="#about">About</a> */}
        <a href="#Services">Services</a>
        <a href="#Resume">Resume</a>
        <a href="#Projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
