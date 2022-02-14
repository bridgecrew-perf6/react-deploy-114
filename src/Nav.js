import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show,handleShow] = useState(false);

  const transitionNavBar=()=>{
    if (window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  },[]);


  return (
     <div className= {`nav ${show && 'nav_black'}`} >
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img className="nav_profile" src="https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=1000x750&vertical=top" alt="" />
      </div>
    </div>
  );
}

export default Nav;



